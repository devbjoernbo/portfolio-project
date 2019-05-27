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
export const StyledTicTacToe = styled.div`
	position: relative;
	height: 500px;
	width: 450px;
	text-align: center;

	${media.phone`width: 360px;`}
`;

export const StyledGameContainer = styled.div`
	position: absolute;
	height: 470px;
	width: 450px;
	top: calc(50% - 250px);
	left: calc(50% - 230px);

	display: flex;
	flex-direction: row;

	background-color: white;
	border-radius: 0.5rem;
	text-align: center;

	${media.phone`width: 360px; left: calc(50% - 180px);`}
`;

export const StyledMoves = styled.li`
	height: 30px;
	margin-bottom: 8px;
`;

export const StyledMovesButton = styled.button`
	width: 130px;
	height: 20px;
	font-size: 13px;
	line-height: 13px;
`;
