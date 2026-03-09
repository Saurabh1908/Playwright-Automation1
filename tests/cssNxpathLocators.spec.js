const {test,expect} = require('@playwright/test')

test('CSS and XPATH Locators',async({page})=>
{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("xpath=//input[@id='username']").fill('Saurabh')
    await page.waitForTimeout(2000)
    await page.locator("css=#password").fill('Saurabh@123')
    await page.waitForTimeout(2000)
})