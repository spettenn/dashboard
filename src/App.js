import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
	useLocation,
} from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/Homepage';
import Assets from './pages/Assets';
import Calendar from './pages/Calendar';
import Pw from './pages/Pw';
import Notes from './pages/Notes';
import Navigation from './components/Navigation';
import styled from 'styled-components';

const TransparentBackground = styled.div`
	background-color: #383838;
	width: 100%;
	height: 100vh;
`;

// Your protected route should be a component
const ProtectedRoute = ({ element: Component }) => {
	const navigate = useNavigate();
	const isAuthenticated = localStorage.getItem('isAuthenticated');

	useEffect(() => {
		if (!isAuthenticated) {
			navigate('/login');
		}
	}, [navigate, isAuthenticated]);

	return isAuthenticated ? <>{Component}</> : null;
};

const Content = () => {
	const location = useLocation();
	const isLoginPage = location.pathname === '/login';

	return (
		<div style={{ display: 'flex' }}>
			{!isLoginPage && <Navigation />}
			<Routes>
				<Route path='/' element={<ProtectedRoute element={<HomePage />} />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='/assets'
					element={<ProtectedRoute element={<Assets />} />}
				/>
				<Route
					path='/calendar'
					element={<ProtectedRoute element={<Calendar />} />}
				/>
				<Route path='/pws' element={<ProtectedRoute element={<Pw />} />} />
				<Route path='/notes' element={<ProtectedRoute element={<Notes />} />} />
			</Routes>
		</div>
	);
};

const App = () => {
	return (
		<Router>
			<TransparentBackground>
				<Content />
			</TransparentBackground>
		</Router>
	);
};

export default App;
