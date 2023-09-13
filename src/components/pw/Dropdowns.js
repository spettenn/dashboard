/* import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	background-color: transparent;

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

	background-color: #383838;

	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(7.4px);
	-webkit-backdrop-filter: blur(7.4px);

	min-width: 300px;
	margin-top: -10px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	border-bottom: 1px solid #03e9f4;
	border-left: 1px solid #03e9f4;
	border-right: 1px solid #03e9f4;
	text-align: center;
`;

const DropdownButton = styled.button`
	background-color: #3498db;
	color: white;
	border: none;
	cursor: pointer;
	padding: 10px 30px;
	font-size: 25px;
	min-width: 500px;

	margin-bottom: 10px;
	border-radius: 5px;
	border: 1px solid #03e9f4;
	background: rgba(0, 0, 0, 0.22);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(7.4px);
	-webkit-backdrop-filter: blur(7.4px);
`;

const Span = styled.span`
	font-size: 16px;
	margin-left: 10px;
	color: white;
	cursor: pointer;
`;

const DropdownItem = styled.p`
	color: black;

	text-decoration: none;
	display: block;
	min-width: 500px;
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
		info: 'LallallALLllalala',
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
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import bcrypt from 'bcryptjs';

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	background-color: transparent;

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

	background-color: #383838;

	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(7.4px);
	-webkit-backdrop-filter: blur(7.4px);

	min-width: 300px;
	margin-top: -10px;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	border-bottom: 1px solid #03e9f4;
	border-left: 1px solid #03e9f4;
	border-right: 1px solid #03e9f4;
	text-align: center;
`;

const DropdownButton = styled.button`
	background-color: #3498db;
	color: white;
	border: none;
	cursor: pointer;
	padding: 10px 30px;
	font-size: 25px;
	min-width: 500px;

	margin-bottom: 10px;
	border-radius: 5px;
	border: 1px solid #03e9f4;
	background: rgba(0, 0, 0, 0.22);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(7.4px);
	-webkit-backdrop-filter: blur(7.4px);
`;

const Span = styled.span`
	font-size: 16px;
	margin-left: 10px;
	color: white;
	cursor: pointer;
`;

const DropdownItem = styled.p`
	color: black;

	text-decoration: none;
	display: block;
	min-width: 500px;
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
const hashPassword = (password) => {
	const salt = bcrypt.genSaltSync(10);
	return bcrypt.hashSync(password, salt);
};

// Password Generator Function
const generatePassword = (length = 12) => {
	const charset =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	let password = '';
	for (let i = 0; i < length; i++) {
		password += charset.charAt(Math.floor(Math.random() * charset.length));
	}
	return password;
};

const data = [
	{
		adress: 'google',
		username: 'username1',
		info: hashPassword('password1'), // Always store hashed versions!
	},
	{
		adress: 'fb',
		username: 'username2',
		info: hashPassword('password2'),
	},
	{
		adress: 'x',
		username: 'username2',
		info: hashPassword('password2'),
	},
	{
		adress: 'outlook',
		username: 'username2',
		info: hashPassword('password2'),
	},
	{
		adress: 'steam',
		username: 'username2',
		info: hashPassword('LallallALLllalala'),
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

		// Clear the clipboard after 30 seconds for security
		setTimeout(() => {
			navigator.clipboard.writeText('');
		}, 30000);
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
								{/* Do not display actual hashed password. Maybe use "••••••••" or a show password feature */}
								<DropdownItem onClick={() => copyToClipboard('NOTHING')}>
									<Span>••••••••</Span>
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
