const puppeteer = require('puppeteer');

async function getHTML(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const content = await page.content();
	await browser.close();
	return content;
}

module.exports = getHTML;
