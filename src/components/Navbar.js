import React from 'react';

import { StyledNavbar, StyledScrollSpyLink, StyledName } from './navbar_Styles';
import Scrollspy from 'react-scrollspy';

const FixedNavBar = ({ sections }) => {
	const cleanedIDSections = sections.map(section => section.id);

	return (
		<StyledNavbar>
			<StyledName>Nicolai Bjørnbo Christensen</StyledName>
			<Scrollspy items={cleanedIDSections}>
				{sections.map(section => (
					<StyledScrollSpyLink
						key={section.id}
						href={`#${section.id}`}
					>
						{section.name}
					</StyledScrollSpyLink>
				))}
			</Scrollspy>
		</StyledNavbar>
	);
};

export default FixedNavBar;
