import {test,expect} from'@playwright/test'

test("Alert from w3c",async({page})=>{
    const mytext='You pressed OK!';
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    page.on('dialog',async(alert)=>{
        const message=alert.message();
        console.log(`Alert message: ${message}`);
        const alertType=alert.type();
        console.log(`Alert type: ${alertType}`);
        await alert.accept();

    });
    await page.frameLocator('#iframeResult').locator('[onclick="myFunction()"]').click();
    const alertText= await page.frameLocator('#iframeResult')?.locator('#demo').textContent();


    expect.soft(alertText).toBe(mytext);
    console.log(alertText);
    await page.waitForTimeout(3000);


});
