const{test,expect} = require('@playwright/test')

class LoginPage
{
    constructor(page)
    {
        this.page = page
        this.username = "#email1"
        this.password = "#password1"
        this.signInButton  = "//button[@type='submit']"
    }

    async loginToApp()
    {
        await this.page.fill(this.username , "saurabh@email.com")
        await this.page.fill(this.password , "12345678")
        await this.page.click(this.signInButton)    
    }
}

module.exports = LoginPage