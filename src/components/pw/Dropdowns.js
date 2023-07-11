import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	background-color: transparent;
	max-height: 60vh;
	overflow-y: auto;
`;

const Dropdown = styled.div`
	position: relative;
	display: inline-block;
`;

const DropdownContent = styled.div`
	display: ${(props) => (props.show ? 'block' : 'none')};
	position: absolute;
	min-width: 160px;
	z-index: 1;

	background: rgba(0, 0, 0, 0.22);

	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(7.4px);
	-webkit-backdrop-filter: blur(7.4px);

	min-width: 300px;
	margin-top: -10px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
`;

const DropdownButton = styled.button`
	background-color: #3498db;
	color: white;
	border: none;
	cursor: pointer;
	padding: 16px;
	font-size: 18px;

	margin-bottom: 10px;
	min-width: 300px;
	background: rgba(0, 0, 0, 0.22);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(7.4px);
	-webkit-backdrop-filter: blur(7.4px);
`;

const Span = styled.span`
	font-size: 16px;
	margin-left: 10px;
	color: green;
	cursor: pointer;
`;

const DropdownItem = styled.p`
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
`;
const InnerContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin: auto;
`;

// Function to hash password
const hashPassword = (info) => {
	return 'Something is here'.repeat(info.length === 0 ? 0 : 1);
};

const data = [
	{
		adress: 'https://www.google.com',
		username: 'username1',
		info: 'password1',
	},
	{
		adress: 'https://www.facebook.com',
		username: 'username2',
		info: 'password2',
	},
	{
		adress: 'https://www.twitter.com',
		username: 'username2',
		info: 'password2',
	},
	{
		adress: 'https://www.gamer.com',
		username: 'username2',
		info: 'password2',
	},
	{
		adress: 'https://www.yay.com',
		username: 'username2',
		info: 'password2',
	},
];

function Dropdowns() {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleButtonClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	const copyToClipboard = (text) => {
		navigator.clipboard.writeText(text);
		alert(`${text} copied to clipboard`);
	};

	return (
		<Container>
			<InnerContainer>
				{data.map((item, index) => {
					return (
						<Dropdown key={index}>
							<DropdownButton onClick={() => handleButtonClick(index)}>
								{item.adress}
							</DropdownButton>
							<DropdownContent show={activeIndex === index}>
								<DropdownItem onClick={() => copyToClipboard(item.username)}>
									<Span>{item.username}</Span>
								</DropdownItem>
								<DropdownItem onClick={() => copyToClipboard(item.info)}>
									<Span>{hashPassword(item.info)}</Span>
								</DropdownItem>
							</DropdownContent>
						</Dropdown>
					);
				})}
			</InnerContainer>
		</Container>
	);
}

export default Dropdowns;
