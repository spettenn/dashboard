import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/Homepage';
import Assets from './pages/Assets';
import Calendar from './pages/Calendar';
import Pw from './pages/Pw';
import Notes from './pages/Notes';

import Navigation from './components/Navigation';

const App = () => {
	return (
		<Router>
			<div style={{ display: 'flex' }}>
				<Navigation />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/assets' element={<Assets />} />
					<Route path='/calendar' element={<Calendar />} />
					<Route path='/pws' element={<Pw />} />
					<Route path='/notes' element={<Notes />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
