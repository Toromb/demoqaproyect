import { Page } from '@playwright/test';

export class ElementsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Sidebar: opción "Text Box"
  get textBoxOption() {
    return this.page.getByRole('listitem').getByText('Text Box');
  }

  // Text Box inputs
  get fullNameInput() {
    return this.page.getByPlaceholder('Full Name');
  }

  get emailInput() {
    return this.page.getByPlaceholder('name@example.com');
  }

  get currentAddressInput() {
    return this.page.locator('#currentAddress');
  }

  get permanentAddressInput() {
    return this.page.locator('#permanentAddress');
  }

  get submitButton() {
    return this.page.getByRole('button', { name: 'Submit' });
  }

  // Output locators
  get nameOutput() {
    return this.page.locator('#output #name');
  }

  get emailOutput() {
    return this.page.locator('#output #email');
  }

  get currentAddressOutput() {
    return this.page.locator('#output #currentAddress');
  }

  get permanentAddressOutput() {
    return this.page.locator('#output #permanentAddress');
  }
}
