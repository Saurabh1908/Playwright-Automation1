const {test,expect} = require('@playwright/test')


test('Handle Multiple Windows or Tabs',async({browser})=>
{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://training.rcvacademy.com/")
    await page.evaluate(() => window.scrollBy(0, 700));
    await page.waitForTimeout(2000)

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),//pending,fulfilled,rejected
        page.locator("(//a[@class='img-link'])[1]").click(),
        page.waitForTimeout(3000)
        
    ])
    await newPage.locator("//span[normalize-space()='Share']").click()
    await newPage.waitForTimeout(3000)
    await newPage.locator("//i[normalize-space()='clear']").click()
    await newPage.waitForTimeout(2000)
    await newPage.close()
    await page.waitForTimeout(2000)
    await page.evaluate(() => window.scrollBy(0,0));
    await page.getByPlaceholder("Your name").fill("Saurabh")
    await page.waitForTimeout(1000)
    await page.close()



})


