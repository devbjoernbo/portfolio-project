import React from 'react';
import {
	StyledApp,
	StyledSection,
	StyledSectionHeader,
	StyledSectionContent,
	GlobalStyle
} from './app_Styles';

import TopNavbar from './TopNavbar';
import Welcome from './welcome/Welcome';

//sections
import Uddannelse from './sections/uddannelse/Uddannelse';
import Features from './sections/features/Features';

// Routes Config
const sections = [
	{
		id: 'section-uddannelse',
		name: 'Uddannelse',
		component: <Uddannelse />
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
		<React.Fragment>
			<GlobalStyle />
			<TopNavbar sections={sections} />
			<StyledApp>
				<Welcome />
				{sections.map((section, index) => (
					<StyledSection key={section.id} id={section.id}>
						<StyledSectionHeader>
							{section.name}
						</StyledSectionHeader>
						<StyledSectionContent>
							{section.component}
						</StyledSectionContent>
					</StyledSection>
				))}
			</StyledApp>
		</React.Fragment>
	);
};

export default App;
