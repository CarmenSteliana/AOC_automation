import { test, expect } from '@playwright/test'
import { Echipa } from '../pages/Team.js'

test('Team navigation bar', async ({ page }) => {
    const team = new Echipa(page, expect);
    await page.goto('https://oportunitatisicariere.ro/');

    const roleInput = 'Back-end';
    await team.teamNavigationBar(roleInput);

})