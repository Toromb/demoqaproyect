import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Navegar a Elements desde Home', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();        // Abrimos demoqa
  await homePage.goToElements();    // Hacemos clic en Elements

  await expect(page).toHaveURL(/.*elements/);
});
