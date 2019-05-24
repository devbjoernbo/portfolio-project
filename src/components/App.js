import React from 'react';
import {
	StyledApp,
	StyledSection,
	StyledSectionHeader,
	StyledSectionContent,
	GlobalStyle
} from './app_Styles';

import Navbar from './Navbar';
import Welcome from './welcome/Welcome';

//sections
import Biografi from './sections/biografi/Biografi';
import Features from './sections/features/Features';

// Routes Config
const sections = [
	{
		id: 'section-biografi',
		name: 'Biografi',
		component: <Biografi />
	},
	{
		id: 'section-features',
		name: 'Features',
		exact: true,
		component: <Features />
	},
	{
		id: 'section-projects',
		name: 'Projekter'
	}
];

const App = () => {
	return (
		<StyledApp>
			<GlobalStyle />
			<Navbar sections={sections} />
			<Welcome />
			{sections.map((section, index) => (
				<StyledSection key={section.id} id={section.id}>
					<StyledSectionHeader>{section.name}</StyledSectionHeader>
					<StyledSectionContent>
						{section.component}
					</StyledSectionContent>
				</StyledSection>
			))}
		</StyledApp>
	);
};

export default App;
