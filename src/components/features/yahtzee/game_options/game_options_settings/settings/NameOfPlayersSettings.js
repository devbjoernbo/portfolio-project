import React from 'react';
import {
	StyledOptionSectionHeader,
	StyledNameRow,
	StyledNameInput,
	StyledStartGameButton
} from './settings_Styles';

const NameOfPlayersSettings = ({
	playersConfig,
	handlePlayerNameChange,
	handleOnPlayerNamesSubmit
}) => {
	const playerNameInputFields = () => {
		let inputFields = [];
		for (let i = 0; i < playersConfig.numbPlayers; i++) {
			inputFields = [
				...inputFields,
				<StyledNameRow key={i}>
					<StyledNameInput
						key={i}
						type="text"
						onChange={event => handlePlayerNameChange(event, i)}
						value={playersConfig.players[i].name}
						placeholder={`Indsæt navn for spiller nr: ${i + 1}`}
					/>
				</StyledNameRow>
			];
		}

		return inputFields;
	};

	return (
		<React.Fragment>
			<StyledOptionSectionHeader>
				Name of players
			</StyledOptionSectionHeader>

			<form onSubmit={handleOnPlayerNamesSubmit}>
				{playerNameInputFields()}
				<StyledStartGameButton type="submit">
					Start Game
				</StyledStartGameButton>
			</form>
		</React.Fragment>
	);
};

export default NameOfPlayersSettings;
