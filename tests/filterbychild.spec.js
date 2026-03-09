const{test,expect} = require('@playwright/test')

test('Launch the Application',async({page})=>
{
    await page.goto("https://www.saucedemo.com/v1/")
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.locator("css=#login-button").click()
    await page.locator("xpath=//div[@class='inventory_item']")
                      .filter({has:page.getByRole('link',{name: 'Sauce Labs Bolt T-Shirt'}) })
                      .getByRole("button",{name:'ADD TO CART'})
                      .click()
    await page.waitForTimeout(3000)
    


})