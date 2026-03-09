const{test,expect} = require('@playwright/test')


// test.describe.configure({mode:"parallel"})

// test('Checkbox',async({page})=>
// {
//     await page.goto("https://login.salesforce.com/?locale=in")
//     await page.locator("#rememberUn").click()
//     await page.waitForTimeout(3000)
//     await expect(page.locator("#rememberUn")).toBeChecked()
// })

// test('Radio Button',async({page})=>
// {
//     await page.goto("https://practice.expandtesting.com/radio-buttons")
//     const radioButton = await page.locator("//input[@type='radio']")
//     await radioButton.first().click()
//     await page.waitForTimeout(2000)
//     await radioButton.last().click()
//     await page.waitForTimeout(2000)
//     await radioButton.nth(5).click()
//     await page.waitForTimeout(2000)
//     await radioButton.nth(6).click()
//     await page.waitForTimeout(2000) 
// })

// test('Checkbox',async({page})=>
// {
//     await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php")
//     const checkBoxes = [
//         "#passport",
//         "//*[@id='votercard']",
//         "#drivinglicense"
//     ]
//     for(const checkBox of checkBoxes)
//     {
//         await page.locator(checkBox).click()
//         await page.waitForTimeout(4000)
//     }

// })

// test('Radio Button',async({page})=>
// {
//     await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php")
//     await page.locator("//input[@type='radio' and @id='saving']").click()
//     await page.waitForTimeout(4000)
//     await page.locator("//input[@type='radio' and @id='pension']").click()
//     await page.waitForTimeout(4000)
//     await page.locator("//input[@type='radio' and @id='current']").click()
//     await page.waitForTimeout(4000)
// })

test('Checkboxes',async({page})=>
{
    await page.goto("https://www.qa-practice.com/elements/checkbox/mult_checkbox")
    await page.waitForTimeout(3000)
    const checkBoxes = [
         "#id_checkboxes_0",
         "#id_checkboxes_2"
    ]

    for (const checkBox in checkBoxes)
    {
        await page.locator (checkBox).check()
    }
     await page.waitForTimeout(4000)
     
})