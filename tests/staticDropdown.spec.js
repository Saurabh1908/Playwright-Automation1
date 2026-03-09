const {test,expect} = require('@playwright/test')


test('Static DropDown',async({page})=>
{
    await page.goto("https://www.salesforce.com/in/form/signup/freetrial-salesforce-starter/?d=701ed00000dX8sPAAS&nc=701ed00000dXJ4eAAG&utm_content=701ed00000dX8sPAAS&gclsrc=aw.ds&gad_source=1&gad_campaignid=22826734729&gbraid=0AAAABAVuWUk5cgJ_fPbKIXDcKjlnZJAYj&gclid=CjwKCAjwisnGBhAXEiwA0zEOR_Ye-FU-jbxDlXxo2jPJzKBujCl1aV6I8de0FOwSAPKrO1IoIuU6JxoCNdIQAvD_BwE")
    await page.locator("//select[@name='UserTitle']").selectOption({value:'Developer / Software Engineer'})
     await page.waitForTimeout(3000)
    await page.locator("//select[@name='UserTitle']").selectOption({label:'IT Manager'})
     await page.waitForTimeout(3000)
    await page.locator("//select[@name='UserTitle']").selectOption({index:4})
    await page.waitForTimeout(3000)




})