import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ElementsPage } from '../pages/ElementsPage';

test('CheckBox - expandir Home, tildar y destildar, colapsar', async ({ page }) => {
  const homePage = new HomePage(page);
  const elementsPage = new ElementsPage(page);

  // Navigate to DemoQA
  await homePage.navigate();
  await homePage.goToElements();
  await expect(page).toHaveURL(/.*elements/);

  // Go to CheckBox page
  await elementsPage.goToCheckBox();

  // Tick the Home checkbox
  await elementsPage.tickHome();
  await expect(await elementsPage.isHomeChecked()).toBeTruthy();

  // Untick the Home checkbox
  await elementsPage.tickHome();
  await expect(await elementsPage.isHomeUnchecked()).toBeTruthy();

   // Expand all nodes
  await elementsPage.expandAll();

  // Collapse all nodes
   await elementsPage.colapseAll();

});
