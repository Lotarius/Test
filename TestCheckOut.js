const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: false, slowMo: 20});
  const page = await browser.newPage();
  await page.setViewport({width:1920,height:1080 });
  await page.goto('https://www.iherb.com/',{ waitUntil: 'networkidle2' });
  await page.click('body > header > div.stackable-below > div > div > div > ul > li:nth-child(5) > a');
  await page.waitFor(3000)
  await page.click('#pid_60066 > div.product-inner.product-inner-wide > a.product-image');
  await page.waitFor(3000)
  await page.click('button.btn-add-to-cart')
  await page.waitFor(3000)
  await page.click('#add-to-cart-popup > section.add-to-cart-total-content.add-to-cart-buttons > div > a')
  await page.waitFor(3000)
  const htm = await page.mainFrame().url()
if(htm=='https://checkout.iherb.com/cart')
{
console.log('Mission success');await browser.close();
}
else
{console.log('Mission fail');await browser.close();}
})();

