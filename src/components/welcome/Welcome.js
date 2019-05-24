import React, { useState, useCallback } from 'react';
import { useTransition } from 'react-spring';
import {
	StyledJumbotron,
	StyledLeftContainer,
	StyledRightContainer,
	StyledTitle,
	StyledDecriptionContainer,
	StyledDecription,
	StyledDetailsButton,
	StyledImage,
	StyledSlide,
	StyledContactInfo,
	StyledEmail,
	StyledMobileNr
} from './welcome_Styles';
import img from './img/nicolaiBC.jpg';

const Welcome = () => {
	const [index, setActive] = useState(0);
	const onClick = useCallback(() => setActive(state => (state + 1) % 2), []);

	const transitions = useTransition(index, div => div, {
		from: { opacity: 0, display: 'none', transform: 'translateX(100%)' },
		enter: { opacity: 1, display: 'block', transform: 'translateX(0)' },
		leave: { opacity: 0, display: 'none', transform: 'translateX(100%)' }
	});

	return (
		<StyledJumbotron>
			<StyledLeftContainer>
				{transitions.map(({ item, props: transition, key }) => {
					const slide = slides[item];

					return (
						<StyledSlide key={key} style={transition}>
							{slide.component}
						</StyledSlide>
					);
				})}

				<StyledDetailsButton onClick={onClick}>
					{index === 1 ? 'Gå til start' : 'Se mere'}
				</StyledDetailsButton>
			</StyledLeftContainer>

			<StyledRightContainer>
				<StyledImage src={img} rounded />
				<StyledContactInfo>
					<StyledEmail>
						<strong>Email:</strong> nicolai.bjornbo@gmail.com
					</StyledEmail>
					<StyledMobileNr>
						<strong>Mobil:</strong> 60790233
					</StyledMobileNr>
				</StyledContactInfo>
			</StyledRightContainer>
		</StyledJumbotron>
	);
};

export default Welcome;

const ShowSecondPage = () => (
	<StyledDecriptionContainer>
		<h5>Starten på programmeringen</h5>
		<StyledDecription>
			Min interesse for programmering startede ret sent i mit
			uddannelsesforløb. Jeg har igennem hele folkeskolen og gymniasiet
			villet være revisor, da jeg har en særlig interesse for matematik og
			økonomi. Denne karrieredrøm ændrende sig hurtigt, da jeg begyndte på
			CBS, og startede med programmeringsundervisningen.
		</StyledDecription>

		<StyledDecription>
			Det tog ikke lang tid på CBS før jeg fandt ud af, at kurser på
			nettet, Youtube-videoer og Google-søgninger, var mere effektive og
			tilgængelige læringskilder, når det omhandlende
			programmeringslæringen. Jeg deltog dog stadig i de
			programmeringsrelaterede eksamniner, hvor jeg bl.a. fik 10 for et
			eksamensprojekt programmeret med GWT - Java, MySQL og JDBC.
			Projektet blev lavet i grupper, men vi aftalte, at de stod for
			rapporten og jeg stod for programmeringen.
		</StyledDecription>
		<StyledDecription>
			Jeg stoppede på CBS efter andet semester, som er lidt under et år
			siden, hvorefter jeg selv fortsatte læringen. Målet har sidenhen
			været, at skabe nogle kompetencer, der vil gøre det muligt at
			besidde et job som programmør.
		</StyledDecription>
		<StyledDecription>
			Jeg startede processen med små kurser i HTML, CSS og JavaScript, der
			hurtigt udviklede sig til en bredere læringsplan, der inkluderede
			NodeJS, ExpressJS og MongoDB mm. - og for omkring et halvt år siden,
			begyndte jeg på at lære React, som udgør den stack jeg programmere
			med idag - MongoDB, Express, React og Node.
		</StyledDecription>
	</StyledDecriptionContainer>
);

const ShowFirstPage = () => (
	<StyledDecriptionContainer>
		<StyledTitle>Velkommen</StyledTitle>
		<StyledDecription>
			Jeg hedder Nicolai og er 24 år. Dette er min portefølje hjemmeside,
			som jeg har lavet i forbindelse med min søgning efter et arbejde som
			softwareudvikler.
		</StyledDecription>

		<StyledDecription>
			Jeg har som mål, at blive den bedste programmør, jeg kan blive.
			Dette forudsætter, at jeg hele tiden fokusere på at lære, og finde
			mere effektive måder, at gøre tingene på. Jeg er meget åben for nye
			teknologivalg.
		</StyledDecription>

		<StyledDecription>
			Jeg har ikke specifikke præferencer til, om mine fremtidige
			arbejdsopgaver er indenfor front- eller back-end. Jeg har positive
			erfaringer med begge områder, og en interesse i, at lære mere og
			blive bedre til at løse problemstillingerne, der relatere sig til
			begge af områderne - og jeg er selvfølgelig villig til at lære, hvad
			der kræves, for, at skabe størst mulig værdi, der, hvor min
			fremtidige arbejdsgiver mener, at de har brug for mine kompetencer.
		</StyledDecription>
		<StyledDecription>
			Denne hjemmeside er programmeret med NodeJS, ExpressJS og ReactJS.
			Derudover har jeg brugt Styled-Components til CSS implementationen,
			samt react-spring og react-transition-group til animationen. Jeg vil
			opdatere hjemmesiden jævnligt med nye features og
			portefølje-projekter, indtil det lykkes med jobsøgningen. Jeg er i
			gang med det første projekt, som bliver en kommerciel hjemmeside
			vedr. almindeligt produktsalg.
		</StyledDecription>
	</StyledDecriptionContainer>
);

const slides = [
	{ id: 0, component: <ShowFirstPage /> },
	{ id: 2, component: <ShowSecondPage /> }
];
