// import { test, expect } from '@playwright/test';

// // temp from recording

// test('test', async ({ page }) => {
//   await page.goto('https://automationexercise.com/');
//   await page.getByRole('link', { name: ' Signup / Login' }).click();
//   await page.getByRole('textbox', { name: 'Name' }).click();
//   await page.getByRole('textbox', { name: 'Name' }).fill('test user');
//   await page.getByRole('textbox', { name: 'Name' }).press('Tab');
//   await page
//     .locator('form')
//     .filter({ hasText: 'Signup' })
//     .getByPlaceholder('Email Address')
//     .fill('test_user_159753@test.com');
//   await page.getByRole('button', { name: 'Signup' }).click();
//   await page.getByRole('radio', { name: 'Mr.' }).check();
//   await page.getByRole('textbox', { name: 'Name *', exact: true }).click();
//   await page.getByRole('textbox', { name: 'Password *' }).click();
//   await page.getByRole('textbox', { name: 'Password *' }).fill('abc123');
//   await page.locator('#days').selectOption('1');
//   await page.locator('#months').selectOption('1');
//   await page.locator('#years').selectOption('2000');
//   await page.getByRole('textbox', { name: 'First name *' }).click();
//   await page.getByRole('textbox', { name: 'First name *' }).fill('Test');
//   await page.getByRole('textbox', { name: 'Last name *' }).click();
//   await page.getByRole('textbox', { name: 'Last name *' }).fill('User');
//   await page
//     .getByRole('textbox', { name: 'Address * (Street address, P.' })
//     .click();
//   await page
//     .getByRole('textbox', { name: 'Address * (Street address, P.' })
//     .fill('12 Bla ST, Foo');
//   await page.getByLabel('Country *').selectOption('Israel');
//   await page.getByRole('textbox', { name: 'State *' }).click();
//   await page.getByRole('textbox', { name: 'State *' }).fill('none');
//   await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
//   await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Bar');
//   await page.locator('#zipcode').click();
//   await page.locator('#zipcode').fill('123456');
//   await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
//   await page
//     .getByRole('textbox', { name: 'Mobile Number *' })
//     .fill('97250654654');
//   await page.getByRole('button', { name: 'Create Account' }).click();
//   await page.getByRole('link', { name: 'Continue' }).click();
//   await page.getByRole('link', { name: ' Delete Account' }).click();
//   await page.goto('https://automationexercise.com/delete_account');
//   await page.getByRole('link', { name: 'Continue' }).click();
// });
