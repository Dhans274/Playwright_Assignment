import {test} from "@playwright/test"
test("Create Lead",async({page})=>{

    await page.goto(" http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("demoCSR2")
    await page.locator("//input[@name='PASSWORD']").fill("crmsfa")
    await page.locator("//input[contains(@class,'decorative')]").click();
    await page.context().storageState({
        path:'playwright/.auth/user.json'
    });
    console.log(page.title());
    console.log(page.url());

});