import React from 'react';
import {
	StyledScoreKeeper,
	StyledControlButtons,
	StyledControlButton,
	StyledScoreBox,
	StyledScoreItem
} from './scoreKeeper_Styles';

const ScoreKeeper = ({
	handleOnStartNewGame,
	handleOnResetHighScore,
	scores
}) => {
	return (
		<StyledScoreKeeper>
			<StyledControlButtons>
				<StyledControlButton onClick={handleOnStartNewGame}>
					Start nyt spil
				</StyledControlButton>
				<StyledControlButton onClick={handleOnResetHighScore}>
					Reset highscore
				</StyledControlButton>
			</StyledControlButtons>
			<StyledScoreBox>
				<StyledScoreItem>X: {scores.x}</StyledScoreItem>
				<StyledScoreItem>O: {scores.o}</StyledScoreItem>
			</StyledScoreBox>
		</StyledScoreKeeper>
	);
};

export default ScoreKeeper;
