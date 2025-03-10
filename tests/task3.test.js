const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto('http://127.0.0.1:5500/index.html');


  const dropdown = await page.$('#dropdown');
  const deleteButton = await page.$('#deleteButton');


  if (dropdown && deleteButton) {

    await page.select('#dropdown', 'option1');

 
    await deleteButton.click();

    const option1 = await page.$('option[value="option1"]');
    if (!option1) {
      console.log('Перший елемент був успішно видалений.');
    } else {
      console.log('Виникла помилка. Перший елемент не був видалений.');
    }
  } else {
    console.log('Елементи DOM не знайдені.');
  }

  await browser.close();
})();
