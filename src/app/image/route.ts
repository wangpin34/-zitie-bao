/* eslint-disable @typescript-eslint/ban-ts-comment */
import puppeteer from 'puppeteer'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const pageUrl = `${process.env.DEPLOYMENT_URL}/print${url.search}&no-side-actions=true` // Update this to match your deployment

  // Launch Puppeteer to render the HTML page
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(pageUrl, { waitUntil: 'networkidle0' })
  const screenshot = await page.screenshot({ fullPage: true, type: 'png' })
  await browser.close()

  // Send the image as the response body
  return new Response(screenshot, {
    headers: {
      'Content-Type': 'image/png', // Set the content type to image/png
      'Cache-Control': '1d', // Cache the image for 1 day
    },
  })
}
