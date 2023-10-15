import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

const siteUrl = "http://localhost:3000";

test.describe("Homepage", () => {
    test("take screenshot", async ({ page }) => {
        await page.goto(siteUrl);
        await argosScreenshot(page, "homepage");
    });
});