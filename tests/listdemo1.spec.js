const{test,expect} = require('@playwright/test')

test('List Demo',async({page})=>
{
    await page.goto("https://training.rcvacademy.com/")
    const listsection = await page.locator("(//div[@class='dynamic-text'])[1]")
    await expect(listsection.getByRole('listitem')).toHaveCount(4)
    await expect(listsection.getByRole('listitem')).toHaveText(['Access all currently published courses','Access to any new published courses till you are paid member','Per month price','Cancel anytime'])
    await expect(listsection.getByRole('listitem').filter({hasText:'Per month price'}))
                                                  .toHaveText('Per month price')
                                                  
    


})