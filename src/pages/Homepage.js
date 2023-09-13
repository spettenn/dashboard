import React from 'react';
import styled from 'styled-components';
import Clock from '../components/dashboard/Clock';
import Weather from '../components/dashboard/Weather';
import Me from '../assets/me.png';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	position: relative;
	text-align: center;
`;

const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	border-radius: 50%;
	max-width: 300px;
	z-index: 2;
	transition: transform 0.5s;
	backface-visibility: hidden;
`;

const ImageWrapper = styled.div`
	position: relative;
	width: 300px;
	height: 300px;
	border-radius: 50%;
	overflow: hidden;

	&:hover ${Image} {
		transform: rotateY(180deg);
	}
`;

const BehindText = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 20px;
	z-index: 1;
	color: white;
	text-align: center;
`;

const HomePage = () => {
	return (
		<Container>
			<Clock />
			<Weather />
			<ImageWrapper>
				<BehindText>Hello, I'm Aleks!</BehindText>
				<Image src={Me} alt='me' />
			</ImageWrapper>
		</Container>
	);
};

export default HomePage;
