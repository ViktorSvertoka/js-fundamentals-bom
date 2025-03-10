const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  
  await page.goto('http://127.0.0.1:5500/index.html'); 

 
  const beforeClickStyles = await page.$eval('p#text', (element) => {
    return {
      color: window.getComputedStyle(element).color,
      fontSize: window.getComputedStyle(element).fontSize,
      fontFamily: window.getComputedStyle(element).fontFamily,
    };
  });

 
  await page.click('button');

  
  await page.waitForTimeout(1000);


  const afterClickStyles = await page.$eval('p#text', (element) => {
    return {
      color: window.getComputedStyle(element).color,
      fontSize: window.getComputedStyle(element).fontSize,
      fontFamily: window.getComputedStyle(element).fontFamily,
    };
  });


  if (
    beforeClickStyles.color !== afterClickStyles.color &&
    beforeClickStyles.fontSize !== afterClickStyles.fontSize &&
    beforeClickStyles.fontFamily !== afterClickStyles.fontFamily
  ) {
    console.log('Styles have been applied successfully.');
  } else {
    console.log('Styles have not been applied.');
  }

  await browser.close();
})();
