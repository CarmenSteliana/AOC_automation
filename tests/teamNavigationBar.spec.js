import { test, expect } from '@playwright/test'
import { Team } from '../pages/Team.js'

test('Team navigation bar', async ({ page }) => {
    const team = new Team(page, expect);
    await page.goto('https://oportunitatisicariere.ro/');

    const roleInput = 'Back-end';
    await team.teamNavigationBar(roleInput);

})