import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // replace useHistory with useNavigate
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
	background-color: #0077ff;
	color: #fff;
	font-size: 16px;
	cursor: pointer;

	&:disabled {
		background-color: #ccc;
	}
`;

const Login = () => {
	const [password, setPassword] = useState('');
	const navigate = useNavigate(); // replace useHistory with useNavigate

	// This is your hardcoded password for simple authentication
	const correctPassword = 'yeppers123'; // replace "yourpassword" with your own password

	const handleSubmit = (event) => {
		event.preventDefault();
		// Validate password length
		if (password.length < 6) {
			alert('Password should be at least 6 digits long');
			return;
		}

		// Check if the entered password is correct
		if (password !== correctPassword) {
			alert('Incorrect password');
			return;
		}

		// Simulate successful login
		localStorage.setItem('isAuthenticated', 'true');
		navigate('/'); // replace history.push with navigate
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
