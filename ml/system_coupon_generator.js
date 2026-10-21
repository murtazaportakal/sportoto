/**
 * Spor Toto System Ticket (Kupon) Generator
 * 
 * Transforms match probability vectors into mathematically optimized
 * system coupons (Single, Double Chance, and Banko combinations).
 */

const SystemCouponGenerator = {
  columnPriceTL: 5, // Official Spor Toto price per column in TL

  /**
   * Generates an optimized system coupon based on desired double chances.
   * 
   * @param {Array} predictions - Array of 15 match prediction objects
   * @param {number} doubleChanceCount - Number of matches to cover with double chance (default 4 -> 16 columns)
   * @returns {Object} coupon details
   */
  generateCoupon(predictions, doubleChanceCount = 4, strategy = 'draw_protection') {
    if (!predictions || predictions.length === 0) return null;

    // Calculate volatility / uncertainty for each match
    // Volatility is highest when gap between Home and Away is minimal and Draw is high
    const rankedMatches = predictions.map(p => {
      const h = parseFloat(p.homeWin);
      const d = parseFloat(p.draw);
      const a = parseFloat(p.awayWin);
      const gap = Math.abs(h - a);
      
      // Uncertainty metric (lower gap + higher draw = higher uncertainty)
      const uncertainty = (100 - gap) * 0.7 + (d * 1.5);

      return {
        ...p,
        h, d, a, gap, uncertainty
      };
    }).sort((a, b) => b.uncertainty - a.uncertainty); // Highest uncertainty first

    // Select the top N most volatile matches for Double Chance
    const doubleChanceIds = new Set(rankedMatches.slice(0, doubleChanceCount).map(m => m.id));

    const ticketMatches = predictions.map(p => {
      const h = parseFloat(p.homeWin);
      const d = parseFloat(p.draw);
      const a = parseFloat(p.awayWin);
      const isDouble = doubleChanceIds.has(p.id);

      let pick = '1';
      let pickType = 'Single';

      if (isDouble) {
        if (strategy === 'draw_protection') {
          // In draw protection, pair the favored outcome with the Draw (1-X or X-2)
          pick = (h >= a) ? '1-X' : 'X-2';
        } else {
          // Maximum probability coverage: pick the 2 highest probabilities
          const candidates = [
            { code: '1', p: h },
            { code: 'X', p: d },
            { code: '2', p: a }
          ].sort((x, y) => y.p - x.p);
          
          const codes = [candidates[0].code, candidates[1].code];
          if (codes.includes('1') && codes.includes('X')) pick = '1-X';
          else if (codes.includes('X') && codes.includes('2')) pick = 'X-2';
          else pick = '1-2';
        }
        pickType = 'Double (Çifte Şans)';
      } else {
        // Banko pick: dominant side or equilibrium X
        if (Math.abs(h - a) <= 4.0) {
          pick = 'X';
        } else if (a > h) {
          pick = '2';
        } else {
          pick = '1';
        }
        pickType = 'Banko (Single)';
      }

      return {
        id: p.id,
        homeTeam: p.homeTeam,
        awayTeam: p.awayTeam,
        homeWin: p.homeWin,
        draw: p.draw,
        awayWin: p.awayWin,
        pick,
        pickType,
        isDouble
      };
    });

    const totalColumns = Math.pow(2, doubleChanceCount);
    const totalCostTL = totalColumns * this.columnPriceTL;

    return {
      doubleChanceCount,
      totalColumns,
      totalCostTL,
      ticketMatches
    };
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SystemCouponGenerator };
}
