import {test,expect,type Page} from '@playwright/test'
//Frame object
test('First Frame testground',async({page})=>{
    const txtName=await openURL(page);
    const frame1= page.frame({url:'https://leafground.com/default.xhtml'});
    const iframe1= frame1?.locator('#Click');
    await iframe1?.click();
    expect.soft(iframe1).toBe(txtName);
    const txtFrame1=await iframe1?.innerText();
    console.log(`First message: ${txtFrame1}`);

    await page.waitForTimeout(3000);

});

//Nested frame -Frame locator
test('Second frame',async({page})=>{
    const txtName=await openURL(page);
    const frame2= page.frameLocator('[src="page.xhtml"]').frameLocator('[src="framebutton.xhtml"]').locator('#Click');
    await frame2?.click();
    const txtFrame2=await frame2?.innerText();
    console.log(`Second message: ${txtFrame2}`);
    expect.soft(txtFrame2).toBe(txtName);
    await page.waitForTimeout(3000);
});

//Total no of frames
test.only('Total frames',async({page})=>{
    await openURL(page);
    /*const frame3= page.frameLocator('[src="nested.xhtml"]').locator('#Click');
    await frame3?.click();
    const txtFrame3=await frame3?.innerText();
    console.log(`Third message: ${txtFrame3}`);*/
    const iframes=page.frames();
    console.log("No of frames :", iframes.length);
    await page.waitForTimeout(2000);

});

const openURL=async(page:Page)=>{
    await page.goto('https://leafground.com/frame.xhtml');
    const txtName='Hurray! You Clicked Me.';
    return txtName;
}


