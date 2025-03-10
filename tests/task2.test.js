const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });

    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/index.html'); 
  
    await page.click('#button1'); 
    await page.waitForTimeout(1000);
    const firstColor = await page.evaluate(() => {
        return getComputedStyle(document.body).backgroundColor;
    });
    console.log(`firstColor: ${firstColor}`);
    if(firstColor === 'rgb(0, 0, 255)'){
        console.log("first is correct");
    }else{
        console.log("first is incorrect");
    }
    
    
    await browser.close();
})();


(async () => {
    const browser = await puppeteer.launch({ headless: "new" });

    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/index.html'); 
  

    await page.click('#button2', { clickCount: 2 });
    await page.waitForTimeout(1000);

    const secondColor = await page.evaluate(() => {
        return getComputedStyle(document.body).backgroundColor;
    });
    console.log(`secondColor: ${secondColor}`);
    if(secondColor === 'rgb(255, 192, 203)'){
        console.log("second is correct");
    }else{
        console.log("second is incorrect");
    }
 
    await browser.close();
})();


(async () => {
    const browser = await puppeteer.launch({ headless: "new" });

    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/index.html'); 
  
    await page.hover('#button3')

    const thirdColor = await page.evaluate(() => {
        const body = document.body;
        return window.getComputedStyle(body).backgroundColor;
      });
    console.log(`thirdcolor: ${thirdColor}`);
    if(thirdColor === 'rgb(165, 42, 42)'){
        console.log("third is correct");
    }else{
        console.log("third is incorrect");
    }

    

    
    await browser.close();
})();
