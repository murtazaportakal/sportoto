const labels = ['1','X','2'];
function probabilities(p) {
  if (!Array.isArray(p) || p.length !== 3 || p.some(v => !Number.isFinite(v) || v < 0 || v > 1) || Math.abs(p.reduce((a,b)=>a+b,0)-1)>1e-9) throw new Error('Invalid probabilities');
  return p;
}
function loss(row) {
  const index=labels.indexOf(row.actualOutcome);
  if (index<0) throw new Error('Invalid outcome');
  return -Math.log(Math.max(1e-15, probabilities(row.probabilities)[index]));
}
function summarize(rows) {
  const matrix=labels.map(()=>[0,0,0]);
  const bins=labels.map(()=>Array.from({length:10},(_,i)=>({lower:i/10,upper:(i+1)/10,count:0,probabilitySum:0,actualSum:0})));
  let logLoss=0,brier=0,correct=0;
  for (const row of rows) {
    logLoss+=loss(row);
    const p=row.probabilities,index=labels.indexOf(row.actualOutcome),pick=p.indexOf(Math.max(...p));
    matrix[index][pick]++;correct+=index===pick?1:0;
    p.forEach((v,i)=>{
      brier+=(v-Number(i===index))**2;
      const bin=bins[i][Math.min(9,Math.floor(v*10))];
      bin.count++;bin.probabilitySum+=v;bin.actualSum+=Number(i===index);
    });
  }
  let calibrationError=0;
  const calibration=Object.fromEntries(labels.map((label,i)=>[label,bins[i].map(b=>{
    calibrationError+=Math.abs(b.probabilitySum-b.actualSum);
    return {lower:b.lower,upper:b.upper,count:b.count,meanProbability:b.count?b.probabilitySum/b.count:null,observedFrequency:b.count?b.actualSum/b.count:null};
  })]));
  return {count:rows.length,accuracy:rows.length?correct/rows.length:null,logLoss:rows.length?logLoss/rows.length:null,brierScore:rows.length?brier/rows.length:null,
    classOrder:labels,confusionMatrix:matrix,recall:Object.fromEntries(labels.map((label,i)=>[label,matrix[i].reduce((a,b)=>a+b,0)?matrix[i][i]/matrix[i].reduce((a,b)=>a+b,0):null])),
    calibration,calibrationError:rows.length?calibrationError/(3*rows.length):null};
}
function subsets(rows,field) {
  const groups=new Map();
  for(const row of rows){const key=String(row[field]??'unknown');if(!groups.has(key))groups.set(key,[]);groups.get(key).push(row);}
  return Object.fromEntries([...groups].sort(([a],[b])=>a.localeCompare(b)).map(([key,group])=>[key,summarize(group)]));
}
function pairedInterval(rows,reference,{seed=20261107,iterations=1000}={}) {
  const groups=new Map();
  for(const row of rows){const key=row.group;if(!key)throw new Error('Missing resampling group');if(!groups.has(key))groups.set(key,[]);groups.get(key).push(loss(row)-loss({...row,probabilities:row[reference]}));}
  const values=[...groups.values()];
  const base={method:'paired matchweek cluster bootstrap',seed,iterations,groups:values.length,reference,confidence:.95};
  if(values.length<2)return {...base,lower:null,upper:null,mean:null};
  let state=seed>>>0;const random=()=>{state=(Math.imul(1664525,state)+1013904223)>>>0;return state/4294967296;};
  const draws=[];
  for(let i=0;i<iterations;i++){let sum=0,n=0;for(let j=0;j<values.length;j++){const group=values[Math.floor(random()*values.length)];sum+=group.reduce((a,b)=>a+b,0);n+=group.length;}draws.push(sum/n);}
  draws.sort((a,b)=>a-b);
  return {...base,lower:draws[Math.floor(iterations*.025)],upper:draws[Math.min(iterations-1,Math.floor(iterations*.975))],mean:values.flat().reduce((a,b)=>a+b,0)/rows.length};
}
function temperature(p,t) {
  probabilities(p);if(!Number.isFinite(t)||t<=0)throw new Error('Invalid temperature');
  const logs=p.map(v=>Math.log(Math.max(v,1e-15))/t),max=Math.max(...logs),exp=logs.map(v=>Math.exp(v-max)),sum=exp.reduce((a,b)=>a+b,0);
  return exp.map(v=>v/sum);
}
module.exports={summarize,subsets,pairedInterval,temperature,loss};
