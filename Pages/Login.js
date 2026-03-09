const {expect} = require('@playwright/test')

class LoginPage
{
    constructor(page)
    {
        this.page = page
        this.header="//h2[normalize-space()='Sign In']"
        this.username = "//input[@name='email1']"
        this.password = "#password1"
        this.loginbutton = "//button[@class='submit-btn']"
    }

    async loginToApplication(username,password)
    {
        await this.page.fill(this.username,username)
        await this.page.fill(this.password,password)
        await this.page.click(this.loginbutton)
        await this.page.waitForTimeout(4000)
    }

    async verifySignIn()
    {
        await expect(this.page.locator(this.header)).toBeVisible()
    }
}

module.exports =LoginPage