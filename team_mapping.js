const teamMap = {
  // Turkish Super Lig & 1. Lig
  'galatasaray': 'GAL', 'fenerbahce': 'FEN', 'besiktas': 'BJK',
  'trabzonspor': 'TRA', 'basaksehir': 'IBFK', 'adana demirspor': 'ADS',
  'antalyaspor': 'ANT', 'kasimpasa': 'KAS', 'alanyaspor': 'ALA',
  'kayserispor': 'KAY', 'sivasspor': 'SIV', 'konyaspor': 'KON',
  'ankaragucu': 'ANK', 'hatayspor': 'HAT', 'karagumruk': 'FKG',
  'gaziantep': 'GAZ', 'samsunspor': 'SAM', 'rizespor': 'RIZ',
  'pendikspor': 'PEN', 'istanbulspor': 'IST', 'goztepe': 'GOZ',
  'amed': 'AME', 'genclerbirligi': 'GEN', 'erzurum': 'ERZ', 'erzurumspor': 'ERZ',
  'kocaelispor': 'KOC', 'eyupspor': 'EYU', 'corum': 'COR', 'bodrum': 'BOD', 'bodrumspor': 'BOD',

  // European Teams
  'everton': 'EVE', 'chelsea': 'CHE', 'brentford': 'BRE',
  'liverpool': 'LIV', 'manchester city': 'MCI', 'man city': 'MCI',
  'arsenal': 'ARS', 'manchester united': 'MUN', 'tottenham': 'TOT',
  'real betis': 'BET', 'betis': 'BET', 'barcelona': 'BAR',
  'real madrid': 'RMA', 'sevilla': 'SEV', 'villarreal': 'VIL',
  'inter milan': 'INT', 'ac milan': 'MIL', 'milan': 'MIL', 'atalanta': 'ATA', 'juventus': 'JUV',
  'lazio': 'LAZ', 'inter': 'INT', 'roma': 'ROM', 'como': 'COM',
  'bayern': 'BAY', 'leipzig': 'RBL', 'frankfurt': 'EIN', 'augsburg': 'AUG',
  'dortmund': 'BVB', 'borussia dortmund': 'BVB',
  'monaco': 'ASM', 'as monaco': 'ASM',
  'lille': 'LIL',
  'paris': 'PSG', 'psg': 'PSG',
  'lyon': 'LYO', 'olympique lyon': 'LYO',
  'napoli': 'NAP', 'stuttgart': 'VFB', 'werder bremen': 'SVW', 'aston villa': 'AVL', 'valencia': 'VAL', 'atletico madrid': 'ATM'
};

function normalizeName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/İ/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getCode(name) {
  const national = require('./national_teams').nationalCode(name);
  if(national) return national;
  const clean = normalizeName(name);

  // Match whole words only; unknown names must never resolve to unrelated teams.
  for (const [key, code] of Object.entries(teamMap).sort((a, b) => b[0].length - a[0].length)) {
    if ((' ' + clean + ' ').includes(' ' + normalizeName(key) + ' ')) return code;
  }

  return null;
}


module.exports = { getCode };
