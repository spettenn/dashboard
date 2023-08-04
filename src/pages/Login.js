import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // replace useHistory with useNavigate
import styled from 'styled-components';

const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #03e9f4;
	border-radius: 5px;
	background-color: transparent;
	outline: #03e9f4;

	&focus {
		outline: #03e9f4;
	}
`;

const Input = styled.input`
	padding: 10px;
	border: 1px solid #03e9f4;
	border-radius: 5px;
	font-size: 16px;
	background-color: transparent;
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
			alert('Fucking idiot, you need more digits');
			return;
		}

		// Check if the entered password is correct
		if (password !== correctPassword) {
			alert('Incorrect pw nerd');
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
				<Input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder=''
				/>
				{/* <Button type='submit'>Login</Button> */}
			</FormContainer>
		</PageContainer>
	);
};

export default Login;
