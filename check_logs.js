const puppeteer = require('puppeteer');
const path = require('path');

async function checkConsole() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  
  const fileUrl = 'file:///' + path.join(__dirname, 'index.html').replace(/\\/g, '/');
  console.log("Loading", fileUrl);
  
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5s for predictions
  
  await browser.close();
}
checkConsole();
