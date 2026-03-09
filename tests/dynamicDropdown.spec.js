const {test,expect} = require('@playwright/test')


test('Dynamic DropDown',async({page})=>
{
    await page.goto("https://www.yatra.com/")
    await page.locator("//span[@class='style_cross__q1ZoV']/img").click()
    await page.waitForTimeout(3000)
    
    //const departfrom = await page.locator("//div[@class='MuiBox-root css-t8k0vn']/div[1]/div/div/input")
    // const departfrom = await page.locator("//p[normalize-space()='Departure From']")
    // await departfrom.click()
    // await page.waitForTimeout(3000)
    // // await departfrom.clear({delay:1000})
    // await departfrom.pressSequentially('New',{delay:1000})
    // await page.locator("//div[@class='MuiBox-root css-134xwrj']/ul/div")
    //                   .getByRole('listitem')
    //                   .filter({hasText:'New York, (JFK)'})
    //                   .click()
    //  await page.waitForTimeout(3000)

  //for going to script
  const goingTo = await page.locator("//p[normalize-space()='Going To']")
  await goingTo.click()
  await page.waitForTimeout(2000)
  await goingTo.pressSequentially('Par',{delay:1000})
  await page.locator("//div[@class='MuiBox-root css-134xwrj']/ul/div")
                    .getByRole('listitem')
                    .filter({hasText:'Paris, (ORY)'})
                    .click()
  await page.waitForTimeout(4000)


})