import React, { useReducer, useEffect } from 'react';

import {
	StyledColorContainer,
	StyledGameControlContainer,
	StyledButton,
	StyledSquareContainer,
	StyledWonSignature
} from './colorGame_Styles';
//import helperFunctions

//import components
import Square from './square/Square';
import GuessThisColor from './guess_this_color/GuessThisColor';

const ColorGame = () => {
	const [colorGameConfig, dispatchColorGameConfig] = useReducer(
		colorGameReducer,
		{
			colors: [],
			pickedColor: { RGB: null, numbers: [] },
			numberColors: 6,
			status: 'start'
		}
	);

	const { colors, pickedColor, numberColors, status } = colorGameConfig;

	useEffect(() => {
		if (status === 'start') {
			const generatedColors = generateRandomColors(numberColors);
			const colorToGuess = generateGuessColor(generatedColors);

			dispatchColorGameConfig({
				type: 'INITIATE',
				payload: [generatedColors, colorToGuess]
			});
		}
	}, [numberColors, status]);

	return (
		<StyledColorContainer>
			<StyledGameControlContainer>
				<GuessThisColor color={pickedColor} />
				<StyledButton
					onClick={() =>
						dispatchColorGameConfig({
							type: 'RESET'
						})
					}
				>
					Reset
				</StyledButton>
			</StyledGameControlContainer>

			<StyledSquareContainer>
				{status !== 'won' ? (
					colors.map(color => (
						<Square
							key={color.id}
							color={color.RGB}
							dispatch={dispatchColorGameConfig}
						/>
					))
				) : (
					<StyledWonSignature>You WON!!!!</StyledWonSignature>
				)}
			</StyledSquareContainer>
		</StyledColorContainer>
	);
};

export default ColorGame;

const colorGameReducer = (state, action) => {
	switch (action.type) {
		case 'INITIATE':
			return {
				...state,
				colors: action.payload[0],
				pickedColor: action.payload[1],
				status: 'started'
			};

		case 'GUESS':
			if (action.payload === state.pickedColor.RGB) {
				const colors = state.colors.map(color => {
					return {
						...color,
						RGB: action.payload.RGB,
						colors: action.payload.colors
					};
				});

				return { ...state, colors: colors, status: 'won' };
			} else {
				const newColors = state.colors.map(color => {
					if (action.payload === color.RGB) {
						return {
							...color,
							RGB: 'transparent',
							colors: [],
							isDefault: true
						};
					}

					return color;
				});

				return { ...state, colors: newColors };
			}

		case 'RESET':
			return { ...state, status: 'start' };
		default:
			throw new Error();
	}
};

// Generate random number, and match that number to a color, and return that color.
const generateGuessColor = colors => {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

// Generate Color-array, based on choosen number
function generateRandomColors(num) {
	let arr = [];

	for (let i = 0; i < num; i++) {
		const { RGB, numbers } = randomColor();
		arr.push({ id: i, RGB, numbers });
	}

	return arr;
}

// Generate a random RGB color
function randomColor() {
	//pick a "red" from 0 - 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	let b = Math.floor(Math.random() * 256);
	return {
		RGB: 'rgb(' + r + ', ' + g + ', ' + b + ')',
		numbers: [r, g, b],
		isDefault: false
	};
}
