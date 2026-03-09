const {test,expect} = require('@playwright/test')

test('Launch Application',async({page})=>
{
    
    await page.goto("https://parabank.parasoft.com/parabank/index.htm;jsessionid=825F5BD0261CEF1E2B15D165CF469DAF")
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking')
})