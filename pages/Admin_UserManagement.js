exports.AdminPage = class AdminPage {
    constructor(page) {

        this.page = page;

        //Search user from Admin/User management 

        // Click on Admin option
        this.adminTab = page.getByRole('link', { name: 'Admin' });

        //Click on the user name field
        this.UsernameFieldClick = page.getByRole('textbox').nth(1);

        //User name field input
        this.usernameFilter = page.getByRole('textbox').nth(1);

        //click on the user Role dropdown field 
        this.UserRoleClick = page.getByRole('textbox').nth(1);

        // Click on the User role Dropdown option
        this.userRoleDropdown = page.getByText('-- Select --').first();

        // Choose option from the user Role dropdown field 
        this.userRoleOption = page.getByRole('option', { name: 'Admin' });

        // click on the Employee name Field
        this.EmployeeNameFieldClick = page.getByRole('textbox', { name: 'Type for hints...' });


        // await page.getByRole('textbox', { name: 'Type for hints...' }).click();

        //Type for Hints of employee name
        this.TypeEmployeeHints = page.getByRole('textbox', { name: 'Type for hints...' });

        // Select matched employee name
        this.EmployeeNameSuggestion = page.getByText('hlGxP paXTR');

        //Click on the Status Field
        this.statusDropdown = page.getByText('-- Select --');

        // Select option from the status field
        this.selectStatus = page.getByRole('option', { name: 'Enabled' });

        // search result 
        this.searchresult = page.getByRole('button', { name: 'Search' });


    }

    async filterUsers() {

        //Search user from Admin/User management 
        await this.adminTab.click();

        //Choose Username from the username field
        await this.UsernameFieldClick.click();
        await this.usernameFilter.fill('hlGxPpaXTR');
        await this.usernameFilter.waitFor({ timeout: 6000 });



        // Choose option from the user Role dropdown field 
        await this.UserRoleClick.click();
        await this.userRoleDropdown.click();
        await this.userRoleOption.click();

        // Select matched employee name
        await this.EmployeeNameFieldClick.click();
        await this.TypeEmployeeHints.fill('hlGxP');
        await this.TypeEmployeeHints.waitFor({ timeout: 6000 });
        await this.EmployeeNameSuggestion.click();
        await this.EmployeeNameSuggestion.waitFor({ timeout: 6000 });


        // Select option from the status field
        await this.statusDropdown.click();
        await this.selectStatus.click();
        await this.searchresult.click();

    }


}