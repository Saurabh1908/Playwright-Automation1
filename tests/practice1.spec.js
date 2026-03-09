//frames

// const {test,expect} = require('@playwright/test')

// test('Frames',async({page})=>
// {
//     await page.goto("https://docs.oracle.com/javase/8/docs/api/")
//     const frame = await page.frameLocator("//frame[@name='packageListFrame']")
//     await frame.locator("//div[@class='indexContainer']/ul/li/a[text()='java.applet']").click()
//     await page.pause()
// })

//alerts

const {test,expect} = require('@playwright/test')

test('Alerts',async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog',async(d)=>{
        expect(d.type()).toContain('alert')
        expect(d.message()).toContain("I am a JS Alert")
        await d.accept()
    })


    await page.getByRole("button",{name:"Click for JS Alert"}).click()
    await page.waitForTimeout(3000)
})

test("confirm",async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog',async(dialogwindow)=>
    {
        expect(dialogwindow.type()).toContain('confirm')
        expect(dialogwindow.message()).toContain("I am a JS Confirm")
        await dialogwindow.accept()
    })
    
    await page.getByRole("button",{name:"Click for JS Confirm"}).click()
    await page.waitForTimeout(3000)

})

test('Prompt',async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog',async(dialogwindow)=>
    {
        expect(dialogwindow.type()).toContain('prompt')
        expect(dialogwindow.message()).toContain("I am a JS prompt")
        await dialogwindow.accept('Saurabh')
    })
    await page.getByRole("button",{name:"Click for JS Prompt"}).click()
    await page.waitForTimeout(5000)
})