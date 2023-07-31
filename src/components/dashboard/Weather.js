import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSun, FaCloudRain, FaCloud, FaSnowflake } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	top: 0;
	left: 0;
	margin: 1rem;
	margin-left: 0px;
	position: absolute;
`;
const H2 = styled.h2`
	font-size: 1.5rem;
	margin: 0px;
	margin-left: 1rem;
	color: #fff;
	font-weight: 400;
	font-family: 'Roboto', sans-serif;
`;
const Span = styled.span`
	font-size: 1.5rem;
	font-weight: 800;
	color: #03e9f4;
	margin-left: 0.5rem;
`;

const Weather = () => {
	const [weatherData, setWeatherData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			const options = {
				method: 'GET',
				url: 'https://weatherapi-com.p.rapidapi.com/current.json',
				params: { q: 'Oslo' },
				headers: {
					'X-RapidAPI-Key':
						'6727fd07abmshdddcbc34023c21fp187140jsnab366a7a51bd',
					'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
				},
			};

			try {
				const response = await axios.request(options);
				setWeatherData(response.data);
			} catch (err) {
				setError(err);
			}
		};

		fetchWeather();
	}, []);

	const weatherIcon = () => {
		if (!weatherData) return null;
		switch (weatherData.current.condition.text) {
			case 'Sunny':
				return <FaSun />;
			case 'Rain':
				return <FaCloudRain />;
			case 'Cloudy':
				return <FaCloud />;
			case 'Snow':
				return <FaSnowflake />;
			default:
				return null;
		}
	};

	if (error) return <div>Error fetching weather: {error.message}</div>;

	return (
		<>
			{weatherData ? (
				<Container>
					<H2>{weatherData.location.name}</H2>
					<Span>/</Span>
					<H2 style={{ marginLeft: '0.5rem' }}>
						{weatherData.current.condition.text}
					</H2>
					<H2>{weatherData.current.temp_c}°C</H2>
					{weatherIcon()}
				</Container>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};

export default Weather;
