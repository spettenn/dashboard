import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/Index';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</Router>
	);
};

export default App;
