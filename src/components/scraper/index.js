const getHTML = require('./getHTML');
const parseHTML = require('./parseHTML');

async function scrapeNews(url) {
	const html = await getHTML(url);
	const newsItems = parseHTML(html);
	return newsItems;
}

module.exports = scrapeNews;
