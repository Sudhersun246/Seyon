const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:5174 ...');
  await page.goto('http://localhost:5174', { waitUntil: 'networkidle' });

  // Scroll from top to bottom in 300px increments with 80ms pauses
  console.log('Scrolling down to trigger animations...');
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  let currentPosition = 0;

  while (currentPosition < scrollHeight) {
    currentPosition += 300;
    await page.evaluate((y) => window.scrollTo(0, y), currentPosition);
    await page.waitForTimeout(80);
  }

  // Scroll back to top
  console.log('Scrolling back to top...');
  await page.evaluate(() => window.scrollTo(0, 0));

  // Wait 500ms for any final animations to settle
  await page.waitForTimeout(500);

  // Take a full-page screenshot
  const outputPath = path.join(__dirname, 'screenshots', 'final-verified.png');
  console.log('Taking full-page screenshot -> ' + outputPath);
  await page.screenshot({ path: outputPath, fullPage: true });

  console.log('Screenshot saved successfully.');
  await browser.close();
})();
