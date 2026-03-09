const {test,expect} = require("@playwright/test")

const LoginPage = require("../Pages/Login.js")
const HomePage = require("../Pages/Home.js")

test('Login the Application Using the Page Object Model',async({page})=>
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const loginpage = new LoginPage(page)
    
    await loginpage.loginToApplication("saurabh@email.com","12345678")
    
    const homepage = new HomePage(page)
    await homepage.verifyCartButton()
    await homepage.logOutApplication()

    await loginpage.verifySignIn()
    

    



    
})

