export class Echipa {

    constructor(page) {
        this.page = page;

    }

    async teamNavigationBar(role) {
        const roleButton = this.page.locator(`//button[normalize-space()='${role}']`)
        await expect(roleButton).toBeVisible();
        await expect(roleButton).toBeEnabled();
        await roleButton.click();

    }

}