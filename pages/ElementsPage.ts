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

  // CheckBox feature
  get checkBoxOption() {
    return this.page.getByRole('listitem').getByText('Check Box');
  }

  get expandAllButton() {
    return this.page.getByRole('button', { name: 'Expand all' });
  }

  get collapseAllButton() {
    return this.page.getByRole('button', { name: 'Collapse all' });
  }

  get homeCheckbox() {
    return this.page.locator('label[for="tree-node-home"] .rct-checkbox');
  }

  // Expose the checkbox state icon as a Locator for assertions
  get homeCheckboxIcon() {
    return this.page.locator('label[for="tree-node-home"] .rct-checkbox svg');
  }


  // Actions
  async goToCheckBox() {
    await this.checkBoxOption.waitFor({ state: 'visible' });
    await this.checkBoxOption.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async expandAll() {
    await this.expandAllButton.waitFor({ state: 'visible' });
    await this.expandAllButton.click();
  }

  async collapseAll() {
    await this.collapseAllButton.waitFor({ state: 'visible' });
    await this.collapseAllButton.click();
  }

  async tickHome() {
    await this.homeCheckbox.click();
  }

  // Helper: check if Home is ticked
  async isHomeChecked(): Promise<boolean> {
    const classes = await this.homeCheckboxIcon.getAttribute('class');
    return classes?.includes('check') ?? false;
  }

  // Helper: check if Home is unticked
  async isHomeUnchecked(): Promise<boolean> {
    const classes = await this.homeCheckboxIcon.getAttribute('class');
    return classes?.includes('uncheck') ?? false;
  }

}
