exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;

        // Click on Username field
        this.usernameFieldClick = page.getByRole('textbox', { name: 'Username' });
        // Fill Username field
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });

        // Click on Password field
        this.passwordFieldClick = page.getByRole('textbox', { name: 'Password' });
        // Fill Password field
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });

        // click on Login Button
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }



    async login(username, password) {

        this.usernameFieldClick.click();
        await this.usernameInput.fill(username);

        this.passwordFieldClick.click();
        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }





}
