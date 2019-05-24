import styled from 'styled-components';

export const StyledTicTacToe = styled.div`
	position: relative;
	height: 500px;
	width: 450px;
	text-align: center;
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
	border-radius: 2rem;
	text-align: center;
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
