const{test,expect} = require('@playwright/test')
const LoginPage = require("../Pages/login1.js")
const HomePage = require('../Pages/home1.js')

test('Login the Application',async({page})=>
 {     
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    const loginPage = new LoginPage(page)
    await loginPage.loginToApp()

    const homePage = new HomePage(page)
    await homePage.addToCart()
    await homePage.logOutFromApplication()
    

})