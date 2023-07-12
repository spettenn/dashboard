import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/Homepage';
import Assets from './pages/Assets';
import Calendar from './pages/Calendar';
import Pw from './pages/Pw';
import Notes from './pages/Notes';
import Navigation from './components/Navigation';

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

const App = () => {
	return (
		<Router>
			<div style={{ display: 'flex' }}>
				<Navigation />
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
					<Route
						path='/notes'
						element={<ProtectedRoute element={<Notes />} />}
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default App;
