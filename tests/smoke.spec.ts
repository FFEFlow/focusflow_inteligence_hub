
import { test, expect } from '@playwright/test';

test('Smoke Test: Hub Loads and Shows Elite Branding', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Coach Kay | Focus Flow Elevation/);

  // Verify Landing button presence
  const button = page.getByRole('button', { name: 'Enter Workspace' });
  await expect(button).toBeVisible();
});

test('Auth Test: Master Key Access', async ({ page }) => {
  await page.goto('/#/login'); // Using HashRouter
  await page.fill('input[placeholder="ENTER LEGACY KEY"]', 'FOCUS');
  await page.fill('input[placeholder="NAME"]', 'Audit Bot');
  await page.fill('input[placeholder="EMAIL"]', 'audit@coachkay.ai');
  await page.click('button:has-text("Establish Connection")');

  // Verify Dashboard loads (using more specific locators)
  await expect(page.getByText('Tactical Briefing')).toBeVisible();
  await expect(page.getByText('Welcome, Audit')).toBeVisible();
  await expect(page.getByText('Legacy Blueprint Protocol')).toBeVisible();
});
