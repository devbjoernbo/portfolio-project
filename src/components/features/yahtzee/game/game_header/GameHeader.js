import React, { useContext } from 'react';
import { YahtzeeContext } from '../../yahtzee_Context';
import {
	StyledGameHeader,
	StyledGameTitle,
	StyledDiceContainer,
	StyledGameButtonContainer,
	StyledGameButton
} from './gameHeader_Styles';
import Dice from './dice/Dice';

const GameHeader = ({ handleClick, animateRoll }) => {
	const [yahtzeeConfig] = useContext(YahtzeeContext);

	const { locked, rolling, rollsLeft } = yahtzeeConfig;

	return (
		<StyledGameHeader>
			<StyledGameTitle>Yahtzee</StyledGameTitle>
			<StyledDiceContainer>
				<Dice handleClick={handleClick} />
				<StyledGameButtonContainer>
					<StyledGameButton
						disabled={
							locked.every(x => x) || rollsLeft === 0 || rolling
						}
						onClick={animateRoll}
					>
						<DisplayRollInfo rollsLeft={rollsLeft} />
					</StyledGameButton>
				</StyledGameButtonContainer>
			</StyledDiceContainer>
		</StyledGameHeader>
	);
};
const DisplayRollInfo = ({ rollsLeft }) => {
	const messages = [
		'0 Rolls Left',
		'1 Roll Left',
		'2 Rolls Left',
		'Starting Round'
	];

	return messages[rollsLeft];
};

export default GameHeader;