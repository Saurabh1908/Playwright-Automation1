const {test,expect} = require('@playwright/test')

// test('Mouse Hover',async({page})=>
// {
//     await page.goto("https://www.flipkart.com/")
//     await page.waitForTimeout(4000)
//     // await page.locator("//span[@role='button']").click()
//     await page.waitForTimeout(2000)
//     await page.locator("//a[@title='Login']/span").hover()
//     await page.waitForTimeout(3000)
//     await page.locator("//a[@title='Gift Cards']/li").click()
//     await page.waitForTimeout(3000)

// })

test('Mouse Hover',async({page})=>
{
    await page.goto("https://practice.expandtesting.com/hovers")
    await page.waitForTimeout(3000)
    await page.locator("//div[@data-testid='user-3']/img").hover()
    await page.waitForTimeout(4000)
    await page.locator("//div[@data-testid='user-3']/div/a").click()
    await page.waitForTimeout(4000)
})