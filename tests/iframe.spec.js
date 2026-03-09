const{test,expect} = require('@playwright/test')

// test('Handling the Frames',async({page})=>
// {
//     await page.goto("https://demo.automationtesting.in/Frames.html")
//     const pageIframe = await page.frameLocator("//iframe[@id='singleframe']")
//     await pageIframe.locator("(//input[@type='text'])[1]").fill("Saurabh is a Automation Engineer")
//     await page.waitForTimeout(4000)

//     const text = await pageIframe.locator("//div[@class='container']/h5").textContent()
//     await console.log(text)
//     await page.waitForTimeout(2000)

    //method 2'
//     const locator = await page.locator("//iframe[@id='singleframe']")
//     const iframeLocator = await locator.contentFrame()
//     await iframeLocator.locator("(//input[@type='text'])[1]").fill("Saurabh is a Automation Engineer")
//     await page.waitForTimeout(4000)
// 
// })

test('Frames',async({page})=>
{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    await page.waitForTimeout(3000)
    // const pageIframe = await page.frameLocator("body > section > div > h5")
    // await page.waitForTimeout(3000)
    await page.locator('body > section > div > h5').contentFrame().locator('body > section > div > div > div > input[type=text]')
    await page.waitForTimeout(7000)
    // await pageIframe.locator("body > section > div > div > div > input[type=text]").fill("Saurabh is Playwright Automation Engineer")
    // await frame.fill("Saurabh is Playwright Automation Engineer")
    // await page.waitForTimeout(3000)

})