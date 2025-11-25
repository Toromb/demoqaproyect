import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  /* Shared settings */
  use: {
    trace: 'on-first-retry',
    baseURL: 'https://demoqa.com',
    ignoreHTTPSErrors: true,
    bypassCSP: true,
    launchOptions: {
      args: [
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--no-sandbox'
      ]
    }
  },

  /* Only Chromium */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
