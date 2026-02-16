
import { test, expect } from '@playwright/test';

test('Full Client Journey: Landing to Blueprint Generation', async ({ page }) => {
  // 1. Landing Page
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Google');
  await page.click('button:has-text("Enter Workspace")');

  // 2. Login Page
  await expect(page).toHaveURL(/\/login/);
  await page.fill('input[placeholder="ENTER LEGACY KEY"]', 'LEGACY2026');
  await page.click('button:has-text("Establish Connection")');

  // 3. Dashboard
  await expect(page).toHaveURL(/\//);
  // Wait for Dashboard to load
  await expect(page.locator('h1').first()).toContainText('Coach Kay');

  // Wait for Dashboard to load modules
  await expect(page.locator('h5:has-text("Nano Photo Lab")')).toBeVisible();
  await page.click('h5:has-text("Nano Photo Lab")');

  // 4. Module Wizard
  await expect(page).toHaveURL(/\/module\/nano-photo-lab/);
  await expect(page.locator('h2')).toContainText('Nano Photo Lab');

  // 5. AI Interaction
  await page.fill('textarea', 'Test neural style shift for gold brand identity.');
  await page.click('button.gold-gradient');
  // Wait for response
  await page.waitForSelector('text=Intelligence Report', { timeout: 30000 });

  // 6. Blueprint Download
  const downloadPromise = page.waitForEvent('download');
  await page.click('button:has-text("Download Build Spec")');
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('nano-photo-lab-build-spec.md');
});
