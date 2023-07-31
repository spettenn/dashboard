const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const port = 5000; // You can choose any port that's not in use

app.use(cors()); // This allows requests from your React app

app.get('/fetchVg', async (req, res) => {
	try {
		let siteRes = await axios.get('https://www.vg.no/');
		let $ = cheerio.load(siteRes.data);
		let headlines = [];
		$('article > div > a > div').each((index, element) => {
			headlines.push($(element).text().trim());
		});

		res.json(headlines); // Send the data as JSON
	} catch (error) {
		console.log(error);
		res.status(500).send('Error fetching site');
	}
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
