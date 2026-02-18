const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const sections = [
    ['header', 'header'],
    ['services', 'section[aria-labelledby="services-heading"]'],
    ['projects', 'section[aria-labelledby="projects-heading"]'],
    ['team', 'section[aria-labelledby="experts-heading"]'],
    ['contact', 'section[aria-labelledby="contact-heading"]'],
    ['footer', 'footer'],
  ];

  for (const [name, sel] of sections) {
    const el = await page.$(sel);
    if (el) {
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await el.screenshot({ path: 'figma-renders/v3-' + name + '.png' });
      console.log('Captured: ' + name);
    }
  }

  // Hero + WhyChoose area
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'figma-renders/v3-hero-area.png', clip: { x: 0, y: 0, width: 1920, height: 1100 } });
  console.log('Captured: hero-area');

  await browser.close();
  console.log('All done');
})();
