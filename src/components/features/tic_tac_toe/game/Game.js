import React from 'react';
import {
	StyledGame,
	StyledGameBoardContainer,
	StyledGameInfo,
	StyledStatus,
	StyledOrderedList
} from './game_Styles';

import Board from './board/Board';
import ScoreKeeper from './score_keeper/ScoreKeeper';

const Game = ({
	currentGameView,
	addMove,
	status,
	moves,
	scores,
	handleOnStartNewGame,
	handleOnResetHighScore
}) => {
	return (
		<StyledGame>
			<StyledGameBoardContainer>
				<Board squares={currentGameView} addMove={i => addMove(i)} />
				<ScoreKeeper
					scores={scores}
					handleOnStartNewGame={handleOnStartNewGame}
					handleOnResetHighScore={handleOnResetHighScore}
				/>
			</StyledGameBoardContainer>
			<StyledGameInfo>
				<StyledStatus>{status}</StyledStatus>
				<StyledOrderedList>{moves}</StyledOrderedList>
			</StyledGameInfo>
		</StyledGame>
	);
};

export default Game;
