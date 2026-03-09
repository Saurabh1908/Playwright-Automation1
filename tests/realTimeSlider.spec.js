const {test,expect} = require('@playwright/test')

test('Mouse Hover',async({page})=>
{
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(4000)
    // await page.locator("//span[@role='button']").click()

    await page.locator("//a[@aria-label='Electronics']").getByRole('img').click()
    // await page.waitForTimeout(3000)
    await page.locator("(//a[@title='From ₹499']/div/div[1])[1]").getByRole('img').click()
    // await page.waitForTimeout(3000)
    const s1 = await page.locator("//*[@id='container']/div/div[3]/div/div[1]/div/div/div/section[5]/div[3]/div[2]")
    const bb = await s1.boundingBox()
    await page.waitForTimeout(3000)
    await page.mouse.move(bb.x+bb.width/2 , bb.y+bb.height/2)
    await page.waitForTimeout(3000)
    await page.mouse.down()
    await page.waitForTimeout(3000)
    await page.mouse.move(bb.x+50 , bb.y+bb.height/2)
    await page.waitForTimeout(4000)
    await a.mouse.up()
    await page.waitForTimeout(3000)
})