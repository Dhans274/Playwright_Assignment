import {test,expect} from "@playwright/test"
const pgTitle='Leaftaps - TestLeaf Automation Platform';

test("Create Lead",async({page})=>{   
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await expect(page.locator("#username")).not.toBeVisible();
    expect(await page.title()).toContain(pgTitle);
    //expect(page.url()).toContain(pgURL);
    console.log(page.url()); // why is this still giving https://leaftaps.com/opentaps/control/main?
    const pgCRM=page.getByRole('link',{name:'CRM/SFA'})
    await expect.soft(pgCRM).toBeVisible();
});