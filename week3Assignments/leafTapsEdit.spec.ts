import {test} from "@playwright/test"
test("Edit lead",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main");
    
    await page.locator("#username").fill("democsr2");
    await page.locator("//input[@name='PASSWORD']").fill("crmsfa");
    await page.locator("//input[contains(@class,'decorative')]").click();

    await page.getByText('CRM/SFA').click();
    await page.getByRole('link',{name:'Leads'}).click();

    await page.getByRole('link',{name:'Create Lead'}).click();
    
    await page.locator('#createLeadForm_companyName').fill('testUser1');
    await page.locator('#createLeadForm_firstName').fill('Dhans');
    //await page.locator('[name="firstName"]').fill('Dhans');
    await page.locator('#createLeadForm_lastName').fill('Test1');
    await page.locator("//input[@name='submitButton']").click();
    await page.getByRole('link', { name: 'Edit' }).click();
    await page.waitForTimeout(3000);
    await page.locator('#updateLeadForm_companyName').fill('EditCompany');
    await page.getByRole('button',{name:'Update'}).click();
    await page.waitForTimeout(3000);
});
