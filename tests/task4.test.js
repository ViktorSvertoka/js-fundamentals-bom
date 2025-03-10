const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://127.0.0.1:5500/index.html');

  const widthSelector = '#widthValue';
  const heightSelector = '#heightValue';

  async function getTextFromSelector(selector) {
    return await page.evaluate((sel) => {
      const element = document.querySelector(sel);
      return element ? element.textContent : null;
    }, selector);
  }


  const initialWidth = await getTextFromSelector(widthSelector);
  const initialHeight = await getTextFromSelector(heightSelector);

  await page.setViewport({ width: 1000, height: 1000 });
  await page.waitForTimeout(1000);

  const updatedWidth = await getTextFromSelector(widthSelector);
  const updatedHeight = await getTextFromSelector(heightSelector);

  console.log('Updated Width:', updatedWidth);
console.log('Updated Height:', updatedHeight);

  if (initialWidth !== updatedWidth || initialHeight !== updatedHeight) {
    console.log('Window size changed successfully.');
  } else {
    console.log('Error: Window size was not changed or values are not displayed.');
  }

  await browser.close();
})();
