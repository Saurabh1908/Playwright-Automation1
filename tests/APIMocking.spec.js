const {test,expect} = require('@playwright/test')

test('mock the fruit list and does not call the actual api',async({page})=>
{

    //Mocking and API
    await page.route("*/**/api/v1/fruits", async route=> 
        {
        const json = [{ 'name':'Testing', id:19 }]
        await route.fulfill({json})

    })

    await page.goto("https://demo.playwright.dev/api-mocking/")
    await expect(page.getByText('Testing')).toBeVisible()
})
