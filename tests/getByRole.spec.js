const{test,expect} = require('@playwright/test')

test('Get By Role',async({page})=>
{
    await page.goto("https://parabank.parasoft.com/parabank/index.html")
    await page.getByRole("link",{name:"Forgot login info?"}).click()
    await page.waitForTimeout(5000)

})