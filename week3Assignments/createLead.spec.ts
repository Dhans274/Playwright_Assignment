import {test} from "@playwright/test"
test("Create Lead",async({page})=>{

    await page.goto(" http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr")
    await page.locator("//input[@name='PASSWORD']").fill("crmsfa")
    await page.locator("//input[contains(@class,'decorative')]").click();

    //await page.locator("//div[@for='crmsfa']/a").click();
    await page.locator("//a[normalize-space()='CRM/SFA']").click();
    await page.locator("text='Leads'").click();
     

    //Create lead- click
    await page.locator(`text='Create Lead'`).click();
    //await page.waitForTimeout(12000)

    await page.locator("//input[@id='createLeadForm_companyName']").fill("TestCompany")
    await page.locator("//input[@id='createLeadForm_firstName']").fill("Fname");
    await page.locator("//input[@id='createLeadForm_lastName']").fill("Lname")
    await page.locator("//input[@id='createLeadForm_personalTitle']").fill("Mrs");
    await page.locator("//input[@name='generalProfTitle']").fill("Title");
    await page.locator("//input[@name='annualRevenue']").fill("500000");
    await page.locator("//input[@id='createLeadForm_departmentName']").fill("Test Dept")
    await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill("9876543210");

    await page.selectOption('#createLeadForm_dataSourceId',{label:'Word of Mouth'})
    await page.selectOption("#createLeadForm_industryEnumId",{value:'IND_INSURANCE'})

    await page.waitForTimeout(12000)
    
    await page.locator("//input[@name='submitButton']").click();


    //Edit lead
    await page.locator("//a[normalize-space()='Edit']").click();
    await page.locator("//input[@id='updateLeadForm_companyName']").fill("Edited CName");
    

})

