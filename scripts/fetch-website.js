import fetch from "node-fetch"
import * as cheerio from "cheerio"
import fs from "fs"

async function scrapeWebsite(url) {
  try {
    console.log(`Fetching content from: ${url}`)

    // Fetch the webpage (ignoring SSL certificate issues)
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
      // This helps with some SSL issues
      agent: false,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const html = await response.text()
    console.log("Successfully fetched HTML content")

    // Parse the HTML
    const $ = cheerio.load(html)

    // Extract useful information
    const pageData = {
      title: $("title").text(),
      headings: $("h1, h2, h3, h4, h5, h6")
        .map((i, el) => $(el).text())
        .get(),
      paragraphs: $("p")
        .map((i, el) => $(el).text())
        .get(),
      images: $("img")
        .map((i, el) => ({
          src: $(el).attr("src"),
          alt: $(el).attr("alt"),
        }))
        .get(),
      links: $("a")
        .map((i, el) => ({
          href: $(el).attr("href"),
          text: $(el).text(),
        }))
        .get(),
    }

    // Save the raw HTML
    fs.writeFileSync("scraped-page.html", html)

    // Save the extracted data as JSON
    fs.writeFileSync("page-data.json", JSON.stringify(pageData, null, 2))

    console.log("Content saved to scraped-page.html and page-data.json")
    console.log("Page title:", pageData.title)

    return { html, data: pageData }
  } catch (error) {
    console.error("Error scraping website:", error.message)

    // If HTTPS fails, try HTTP
    if (url.startsWith("https://")) {
      const httpUrl = url.replace("https://", "http://")
      console.log(`Trying HTTP instead: ${httpUrl}`)
      return scrapeWebsite(httpUrl)
    }

    throw error
  }
}

// Usage
const targetUrl = "http://www.bornpe.com/case/256.html"
scrapeWebsite(targetUrl)
  .then((result) => {
    console.log("Scraping completed successfully!")
  })
  .catch((error) => {
    console.error("Scraping failed:", error)
  })
