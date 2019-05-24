import React, { useContext } from 'react';
import Die from './die/Die';
import { YahtzeeContext } from '../../../yahtzee_Context';
import { StyledDice } from './dice_Styles';

const Dice = ({ handleClick }) => {
	const [yahtzeeConfig] = useContext(YahtzeeContext);

	const { dice, locked, rolling } = yahtzeeConfig;
	return (
		<StyledDice>
			{dice.map((die, index) => (
				<Die
					handleClick={handleClick}
					val={die}
					locked={locked[index]}
					index={index}
					key={index}
					rolling={rolling}
				/>
			))}
		</StyledDice>
	);
};

export default Dice;
