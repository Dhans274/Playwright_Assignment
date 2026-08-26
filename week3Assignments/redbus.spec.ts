import {test,chromium, webkit}from "@playwright/test"
test("Redbus",async()=>{
    const browser= await chromium.launch({headless:false, channel:'msedge'})
    const context= await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://www.redbus.in/")
    console.log("Page title  : " +await page.title());
    console.log("Current URL : " +page.url());
    

    await page.waitForTimeout(12000);
    browser.close();

})

test("Flipkart",async()=>{
    const browser= await webkit.launch({headless:false})
    const context= await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://www.flipkart.com")
    console.log("Page title  : " +await page.title());
    console.log("Current URL : " +page.url());
    await page.waitForTimeout(12000);
    browser.close();
})