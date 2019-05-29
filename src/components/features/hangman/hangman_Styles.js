import styled, { css } from 'styled-components';
const sizes = {
	tablet: 1110,
	phone: 500,
	smallPhone: 330
};

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`;

	return acc;
}, {});

export const StyledHangman = styled.div`
	position: relative;
	width: 400px;
	color: black;
	text-align: center;

	${media.phone`width: 320px;  `}
	${media.smallPhone`width: 280px;  `}
`;

export const StyledLetterButton = styled.button`
	border: none;
	font-family: inherit;
	font-size: 1rem;
	cursor: pointer;
	width: 30px;
	margin: 5px 2px 2px 2px;
	letter-spacing: 1px;
	outline: none;
	background: #00bcd4;
	color: #fff;
	box-shadow: 0 6px #0097a7;
	border-radius: 5px;
	padding-top: 4px;

	:hover {
		background-color: #0097a7;
	}

	:disabled {
		background: #bdbdbd;
		color: #eeeeee;
		box-shadow: 0 6px #9e9e9e;
	}
`;
export const StyledHeader = styled.h1`
	font-size: 3rem;
	font-weight: 100;
	margin-bottom: 0.1em;
	margin-top: 0;
`;
export const StyledImg = styled.img`
	height: 200px;
	border: 10px solid white;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.27),
		0 0 40px rgba(0, 0, 0, 0.06) inset;
`;
export const StyledGuessesWrongParagraph = styled.p``;
export const StyledHangmanWordParagraph = styled.p`
	letter-spacing: 1em;
	margin: 0 -1em 0.2em 0;
	font-size: 2rem;

	${media.phone`font-size: 1.3rem; margin: 0 -0.5em 0.1em 0; `}
`;
export const StyledHangmanButtons = styled.p`
	text-align: center;
	display: inline-block;
	width: 250px;
	margin-top: 0;
`;
export const StyledResetButton = styled.button`
	border: none;
	font-family: inherit;
	font-size: 1rem;
	cursor: pointer;
	margin: 5px 2px 2px 2px;
	letter-spacing: 1px;
	outline: none;
	color: #fff;
	border-radius: 5px;
	padding-top: 4px;

	width: auto;
	display: block;
	margin-left: auto;
	margin-right: auto;
	background: #9c27b0;
	box-shadow: 0 6px #7b1fa2;

	:hover {
		background: #7b1fa2;
	}
`;
