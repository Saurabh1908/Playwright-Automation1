const {test,expect} = require('@playwright/test')


// test('Click and Double Click',async({page})=>
// {
//     await page.goto("https://textbox.johnjago.com/")
//     await page.locator("textarea").pressSequentially('RCV academy',{delay:1000})
//     await page.locator("textarea").dblclick()
//     await page.locator("textarea").click({button:"right"})
//     await page.waitForTimeout(5000)

// })


test('Keyboard Action',async({page})=>
{
    await page.goto("https://textbox.johnjago.com/")
    // await page.locator("textarea").pressSequentially('RCV academy',{delay:1000})
    // await page.locator("textarea").press('Control+A',{delay:200})
    // await page.locator("textarea").press('Backspace',{delay:200})

    await page.keyboard.type('Hello World!',{delay:200})
    await page.keyboard.press('ArrowLeft',{delay:200})
    await page.keyboard.down('Shift',{delay:200})

    for(let i=0;i< 'World'.length;i++)
        await page.keyboard.press('ArrowLeft',{delay:200})
    await page.keyboard.up('Shift',{delay:200})

    await page.keyboard.press('Backspace',{delay:200})
    await page.waitForTimeout(5000)

})