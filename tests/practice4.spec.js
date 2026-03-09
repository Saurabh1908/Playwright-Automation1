const {test,expect} = require('@playwright/test')
// const testdata = JSON.parse(JSON.stringify(require('../testdata.json')))
const testdata1 = JSON.parse(JSON.stringify(require("../testlogin.json")))


test.describe("Data Driven Tesing on Login Test",function() 
{
    for(const data of testdata1)
    {
        test.describe(`Login with Users ${data.id}`,function()
        {
          test('Login to Application',async({page})=>
          {
            await page.goto("https://freelance-learn-automation.vercel.app/login")
            await page.locator("#email1").fill(data.Username)
            await page.locator("#password1").fill(data.Password)
            await page.waitForTimeout(5000)
          })
        })
    }
})

// test('Read the Json file',async({page})=>
// {
//     await page.goto("https://freelance-learn-automation.vercel.app/login")
//     // await page.locator("#email1").fill(testdata.Username)
//     // await page.locator("#password1").fill(testdata.Password)
//     await page.locator("#email1").fill(testdata1.Username)
//     await page.locator("#password1").fill(testdata1.Password)
//     await page.waitForTimeout(5000)
    
// })