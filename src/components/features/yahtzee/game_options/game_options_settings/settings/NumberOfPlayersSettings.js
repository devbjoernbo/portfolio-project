import React from 'react';
import {
	StyledLabel,
	StyledSelect,
	StyledOptionSectionHeader
} from './settings_Styles';

const NumberOfPlayersSettings = ({
	playersConfig,
	handlePlayerNumberChange
}) => {
	return (
		<React.Fragment>
			<StyledOptionSectionHeader>
				Number of players
			</StyledOptionSectionHeader>
			<StyledLabel>
				Select number of players:
				<StyledSelect
					value={playersConfig.numbPlayers}
					onChange={handlePlayerNumberChange}
				>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
				</StyledSelect>
			</StyledLabel>
		</React.Fragment>
	);
};

export default NumberOfPlayersSettings;
