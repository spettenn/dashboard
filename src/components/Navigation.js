import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: transparent;
	width: 100%;
	max-width: 150px;
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
const StyledNavLink = styled(Link)`
	color: white;
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
	background-color: #007bff;
`;

function Navigation() {
	return (
		<Container>
			<Ul>
				<Li>
					<StyledNavLink
						to='../pages/Homepage.js'
						exact
						activeClassName='active'>
						Home
					</StyledNavLink>
				</Li>
				<Li>
					<StyledNavLink to='../pages/Calendar.js' activeClassName='active'>
						Calendar
					</StyledNavLink>
				</Li>
				<Li>
					<StyledNavLink to='../pages/Pw.js' activeClassName='active'>
						PWs
					</StyledNavLink>
				</Li>
				<Li>
					<StyledNavLink to='../pages/Assets.js' activeClassName='active'>
						Assets
					</StyledNavLink>
				</Li>
				<Li>
					<StyledNavLink to='../pages/Notes' activeClassName='active'>
						Notes
					</StyledNavLink>
				</Li>
			</Ul>
		</Container>
	);
}

export default Navigation;
