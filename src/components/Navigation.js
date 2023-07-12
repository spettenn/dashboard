import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: transparent;
	width: 100%;
	max-width: 150px;
	background: rgba(0, 0, 0, 0.22);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(7.4px);
	-webkit-backdrop-filter: blur(7.4px);
`;
const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
`;
const StyledNavLink = styled(NavLink)`
	color: white !important;
	text-decoration: none;
	&.active {
		color: blue;
	}
`;

const Li = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	background-color: transparent;
`;

function Navigation() {
	return (
		<Container>
			<Ul>
				<Li>
					<StyledNavLink to='/' className='active'>
						Home
					</StyledNavLink>
				</Li>
				<Li>
					<StyledNavLink to='/calendar' className='active'>
						Calendar
					</StyledNavLink>
				</Li>
				<Li>
					<StyledNavLink to='/pws' className='active'>
						PWs
					</StyledNavLink>
				</Li>
				<Li>
					<StyledNavLink to='/assets' className='active'>
						Assets
					</StyledNavLink>
				</Li>
				<Li>
					<StyledNavLink to='/notes' className='active'>
						Notes
					</StyledNavLink>
				</Li>
			</Ul>
		</Container>
	);
}

export default Navigation;
