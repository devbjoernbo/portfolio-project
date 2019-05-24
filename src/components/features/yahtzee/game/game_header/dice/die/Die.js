import React from 'react';

import { StyledDie } from './die_Styles';

const Die = ({ handleClick, val, locked, index, rolling }) => {
	const handleDieClick = () => {
		handleClick(index);
	};
	const numberWords = ['one', 'two', 'three', 'four', 'five', 'six'];

	let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-4x `;
	if (locked) {
		classes += 'Die-locked ';
	}
	if (rolling && !locked) {
		classes += 'Die-rolling';
	}

	return <StyledDie className={classes} onClick={handleDieClick} />;
};

export default Die;
