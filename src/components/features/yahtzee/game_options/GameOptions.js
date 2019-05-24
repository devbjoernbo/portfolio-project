import React, { useContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

//styles
import {
	StyledContentTransition,
	StyledGameOptions
} from './gameOptions_Styles';

//components
import GameOptionsHeader from './game_options_header/GameOptionsHeader';
import GameOptionsSettings from './game_options_settings/GameOptionsSettings';

//context
import { YahtzeeContext } from '../yahtzee_Context';

const GameOptions = ({ animateContent, isExpanded }) => {
	const [, dispatchYahtzeeConfig] = useContext(YahtzeeContext);

	const [playersConfig, setPlayerConfig] = useState({
		numbPlayers: 1,
		players: [{ id: 0, name: '' }],
		version: 'normal',
		isNamesSubmitted: false
	});

	const handleOnRadioChange = event => {
		const { value } = event.target;

		setPlayerConfig(config => {
			return { ...config, version: value };
		});
	};

	const handleOnPlayerNamesSubmit = event => {
		event.preventDefault();
		setPlayerConfig(config => {
			return { ...config, isNamesSubmitted: !config.isNamesSubmitted };
		});

		dispatchYahtzeeConfig({
			type: 'GENERATE_PLAYERS',
			payload: [playersConfig.numbPlayers, playersConfig.players]
		});
		dispatchYahtzeeConfig({ type: 'START_GAME' });
		dispatchYahtzeeConfig({ type: 'RESET' });
	};

	const handlePlayerNumberChange = event => {
		const numbPlayers = event.target.value;
		setPlayerConfig(config => {
			return {
				...config,
				numbPlayers: numbPlayers,
				players: Array(Number(numbPlayers))
					.fill({})
					.map((x, index) => {
						return { id: index, name: '' };
					}),
				isNamesSubmitted: false
			};
		});
	};

	const handlePlayerNameChange = (event, index) => {
		let newPlayers = playersConfig.players.slice(0);
		newPlayers[index] = {
			...newPlayers[index],
			name: event.target.value
		};

		setPlayerConfig(config => {
			return {
				...config,
				players: newPlayers
			};
		});
	};

	return (
		<StyledGameOptions isExpanded={isExpanded}>
			<CSSTransition
				in={animateContent}
				classNames="display-content-view"
				timeout={2000}
			>
				<StyledContentTransition animateContent={animateContent}>
					<GameOptionsHeader />
					<GameOptionsSettings
						playersConfig={playersConfig}
						handleOnRadioChange={handleOnRadioChange}
						handleOnPlayerNamesSubmit={handleOnPlayerNamesSubmit}
						handlePlayerNameChange={handlePlayerNameChange}
						handlePlayerNumberChange={handlePlayerNumberChange}
					/>
				</StyledContentTransition>
			</CSSTransition>
		</StyledGameOptions>
	);
};

export default GameOptions;
