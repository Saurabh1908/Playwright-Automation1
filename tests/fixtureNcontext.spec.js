const {test,expect} = require('@playwright/test')

test('Fixture and Browser Context',async({browser})=>
{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    await page.goto("https://training.rcvacademy.com/")
})

test.only('Fixture and Browser Context page fixture',async({page})=>
{

    await page.goto("https://training.rcvacademy.com/")
})