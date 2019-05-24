import React from 'react';
import { StyledSquare } from './square_Styles';

const Square = ({ value, addMove }) => {
	return <StyledSquare onClick={addMove}>{value}</StyledSquare>;
};

export default Square;
