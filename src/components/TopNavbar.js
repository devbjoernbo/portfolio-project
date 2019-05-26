import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { StyledScrollspy } from './topNavbar_Styles';

const TopNavBar = ({ sections }) => {
	const cleanedIDSections = sections.map(section => section.id);

	return (
		<Navbar expand="md" bg="light">
			<Navbar.Brand>Nicolai Bjørnbo Christensen</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse
				id="basic-navbar-nav"
				className="justify-content-end"
			>
				<StyledScrollspy items={cleanedIDSections}>
					<Nav>
						{sections.map(section => (
							<Nav.Link key={section.id} href={`#${section.id}`}>
								{section.name}
							</Nav.Link>
						))}
					</Nav>
				</StyledScrollspy>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default TopNavBar;
