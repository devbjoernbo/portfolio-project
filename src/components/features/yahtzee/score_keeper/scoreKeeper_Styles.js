import styled from 'styled-components';

export const StyledScoreKeeper = styled.div`
	position: absolute;
`;

export const StyledLeaderBoard = styled.div`
	height: 185px;
	position: relative;

	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	border-bottom: dashed 2px #673ab7;
`;

export const StyledLeaderBoardTable = styled.table`
	width: 250px;
	line-height: 25px;
	font-size: 15px;
`;

export const StyledLeaderBoardItem = styled.tr`
	text-align: left;
`;
export const StyledTableHeader = styled.th`
	text-align: left;
`;
export const StyledPlayersBox = styled.div`
	height: 472px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;
export const StyledPlayerDescription = styled.div`
	color: ${props => (props.current ? '#6c49b8' : '')};
	border-top: ${props => (props.index === 0 ? '' : 'solid 2px #6c49b8')};
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;
export const StyledName = styled.div`
	font-size: 20px;
	font-weight: 500;
`;
export const StyledPoints = styled.div`
	font-size: 25px;
	font-weight: 600;
`;
export const StyledLeaderBoardIndex = styled.td``;
export const StyledLeaderBoardTotalScore = styled.td``;
export const StyledLeaderBoardName = styled.td``;
