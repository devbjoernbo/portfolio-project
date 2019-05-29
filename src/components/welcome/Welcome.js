import React from 'react';

import {
	StyledJumbotron,
	StyledRightContainer,
	StyledTitle,
	StyledDecriptionContainer,
	StyledDecription,
	StyledImage,
	StyledContactInfo,
	StyledEmail,
	StyledMobileNr
} from './welcome_Styles';
import img from './img/nicolaiBC.jpg';

const Welcome = () => {
	return (
		<StyledJumbotron>
			<StyledDecriptionContainer>
				<StyledTitle>Velkommen</StyledTitle>

				<StyledDecription>
					Jeg hedder Nicolai, er 24 år og dette er min portefølje
					hjemmeside, som jeg har lavet i forbindelse med min søgning
					efter arbejde som systemudvikler.
				</StyledDecription>
				<StyledDecription>
					Jeg har ikke specifikke præferencer til, om mine fremtidige
					arbejdsopgaver er indenfor front- eller back-end. Jeg har
					positive erfaringer med begge områder, og en interesse i, at
					blive bedre til at udvikle løsninger og løse
					problemstillinger, der relaterer sig til begge af områderne
					- og jeg er selvfølgelig villig til, at lægge en ekstra
					indsats i, at udvikle mine kompetencer på de områder, der
					ønskes, fra min kommende arbejdsgiver.
				</StyledDecription>
				<StyledDecription>
					Denne hjemmeside er programmeret med Node, Express. og
					React. Jeg har opsat hjemmesiden på Heroku med
					DNS-administration på One.com. CSS'en har jeg implementeret
					med styled-components, og til animationen har jeg brugt
					react-spring og react-transition-group. Jeg vil fremadrettet
					opdatere hjemmesiden jævnligt med nye features og
					portefølje-projekter, indtil det lykkes med jobsøgningen.
				</StyledDecription>
			</StyledDecriptionContainer>

			<StyledRightContainer>
				<StyledImage src={img} rounded />
				<StyledContactInfo>
					<StyledEmail>
						<strong>Email:</strong> nicolai.bjornbo@hotmail.com
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
