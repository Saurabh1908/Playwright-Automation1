const {test,expect} = require('@playwright/test')

// test('DropDown',async({page})=>
// {
//     await page.goto("https://practice.expandtesting.com/dropdown")
//      await page.mouse.wheel(0,600)
//     await page.locator("//select[@id='country']").selectOption({label:"France"})
//     await page.waitForTimeout(3000)
//     await page.locator("//select[@id='country']").selectOption({value:"NZ"})
//     await page.waitForTimeout(3000)
//     await page.locator("//select[@id='country']").selectOption({index:103})
//     await page.waitForTimeout(3000)

//     // const values = await page.waitForSelector("//select[@id='country']/option")
//     // console.log("All Countries Name are:-",values.textContent())
//     // await page.waitForTimeout(5000)

//     await expect(page.locator("//select[@id='country']")).selectOption({label:'Finland"'}).toContain("Finland")
//     await page.waitForTimeout(7000)

// })

test('Dynamic DropDown',async({page})=>
{
    await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php")
    // await page.locator("//select[@id='country_code']").click()
    await page.waitForTimeout(2000)
    await page.locator("//input[@name ='fathername']").screenshot({path:'myscreenshot.png'},)
      await page.waitForTimeout(5000)
    await page.locator("//select[@id='country_code']").selectOption({label:"Singapore (+65)"})
  
    await page.waitForTimeout(7000)



})