const {expect} = require('@playwright/test')

class HomePage
{
    constructor(page)
    {
        this.page = page
        this.cartButton=".cartBtn"
        this.totalPrice="//div[@class='top-container']/h3"
        this.menu = "//img[@alt='menu']"
        this.signoutButton = "//button[text()='Sign out']"
    }


    async verifyCartButton()
    {
        await this.page.click(this.cartButton)
        await expect(this.page.locator(this.totalPrice)).toBeVisible({timeout:10000})
        await expect(this.page.locator(this.totalPrice)).toHaveText('Total Price: ₹0',{timeout:10000})
    }

    async logOutApplication()
    {
        await this.page.click(this.menu)
        await this.page.click(this.signoutButton)
        await this.page.waitForTimeout(3000)
    }
}

module.exports=HomePage