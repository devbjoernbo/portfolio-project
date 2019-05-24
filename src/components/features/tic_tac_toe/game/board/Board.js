import React from 'react';
import { StyledBoard, StyledBoardRow } from './board_Styles';

import Square from './square/Square';

const Board = ({ squares, addMove }) => {
	const renderSquares = i => {
		return <Square value={squares[i]} addMove={() => addMove(i)} />;
	};

	return (
		<StyledBoard>
			<StyledBoardRow>
				{renderSquares(0)}
				{renderSquares(1)}
				{renderSquares(2)}
			</StyledBoardRow>
			<StyledBoardRow>
				{renderSquares(3)}
				{renderSquares(4)}
				{renderSquares(5)}
			</StyledBoardRow>
			<StyledBoardRow>
				{renderSquares(6)}
				{renderSquares(7)}
				{renderSquares(8)}
			</StyledBoardRow>
		</StyledBoard>
	);
};

export default Board;
