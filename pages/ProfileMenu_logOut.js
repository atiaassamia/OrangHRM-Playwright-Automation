exports.LogOutProcess = class LogOutProcess {
  constructor(page) {

 this.page = page;

  
this.profile = page.locator('.oxd-userdropdown-name');
this.logOutButton = page.getByRole('menuitem', { name: 'Logout' });


  }


async logout() {
    await this.profileMenu.click();

    // 🔸 Wait for logout button to appear
    await this.logoutButton.waitFor({ timeout: 5000 });
    await this.logoutButton.click();


}
}