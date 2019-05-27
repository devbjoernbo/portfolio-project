import styled, { css } from 'styled-components';
const sizes = {
	tablet: 1110,
	phone: 500
};

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`;

	return acc;
}, {});

export const StyledColorContainer = styled.div`
	position: relative;

	width: 400px;

	height: 690px;
	left: calc(50% - 200px);

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-items: center;

	align-content: center;
	justify-content: center;

	${media.phone`width: 360px; left: calc(50% - 180px);`}
`;

export const StyledGameControlContainer = styled.div`
	display: flex;
	flex-direction: row;

	padding: 30px 0 30px 0;
	width: 100%;

	border-radius: 1em 1em 0 0;

	justify-content: space-around;
	align-items: center;
	justify-items: center;

	background-color: white;
`;

export const StyledButton = styled.button`
	width: 100px;
	height: 30px;

	border: solid #6c49b8 0.5px;
	border-radius: 2em;

	line-height: 30px;
	color: #6c49b8;
	text-transform: uppercase;

	:hover {
		background-color: #6c49b8;
		color: white;
		outline: none;
	}

	:focus {
		outline: 0;
	}

	${media.phone`width: 80px; font-size: 13px;`}
`;

export const StyledSquareContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	background-color: white;

	padding-bottom: 30px;

	border-radius: 0 0 1em 1em;
`;

export const StyledWonSignature = styled.div`
	background-color: white;
	font-size: 50px;
	text-transform: uppercase;

	color: green;
`;
