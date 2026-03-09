const {test,expect} = require('@playwright/test')

test('Drag and Drop',async({page})=>
{
    await page.goto("https://jqueryui.com/droppable/")
    const pageFrame = await page.frameLocator("//iframe[@class='demo-frame']")
    const draggable = await pageFrame.locator("//div[@id='draggable']")
    const droppable = await pageFrame.locator("//div[@id='droppable']")
    await draggable.dragTo(droppable)
    await page.waitForTimeout(4000)

})


