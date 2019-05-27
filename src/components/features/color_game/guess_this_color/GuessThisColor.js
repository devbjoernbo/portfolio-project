import React from 'react';
import { StyledGuessColor } from './guessThisColor_Styles';
const GuessThisColor = ({ color }) => {
	const RgbOutput = color.numbers.join(':');

	return (
		<StyledGuessColor>
			Gæt denne RGB-farve:{' '}
			<strong>
				<i>({RgbOutput})</i>
			</strong>
		</StyledGuessColor>
	);
};

export default GuessThisColor;
