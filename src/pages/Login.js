import React, { useState, useHistory } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #fafafa;
`;

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	border: 1px solid #ddd;
	border-radius: 5px;
	background-color: #fff;
`;

const Title = styled.h1`
	margin-bottom: 20px;
`;

const Input = styled.input`
	margin-bottom: 10px;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
	font-size: 16px;
`;

const Button = styled.button`
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	background-color: #007bff;
	color: #fff;
	font-size: 16px;
	cursor: pointer;

	&:disabled {
		background-color: #ccc;
	}
`;

const Login = () => {
	const [password, setPassword] = useState('');
	const history = useHistory(); // add this line

	const handleSubmit = (event) => {
		event.preventDefault();
		// Validate password length
		if (password.length < 6) {
			alert('Password should be at least 6 digits long');
			return;
		}
		// On successful login, redirect to the homepage
		history.push('/');
	};

	// handle login
	console.log('Logged in with password: ', password);

	return (
		<PageContainer>
			<FormContainer onSubmit={handleSubmit}>
				<Title>Login</Title>
				<Input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Enter your password'
				/>
				<Button type='submit'>Login</Button>
			</FormContainer>
		</PageContainer>
	);
};

export default Login;
