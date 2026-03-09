const {test,expect} = require('@playwright/test')




// test('Handling Multiple Tabs',async({browser})=>
// {
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto("https://freelance-learn-automation.vercel.app/login",{timeout:3000})
//       await page.waitForTimeout(4000)
//     const [newPage] = await Promise.all(
//         [
//             context.waitForEvent("page"),
//             page.locator("(//a[contains(@href,'facebook')])[1]").click()

//         ]
//     )
//     await newPage.locator("(//input[@name='email'])[2]").fill("Saurabh@email2234.com")
//     await newPage.waitForTimeout(4000)
//     await newPage.close()
//     await page.locator("#email1").fill("saurabh@email.com")
//     await page.waitForTimeout(3000)

// })


//Maximize Browser
test.use({viewport:{width:1280,height:720}})
test('Maximize Browser',async({page})=>
{
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(4000)
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)

})