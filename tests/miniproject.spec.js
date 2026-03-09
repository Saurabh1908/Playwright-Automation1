const{test,expect} = require('@playwright/test')

test('To Add Item and Mark Completed and then Delete',async({page})=>
{
    await page.goto("https://todomvc.com/examples/react/dist/")
    await page.locator("#todo-input").fill("Buy grocery")

    await page.keyboard.press('Enter',{delay:200})
    await page.waitForTimeout(3000)
    await page.locator("#todo-input").fill("Pay Bills")
    await page.keyboard.press('Enter',{delay:200})
    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Completed']")
    await page.locator("(//input[@type='checkbox'])[3]").check()
    await page.waitForTimeout(3000)
    // await expect(page.locator("(//input[@type='checkbox'])[2]")).toBeChecked()




})