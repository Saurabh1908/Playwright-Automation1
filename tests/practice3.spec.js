const {test,expect} = require('@playwright/test')

// test('File Download',async({page})=>
// {
//     await page.goto("https://the-internet.herokuapp.com/download")

//     await page.locator("//div[@class='example']/a[text()='karthik.txt']").click()
//     await page.waitForTimeout(3000)

//     // const [download] = await Promise.all([
//     //     await page.waitForEvent('download')
    
//     // ])
//     const [newPage] = await Promise.all([
//    context.waitForEvent('page'),
//    await page.locator("//div[@class='example']/a[text()='karthik.txt']").click()
// //    page.getByText('Download Report').click() // Triggers new tab
// ]);
//     const downloadPromise = newPage.waitForEvent('download');
//     await page.waitForTimeout(4000)

// })

test('File Download',async({page})=>
{
    await page.goto("https://the-internet.herokuapp.com/download")
    const waitDownloadEvent = page.waitForEvent('download')
    await page.locator("//div[@class='example']/a[text()='karthik.txt']").click()
    await page.waitForTimeout(4000)

    const download = await waitDownloadEvent
    await download.saveAs('./'+ download.suggestedFilename())
    await page.waitForTimeout(4000)

})


