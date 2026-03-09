// const {test,expect} =require('@playwright/test')

// test('Visual test homepage', async ({ page }) => {

//   await page.goto('https://playwright.dev');

//   await expect(page).toHaveScreenshot();

// });


const {test,expect} = require('@playwright/test')

// test('Open New Tab',async({browser})=>
// {
//     const context = await browser.newContext()
//     const page = await context.newPage()
//     await page.goto("https://freelance-learn-automation.vercel.app/login") 

//     const[newPage] = await Promise.all(
//       [
//         context.waitForEvent('page'),
//         page.locator("(//div[@class='social-btns']/a)[1]").click()
//       ])
//       await newPage.waitForTimeout(4000) 
// })

// test('Network Call',async({page})=>
// {
//   await page.goto("https://freelance-learn-automation.vercel.app/login")
//   await page.getByText("New user? Signup").click()
//   await page.waitForLoadState('networkidle')
//   const count = await page.locator("//input[@type='checkbox']").count()
//   await expect(count).toBe(4)
// })

// test('DropDown',async({page})=>
// {
//   await page.goto("https://www.automationtesting.co.uk/dropdown.html")
//   await page.locator("#cars").selectOption({label:'BMW'})
//   await page.waitForTimeout(3000)
//   await page.locator("#cars").selectOption({index:3})
//   await page.waitForTimeout(3000)
//   await page.locator("#cars").selectOption({value:'mercedes'})
//   await page.waitForTimeout(3000)

//   const text = await page.locator("#cars").textContent()
//   console.log("All Cars Names",text)

//   await expect(text.includes('Volkswagen')).toBeTruthy()

//   let cars = await page.$('#cars')
//   let values = await page.$$('option')

//   let status=false
//   for(let i=0;i<values.length;i++)
//   {
//     let value = values[i]
//     let text = await value.textContent()
//     if(text.includes('Jeep'))
//     {
//       status=true
//       break
//     }
//     console.log('Print all Cars Names',text)
    
//   }
//   await expect(status).toBeTruthy()

//   //select multiple option at a time using array
//   await page.locator("#cars").selectOption(['Suzuki','Audi'])
//   await page.waitForTimeout(4000)
// })

// test('Upload File',async({page})=>
// {
//   await page.goto("https://the-internet.herokuapp.com/upload")
//   await page.locator("#file-upload").setInputFiles('./Pages/karthik.txt')
//   await page.locator("#file-upload").click()
//   await page.waitForTimeout(3000)
//   expect(await page.locator("//h3")).toHaveText("File Uploader")
//   await page.waitForTimeout(3000)
  
// })

// test.skip('Handle Alerts',async({page})=>
// {
//   await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

//   page.on('dialog',async(d)=>
//   {
//     expect(d.type()).toContain('alert')
//     expect(await d.message()).toContain("I am a JS Alert")
//     await d.accept()
//   })
//   await page.getByText("Click for JS Alert").click()
//   await page.waitForTimeout(3000)
// })

test.skip('handle Confirm',async({page})=>
{
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

  page.on('dialog',async(dialogWindow)=>
  {
    expect(dialogWindow.type()).toContain('confirm')
    expect(await dialogWindow.message()).toContain('I am a JS Confirm')
    await dialogWindow.dismiss()

  })
  await page.getByText('Click for JS Confirm').click()
  await page.waitForTimeout(4000)
})

test('handle Prompt',async({page})=>
{
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

  page.on('dialog',async(dialogWindow)=>
  {
    expect(dialogWindow.type()).toContain('prompt')
    expect(await dialogWindow.message()).toContain('I am a JS prompt')
    await dialogWindow.accept('Saurabh Badave')

  })
  await page.getByText('Click for JS Prompt').click()
  await page.waitForTimeout(5000)
})




