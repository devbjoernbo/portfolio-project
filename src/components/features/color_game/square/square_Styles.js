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

export const StyledSquare = styled.div`
	position: relative;
	width: 140px;
	height: 140px;

	margin: 10px;

	background-color: ${props => props.color};

	${media.smallPhone`	width: 130px; left: height: 130px;`}
`;

export const StyledGuessingButton = styled.button`
	width: 100px;
	height: 30px;
	position: absolute;
	display: inline-block;
	border: solid white 0.5px;
	color: white;
	border-radius: 2em;
	top: 50%;
	left: 50%;
	margin-left: -50px;
	margin-top: -15px;
	line-height: 30px;
	text-transform: uppercase;
	opacity: 0;
	background-color: transparent;
	font-weight: 700;

	${StyledSquare}:hover & {
		opacity: 1;
		outline: none;
	}
`;
