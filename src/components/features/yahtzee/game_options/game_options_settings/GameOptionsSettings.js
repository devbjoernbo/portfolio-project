import React from 'react';
import {
	StyledOptionSection,
	StyledOptionSectionContainer
} from './gameOptionsSettings_Styles';
import NumberOfPlayersSettings from './settings/NumberOfPlayersSettings';
import NameOfPlayersSettings from './settings/NameOfPlayersSettings';

const GameOptionsSettings = ({
	playersConfig,
	handleOnRadioChange,
	handleOnPlayerNamesSubmit,
	handlePlayerNameChange,
	handlePlayerNumberChange
}) => {
	return (
		<StyledOptionSectionContainer>
			<StyledOptionSection>
				<NumberOfPlayersSettings
					playersConfig={playersConfig}
					handlePlayerNumberChange={handlePlayerNumberChange}
				/>
			</StyledOptionSection>
			<StyledOptionSection>
				<NameOfPlayersSettings
					playersConfig={playersConfig}
					handlePlayerNameChange={handlePlayerNameChange}
					handleOnPlayerNamesSubmit={handleOnPlayerNamesSubmit}
				/>
			</StyledOptionSection>
		</StyledOptionSectionContainer>
	);
};

export default GameOptionsSettings;
