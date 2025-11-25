import { test, expect } from '@playwright/test';

test('navegar al home', async ({ page }) => {
  await page.goto('https://demoqa.com/', {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

  await page.waitForURL('https://demoqa.com/**');

  // Ver que cargue el texto "Elements"
  const elements = page.locator('text=Elements');
  await expect(elements).toBeVisible({ timeout: 10000 });
});
