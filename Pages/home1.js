class HomePage
{
    constructor(page)
    {
        this.page = page
        this.cart = "//div[@class = 'home-container']/div[3]"
        this.menu = "//img[@alt='menu']"
        this.logOut = "//button[normalize-space()='Sign out']"

    }

    async addToCart()
    {
        this.page.click(this.cart)
    }

    async logOutFromApplication()

    {
        await this.page.click(this.menu)
        await this.page.click(this.logOut)
    }
}

module.exports = HomePage