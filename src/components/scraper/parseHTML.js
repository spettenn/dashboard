const cheerio = require('cheerio');

function parseHTML(html) {
	const $ = cheerio.load(html);
	const newsItems = $('.news-item')
		.map((i, element) => {
			const title = $(element).find('.news-title').text();
			const link = $(element).find('.news-link').attr('href');
			const summary = $(element).find('.news-summary').text();
			return { title, link, summary };
		})
		.get();

	return newsItems;
}

module.exports = parseHTML;
