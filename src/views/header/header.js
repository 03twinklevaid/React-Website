import './header.scss';
import React from 'react';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import logo from '../../assets/1-header/logo.png';
import search from '../../assets/7-icons/search.svg';

const Header = () => {
	const navigationItems = [
		'Home',
		'About Us',
		'Services',
		'Pricing',
		'Careers',
	];
	return (
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand>
					<img src={logo} className="d-inline-block align-top" alt="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						{navigationItems.map((item, key) => {
							return (
								<Nav.Link href={item} key={key}>
									{item}
								</Nav.Link>
							);
						})}
					</Nav>
					<Form className="search-form">
						<input
							type="search"
							className="search-input"
							placeholder="Search"
						/>
						<div className="search">
							<img src={search} alt="search" />
						</div>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default Header;
