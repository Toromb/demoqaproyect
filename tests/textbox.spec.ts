import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ElementsPage } from '../pages/ElementsPage';

test('Completar el formulario de Text Box', async ({ page }) => {
  const homePage = new HomePage(page);
  const elementsPage = new ElementsPage(page);

  // Paso 1: Navegar a DemoQA
  await homePage.navigate();

  // Paso 2: Entrar a Elements
  await homePage.goToElements();
  await expect(page).toHaveURL(/.*elements/);

  // Paso 3: Ir a Text Box usando el sidebar
  await elementsPage.textBoxOption.click();

  // Paso 4: Completar el formulario
  await elementsPage.fullNameInput.fill('Cristian');
  await elementsPage.emailInput.fill('cristian@example.com');
  await elementsPage.currentAddressInput.fill('Mi dirección actual');
  await elementsPage.permanentAddressInput.fill('Mi dirección permanente');

  await elementsPage.submitButton.click();

  // Paso 5: Validaciones
  await expect(elementsPage.nameOutput).toContainText('Cristian');
  await expect(elementsPage.emailOutput).toContainText('cristian@example.com');
  await expect(elementsPage.currentAddressOutput).toContainText('Mi dirección actual');
  await expect(elementsPage.permanentAddressOutput).toContainText('Mi dirección permanente');
});
