import { test, expect } from '@playwright/test';
import { ElementsPage } from './ElementsPage';

test.describe('ElementsPage - homeCheckbox', () => {
    let elementsPage: ElementsPage;

    test.beforeEach(async ({ page }) => {
        elementsPage = new ElementsPage(page);
        // Navigate to the page containing the checkbox
        await page.goto('https://demoqa.com/elements');
        await elementsPage.goToCheckBox();
    });

    test('should locate home checkbox element', async () => {
        const checkbox = elementsPage.homeCheckbox;
        await expect(checkbox).toBeVisible();
    });

    test('should have correct CSS class for checkbox', async () => {
        const checkbox = elementsPage.homeCheckbox;
        await expect(checkbox).toHaveClass(/rct-checkbox/);
    });

    test('should be clickable', async () => {
        const checkbox = elementsPage.homeCheckbox;
        await expect(checkbox).toBeEnabled();
    });

    test('collapse everything on click', async ({ page }) => {
    const elementsPage = new ElementsPage(page);
    await elementsPage.colapseAll();

    });


    test('should check home checkbox', async () => {
        await elementsPage.tickHome();
        await expect(elementsPage.homeCheckbox).toBeChecked();
    });

    test('should verify home is checked after clicking', async () => {
        await elementsPage.tickHome();
        const isChecked = await elementsPage.isHomeChecked();
        expect(isChecked).toBe(true);
    });
});