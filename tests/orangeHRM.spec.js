import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import { AdminPage } from '../pages/Admin_UserManagement';
import { LogOutProcess } from '../pages/ProfileMenu_logOut';
const { chromium } = require('@playwright/test');


test('Orange HRM website', async ({ page }) => {

  const Login = new LoginPage(page)
  const Adminuser = new AdminPage(page)
  const LogOut = new LogOutProcess(page)

  // Go to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

  test.setTimeout(60000); // 60 seconds
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('OrangeHRM');


  await Login.login('Admin', 'admin123');
  await Adminuser.filterUsers();
   await LogOut.filterUsers();


  // await page.getByRole('link', { name: 'Admin' }).click();
  // await page.getByRole('textbox').nth(1).click();
  // await page.getByRole('textbox').nth(1).fill('badaha');
  // await page.getByRole('textbox').nth(1).click();
  // await page.getByText('-- Select --').first().click();
  // await page.getByRole('option', { name: 'ESS' }).click();
  // await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  // await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  // await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Ahmad B');
  // await page.getByText('Ahmad Ali Badaha').click();
  // await page.getByText('-- Select --').click();
  // await page.getByRole('option', { name: 'Enabled' }).click();
  // await page.getByRole('button', { name: 'Search' }).click();
  // //  await page.getByRole('Test 65 Test Last Name').click();

  // await page.locator('.oxd-userdropdown-name').click();
  // await page.getByRole('menuitem', { name: 'Logout' }).click();


});