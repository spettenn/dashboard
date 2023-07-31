import axios from 'axios';

const cheerio = require('cheerio');
const url = 'https://www.vg.no/';

let headlines = [];

const fetchVg = async () => {
	try {
		let res = await axios.get(url);
		let $ = cheerio.load(res.data);
		$('article > div > a > div').each((index, element) => {
			headlines.push($(element).text().trim);
		});
		return headlines;
	} catch (error) {
		console.log(error);
	}
};

export default fetchVg;
