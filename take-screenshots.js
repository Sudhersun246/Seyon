import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read PNG dimensions from file buffer (width/height in IHDR chunk at bytes 16-23)
function getPngDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf[0] !== 0x89 || buf[1] !== 0x50) return null;
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  return { width, height };
}

const OUTPUT_DIR = path.join(__dirname, 'figma-renders');

async function main() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:5174/ ...');
  await page.goto('http://localhost:5174/', { waitUntil: 'networkidle', timeout: 30000 });
  console.log('Page loaded.');

  // 1. Full page screenshot
  const fullPath = path.join(OUTPUT_DIR, 'impl-full.png');
  await page.screenshot({ path: fullPath, fullPage: true });
  console.log('Saved: impl-full.png');

  // Helper: find a section by text content, scroll to it, and screenshot it
  async function screenshotByText(text, filename, fallbackSelector) {
    const filePath = path.join(OUTPUT_DIR, filename);
    let element = null;

    // Try to find a section/div containing the text
    const selectors = [
      `section:has-text("${text}")`,
      `div:has-text("${text}")`,
    ];

    for (const sel of selectors) {
      try {
        const candidates = await page.$$(sel);
        // Pick the most specific (smallest) element that still contains the text
        // We want the outermost section/div that is a direct section for this content
        for (const candidate of candidates) {
          const tagName = await candidate.evaluate(el => el.tagName.toLowerCase());
          const box = await candidate.boundingBox();
          if (box && box.height > 50) {
            element = candidate;
            if (tagName === 'section') break; // prefer section elements
          }
        }
        if (element) break;
      } catch (e) {
        // selector didn't match, try next
      }
    }

    if (!element && fallbackSelector) {
      try {
        element = await page.$(fallbackSelector);
      } catch (e) {
        // ignore
      }
    }

    if (element) {
      await element.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500); // let animations settle
      await element.screenshot({ path: filePath });
      console.log(`Saved: ${filename}`);
    } else {
      console.log(`WARNING: Could not find element for "${text}" (${filename})`);
    }
  }

  // Helper: screenshot by selector directly
  async function screenshotBySelector(selector, filename) {
    const filePath = path.join(OUTPUT_DIR, filename);
    const element = await page.$(selector);
    if (element) {
      await element.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      await element.screenshot({ path: filePath });
      console.log(`Saved: ${filename}`);
    } else {
      console.log(`WARNING: Could not find element for selector "${selector}" (${filename})`);
    }
  }

  // 2. Header
  await screenshotBySelector('header', 'impl-header.png');

  // 3. Hero - the section containing "Foundation for the Future"
  await screenshotByText('Foundation for the Future', 'impl-hero.png', 'main > *:first-child');

  // 4. WhyChooseSeyon
  await screenshotByText('Why Choose Seyon', 'impl-whychoose.png', null);

  // 5. CoreServices
  await screenshotByText('Core Services', 'impl-services.png', null);

  // 6. ProjectShowcase
  await screenshotByText('Project Showcase', 'impl-projects.png', null);

  // 7. MeetExperts
  await screenshotByText('Meet Our Experts', 'impl-team.png', null);

  // 8. ContactSection
  await screenshotByText("Let's build something great", 'impl-contact.png', null);

  // 9. Footer
  await screenshotBySelector('footer', 'impl-footer.png');

  await browser.close();

  // Report dimensions
  console.log('\n--- Screenshot Dimensions ---');
  const files = fs.readdirSync(OUTPUT_DIR).filter(f => f.startsWith('impl-') && f.endsWith('.png'));
  for (const file of files.sort()) {
    try {
      const dimensions = getPngDimensions(path.join(OUTPUT_DIR, file));
      console.log(`${file}: ${dimensions.width} x ${dimensions.height} px`);
    } catch (e) {
      console.log(`${file}: could not read dimensions`);
    }
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
