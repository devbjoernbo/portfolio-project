import React, { useContext } from 'react';
import {
	StyledGame,
	StyledScoreBoardController,
	StyledWinner
} from './game_Styles';
import GameHeader from './game_header/GameHeader';
import ScoreTable from './score_table/ScoreTable';
import { YahtzeeContext } from '../yahtzee_Context';

const Game = () => {
	const [yahtzeeConfig, dispatchYahtzeeConfig] = useContext(YahtzeeContext);

	const roll = () => {
		// roll dice whose indexes are in reroll
		dispatchYahtzeeConfig({ type: 'ROLL' });
	};

	const animateRoll = () => {
		dispatchYahtzeeConfig({ type: 'ANIMATE_ROLL' });
		setTimeout(roll, 1000);
	};
	const toggleLocked = index => {
		// toggle whether idx is in locked or not

		if (yahtzeeConfig.rollsLeft > 0 && !yahtzeeConfig.rolling) {
			dispatchYahtzeeConfig({ type: 'TOGGLE_LOCKED', payload: index });
		}
	};
	const doScore = (ruleName, ruleFn) => {
		// evaluate this ruleFn with the dice and score this rulename
		dispatchYahtzeeConfig({ type: 'CHECK_BONUS' });
		dispatchYahtzeeConfig({
			type: 'DO_SCORE',
			payload: [ruleName, ruleFn]
		});
		dispatchYahtzeeConfig({ type: 'CHECK_BONUS' });
		animateRoll();
	};

	return (
		<StyledGame>
			<GameHeader handleClick={toggleLocked} animateRoll={animateRoll} />
			<StyledScoreBoardController>
				{yahtzeeConfig.winner.id !== undefined &&
				yahtzeeConfig.players.length > 1 ? (
					<Winner
						name={
							yahtzeeConfig.players[yahtzeeConfig.winner.id].name
						}
					/>
				) : (
					<ScoreTable
						doScore={doScore}
						currentPlayer={
							yahtzeeConfig.players[
								yahtzeeConfig.currentPlayer.id
							]
						}
					/>
				)}
			</StyledScoreBoardController>
		</StyledGame>
	);
};

const Winner = ({ name }) => {
	return (
		<StyledWinner>
			<h2>The WINNER is!!!</h2>
			<h3>{name}</h3>
		</StyledWinner>
	);
};

export default Game;
