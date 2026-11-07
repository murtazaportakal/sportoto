/** Coverage and column counts are separate from predictive scores and returns. */
function evaluateCoupon(ticket, outcomes, unitPrice=null) {
  if(!Array.isArray(ticket)||ticket.length!==15||new Set(ticket.map(m=>m.id)).size!==15)throw new Error('Complete unique 15-match ticket required');
  if(unitPrice!==null&&(!Number.isFinite(unitPrice)||unitPrice<=0))throw new Error('Invalid declared column price');
  let columns=1,covered=true;
  for(const match of ticket) {
    const picks=String(match.pick).split('-');
    if(!picks.length||picks.length>3||new Set(picks).size!==picks.length||picks.some(p=>!['1','X','2'].includes(p)))throw new Error('Invalid coupon pick');
    const outcome=outcomes[match.id];if(!['1','X','2'].includes(outcome))throw new Error('Missing coupon settlement');
    columns*=picks.length;covered=covered&&picks.includes(outcome);
  }
  return {columns,covered,cost:unitPrice===null?null:columns*unitPrice,declaredUnitPrice:unitPrice,returns:null};
}
module.exports={evaluateCoupon};
