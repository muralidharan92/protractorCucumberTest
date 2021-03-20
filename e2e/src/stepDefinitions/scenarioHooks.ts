import { After, AfterAll, Before, BeforeAll, Status } from "cucumber";
import { browser } from "protractor";

Before(async() => {
    browser.get("https://juliemr.github.io/protractor-demo/");
});

After(async (scenario: any) => {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot: any = await browser.takeScreenshot();
         scenario.attach(screenShot, "image/png");
         return true;
    }
});

AfterAll({timeout: 100 * 1000}, async () => {
    console.log("afterr all print");
    await browser.quit();
});