const puppeteer = require('puppeteer');
const path = require('path');

async function debugDom() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const fileUrl = 'file:///' + path.join(__dirname, 'index.html').replace(/\\/g, '/');
  
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  await new Promise(resolve => setTimeout(resolve, 4000));
  
  const results = await page.evaluate(() => {
    const card = document.querySelector('.glass-card');
    if (!card) return 'card not found';
    
    const style = window.getComputedStyle(card);
    const rect = card.getBoundingClientRect();
    
    const table = document.querySelector('#sportoto-table');
    const tableStyle = table ? window.getComputedStyle(table) : null;
    const tbody = document.querySelector('#sportoto-table-body');
    
    return {
      cardDisplay: style.display,
      cardOpacity: style.opacity,
      cardVisibility: style.visibility,
      cardHeight: rect.height,
      cardWidth: rect.width,
      
      tableFound: !!table,
      tableDisplay: tableStyle ? tableStyle.display : null,
      
      tbodyRows: tbody ? tbody.children.length : 0
    };
  });
  
  console.log("DOM Debug Results:", results);
  await browser.close();
}
debugDom();
