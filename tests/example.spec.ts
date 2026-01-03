import { test, expect } from '@playwright/test';

test('goTo page', async ({browser})=>{
test.slow();
const context = await browser.newContext();
const page = await context.newPage();
page.goto('https://practicetestautomation.com/')
await page.locator(`//li[@id='menu-item-20']/a`).click();
await page.locator(`//p/a`).nth(0).click();
await page.locator('input#username').fill('student');
await page.locator('input#password').fill('Password123');
await page.locator('button#submit').click();
await expect(page.locator('h1.post-title')).toHaveText('Logged In Successfully')
console.log("final link",page.url());

})

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
