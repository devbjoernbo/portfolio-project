import React, { useState } from 'react';

import img0 from './img/0.jpg';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import {
	StyledHangman,
	StyledLetterButton,
	StyledHeader,
	StyledImg,
	StyledGuessesWrongParagraph,
	StyledHangmanWordParagraph,
	StyledHangmanButtons,
	StyledResetButton
} from './hangman_Styles';

function randomWord() {
	var DANISH_WORDS = [
		'object',
		'array',
		'symbol',
		'string',
		'testing',
		'react',
		'types',
		'classes',
		'functions',
		'events',
		'loops',
		'promises',
		'modules'
	];
	const randomNr = Math.round(Math.random() * 12);

	return DANISH_WORDS[randomNr];
}
const images = [img0, img1, img2, img3, img4, img5, img6];
const maxWrong = 6;

const Hangman = () => {
	const [hangmanConfig, setHangManConfig] = useState({
		nWrong: 0,
		guessed: new Set(),
		answer: randomWord()
	});

	const { nWrong, guessed, answer } = hangmanConfig;

	const reset = () => {
		setHangManConfig(conf => {
			return {
				nWrong: 0,
				guessed: new Set(),
				answer: randomWord()
			};
		});
	};
	/** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
	const guessedWord = () => {
		return answer.split('').map(ltr => (guessed.has(ltr) ? ltr : '_'));
	};

	/** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
	const handleGuess = evt => {
		let ltr = evt.target.value;
		setHangManConfig(conf => {
			return {
				...conf,
				guessed: conf.guessed.add(ltr),
				nWrong: conf.nWrong + (conf.answer.includes(ltr) ? 0 : 1)
			};
		});
	};

	/** generateButtons: return array of letter buttons to render */
	const generateButtons = () => {
		return 'abcdefghijklmnopqrstuvwxyzæøå'.split('').map(ltr => (
			<StyledLetterButton
				key={ltr}
				value={ltr}
				onClick={handleGuess}
				disabled={guessed.has(ltr)}
			>
				{ltr}
			</StyledLetterButton>
		));
	};

	const gameOver = nWrong >= maxWrong;
	const isWinner = guessedWord().join('') === answer;
	const altText = `${nWrong}/${maxWrong} gæt`;
	let gameState = generateButtons();
	if (isWinner) gameState = 'Du vandt!';
	if (gameOver) gameState = 'Du tabte!';

	return (
		<StyledHangman>
			<StyledHeader>Hangman</StyledHeader>
			<StyledImg src={images[nWrong]} alt={altText} />
			<StyledGuessesWrongParagraph>
				Forkerte gæt: {nWrong}
			</StyledGuessesWrongParagraph>
			<StyledHangmanWordParagraph>
				{!gameOver ? guessedWord() : answer}
			</StyledHangmanWordParagraph>
			<StyledHangmanButtons>{gameState}</StyledHangmanButtons>
			<StyledResetButton onClick={reset}>Restart?</StyledResetButton>
		</StyledHangman>
	);
};

export default Hangman;
