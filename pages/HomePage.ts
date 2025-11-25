import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly elementsCard: Locator;

  constructor(page: Page) {
    this.page = page;

    this.elementsCard = this.page.getByRole('heading', { name: 'Elements' });
  }

  async navigate() {
    await this.page.goto('/', {
      timeout: 60000,
      waitUntil: 'domcontentloaded'
    });
  }

  async goToElements() {
    await this.elementsCard.waitFor({ state: 'visible' });
    await this.elementsCard.click();
  }
}
