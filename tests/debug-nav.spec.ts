import { test, expect } from '@playwright/test';

test.skip('DEBUG TEMPLATE - diagnóstico rápido', async ({ page }) => {
  console.log('⏳ Navegando a DemoQA...');

  await page.goto('https://demoqa.com/', {
    timeout: 60000,
    waitUntil: 'domcontentloaded'
  });

  console.log('✔️ Página cargada. Estado de red...');
  await page.waitForLoadState('networkidle');

  console.log('🔍 Buscando el card "Elements"...');
  const elementsCard = page.locator('div.card:has-text("Elements")');

  await expect(elementsCard).toBeVisible({ timeout: 15000 });
  console.log('✔️ Card encontrado');

  console.log('📸 Tomando screenshot...');
  await page.screenshot({ path: 'debug-screenshot.png' });

  console.log('🐞 Fin del debug. Todo OK.');
});
