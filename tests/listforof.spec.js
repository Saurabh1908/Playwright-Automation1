const{test,expect} = require('@playwright/test')

test('List Demo',async({page})=>
{
    await page.goto("https://training.rcvacademy.com/")
    const listsection = await page.locator("(//div[@class='dynamic-text'])[1]")
    // for(const listItemonPage of await listsection.getByRole('lisitem').all())
    //     console.log(await listItemonPage.textContent())
    // for(const row of await page.getByRole('listitem').all())
    //     console.log(await row.textContent())
    //     // await page.waitForTimeout(8000)


    //method 2 Using regular for loop 
    const listItemonPage1 = await listsection.getByRole('listitem')
    const count = await listItemonPage1.count()
    for(var i=0;i<count;i++)
        console.log(await listItemonPage1.nth(i).textContent())

 
    



          
    
                                                  
    


})