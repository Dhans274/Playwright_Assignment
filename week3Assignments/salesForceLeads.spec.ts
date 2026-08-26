import {test,expect,type Page} from "@playwright/test"
/*
test("Create Individual",async({page})=>{
    
    await login(page);
    await clkIndividual(page);
    
    //Click on New
    const btnNew= page.getByRole('button',{name:'New', exact:true});
    await expect(btnNew).toBeEnabled();
    await btnNew.click();
    await page.waitForTimeout(3000);

    //click on Salutation
    const btnSalutation=page.getByRole('button',{name:'Salutation --None--'});
    await expect.soft(btnSalutation).toBeVisible();
    await btnSalutation.click();

    //Select Prof
    const optnSalutation=page.locator('[title="Prof."]');
    await expect.soft(optnSalutation).toBeVisible();
    await optnSalutation.click();
    await page.waitForTimeout(3000);
    
    await expect.soft(page.getByRole('button',{name:'Salutation Prof.'})).toContainText('Prof.');

    //Select last name
    const txtLname=page.getByPlaceholder('Last Name');
    await txtLname.fill('DhansTestAug221');
    await expect.soft(txtLname).not.toHaveValue('');
    const btnSave=page.getByRole('button',{name:'Save',exact:true});

    btnSave.click();
    await page.waitForTimeout(3000);
  
});
*/

test('Edit Individual',async({page})=>{
    await login(page);
    await clkIndividual(page);

    //Search by last name
    const txtSearch= page.getByPlaceholder('Search this list...');
    txtSearch.fill('TestingAug');
    await page.getByRole('status',{name:'Recently Viewed'}).click();

    const dataPresent =page.getByRole('status',{name:'Recently Viewed'}).innerText();
    
    const cnt=Number((await dataPresent).match(/\d+/)?.[0]??0);
    expect(cnt).toBeGreaterThan(0);
    if(cnt>0){
        const firstrow=page.locator('.slds-hint-parent').first();
        await expect(firstrow).toBeVisible();
        /*const links = firstrow.getByRole('link').first();
        console.log('Links:', links.count());
        console.log('Links:',await links.innerText());
        await links.click();*/
        const drpDown= page.locator('a[role="button"][title="Show 2 more actions"]').first();
        await expect(drpDown).toBeVisible();
        await drpDown.click();

        const editName = page.getByRole('menuitem', { name: 'Edit' });
        await expect(editName).toBeVisible();
        await editName.click();


        await page.waitForTimeout(5000);
        


    }

});



const login = async (page: Page) => {
    // Login
    const url='https://login.salesforce.com'
    const txt_userName='dilipkumar.rajendran@testleaf.com'
    const txt_pwd='TestLeaf@2025'

    const l_userName= page.locator("//input[@id='username']");
    const l_password=page.locator('.label+input').first();
    const loginClick1=page.locator('[name="Login"]');
    const loginClick2=page.locator('#Login');

    await page.goto(url);
    await page.waitForLoadState('domcontentloaded');

    await expect(l_userName).toBeEditable();
    await l_userName.fill(txt_userName);
    await loginClick1.click()

    await l_password.fill(txt_pwd);
    await loginClick2.click();
    await page.waitForTimeout(2000)
};



const clkIndividual= async(page:Page)=>{
    //Click on app launcher
    await page.locator(`//span[normalize-space()='App Launcher']`).click();
    //await page.waitForTimeout(10000)
    
    
    //Click on View all
    const viewAll=page.getByRole('button',{name:'View All Applications'});
    await expect(viewAll).toBeEnabled();
    await viewAll.click();

    //Click on individuals
    const linkIndividuals= page.locator('a[data-label="Individuals"]');
    await expect(linkIndividuals).toBeEnabled();
    await linkIndividuals.click();

}