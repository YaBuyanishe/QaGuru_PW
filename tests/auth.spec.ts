import { expect, test } from "@playwright/test";
import { USERNAME, EMAIL, PASSWORD } from '../data/faker_data';

test('auth test', async ({ page }) => {
    console.log(USERNAME, '||', EMAIL, '||', PASSWORD)

    await page.goto('https://realworld.qa.guru/');
    await expect(page.locator('.navbar-brand')).toHaveText('conduit');
    await page.locator('.nav-link', {hasText: 'Sign up'}).click();
    await expect(page.locator('.text-xs-center', {hasText: 'Sign up'})).toBeVisible();
    await page.locator('input[name="username"]').click();
    await page.locator('input[name="username"]').fill(USERNAME);
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill(EMAIL);
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill(PASSWORD);
    await page.getByRole('button', { name: 'Sign up'}).click();
    await expect(page.locator('//div[@class=\'nav-link dropdown-toggle cursor-pointer\']')).toHaveText(USERNAME);
});

test('demo test', async ({ page }) => {

})