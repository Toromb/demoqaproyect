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
  // Expand all nodes (ensure tree is visible)
  await elementsPage.expandAll();

  // Tick the Home checkbox and assert
  await elementsPage.tickHome();
  await expect(elementsPage.homeCheckboxIcon).toHaveClass(/check/);

  // Untick the Home checkbox and assert
  await elementsPage.tickHome();
  await expect(elementsPage.homeCheckboxIcon).toHaveClass(/uncheck/);

  // Collapse all nodes
  await elementsPage.collapseAll();

});
