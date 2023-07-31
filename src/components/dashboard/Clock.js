import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
	font-size: 1.5rem;
	font-weight: 400;
	color: #fff;
	position: absolute;
	top: 0;
	right: 0;
	margin: 1rem;
	margin-top: 1rem;
	font-family: 'Roboto', sans-serif;
`;
const Span = styled.span`
	font-size: 1.5rem;
	font-weight: 800;
	color: #03e9f4;
	margin-left: 0.5rem;
`;
const Clock = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		var timerID = setInterval(() => tick(), 1000);

		return function cleanup() {
			clearInterval(timerID);
		};
	});

	function tick() {
		setDate(new Date());
	}

	return (
		<>
			<H2>
				{date.toLocaleDateString()}
				<Span>/</Span> {date.toLocaleTimeString()}
			</H2>
		</>
	);
};

export default Clock;
