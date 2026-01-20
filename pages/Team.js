export class Echipa {

    constructor(page, expect) {
        this.page = page;
        this.expect = expect;

    }

    async teamNavigationBar(role) {
        const roleButton = this.page.locator(`//button[normalize-space()='${role}']`)
        await this.expect(roleButton).toBeVisible();
        await this.expect(roleButton).toBeEnabled();
        await roleButton.click();

    }

}