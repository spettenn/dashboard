// HomePage.js
import React from 'react';
import styled from 'styled-components';
/* import fetchVg from '../components/scraper/scrapeVg'; */
import Clock from '../components/dashboard/Clock';
import Weather from '../components/dashboard/Weather';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	position: relative;
	text-align: center;
`;

const HomePage = () => {
	/* const [headlines, setHeadlines] = useState([]); */

	/* 	useEffect(() => {
		const fetchHeadlines = async () => {
			try {
				const response = await fetch('http://localhost:5000/fetchVg');
				const data = await response.json();
				setHeadlines(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchHeadlines();
	}, []); */

	return (
		<Container>
			<Clock />
			<Weather />
			<h1>Home Page</h1>
			{/* {headlines &&
				headlines.map((headline, index) => <p key={index}>{headline}</p>)} */}
		</Container>
	);
};

export default HomePage;
