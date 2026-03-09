const  {test,expect} = require('@playwright/test')

test('Locators Operators',async({page})=>
{
    await page.goto("https://www.saucedemo.com/v1/")
    // await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByRole('textbox').and(page.getByPlaceholder('Username')).fill('standard_user')
    // await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('textbox').and(page.getByPlaceholder('Password')).fill('secret_sauce')
    await page.locator("css=#login-button").click()
    const productItems = await page.locator("xpath=//div[@class='inventory_item']")
    await expect(productItems).toHaveCount(6)

})