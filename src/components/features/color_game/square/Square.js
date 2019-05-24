import React from 'react';
import { StyledSquare, StyledGuessingButton } from './square_Styles';
const Square = ({ color, dispatch }) => {
	return (
		<StyledSquare
			color={color}
			onClick={() =>
				dispatch({
					type: 'GUESS',
					payload: color
				})
			}
		>
			<StyledGuessingButton>
				<i>Try this?</i>
			</StyledGuessingButton>
		</StyledSquare>
	);
};

export default Square;
