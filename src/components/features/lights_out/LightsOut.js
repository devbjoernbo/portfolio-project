import React, { useState, useEffect } from 'react';
import {
	StyledLightsOut,
	StyledTableRow,
	StyledTableItem,
	StyledBoardTable,
	StyledBoardTableBody,
	StyledWinnerWrapper,
	StyledSpanOrange,
	StyledSpanBlue,
	StyledBoardTitle,
	StyledDivOrange,
	StyledDivBlue
} from './lightsOut_Styles';

const nRows = 5;
const nCols = 5;
const chanceLightStartsOn = 0.25;

const LightsOut = () => {
	const [lightsOutConfig, setLightsOutConfig] = useState({
		hasWon: false,
		board: []
	});

	const { hasWon, board } = lightsOutConfig;

	/** handle changing a cell: update board & determine if winner */
	const flipCellsAround = coord => {
		let newBoard = board;
		let [y, x] = coord.split('-').map(Number);

		function flipCell(y, x) {
			// if this coord is actually on board, flip it

			if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
				newBoard[y][x] = !newBoard[y][x];
			}
		}

		flipCell(y, x); //Flip initial cell
		flipCell(y, x - 1); //flip left
		flipCell(y, x + 1); //flip right
		flipCell(y - 1, x); //flip below
		flipCell(y + 1, x); //flip above

		// win when every cell is turned off

		let newHasWon = newBoard.every(row => row.every(cell => !cell));

		setLightsOutConfig(conf => {
			return { ...conf, board: newBoard, hasWon: newHasWon };
		});
	};
	/** Render game board or winning message. */
	const makeTable = () => {
		let tblBoard = [];
		for (let y = 0; y < nRows; y++) {
			let row = [];
			for (let x = 0; x < nCols; x++) {
				let coord = `${y}-${x}`;
				row.push(
					<StyledTableItem
						key={coord}
						className={board[y][x] ? 'Cell Cell-lit' : 'Cell'}
						onClick={() => flipCellsAround(coord)}
					/>
				);
			}
			tblBoard.push(<StyledTableRow key={y}>{row}</StyledTableRow>);
		}
		return (
			<StyledBoardTable>
				<StyledBoardTableBody>{tblBoard}</StyledBoardTableBody>
			</StyledBoardTable>
		);
	};

	useEffect(() => {
		/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
		const createBoard = () => {
			let board = [];

			for (let y = 0; y < nRows; y++) {
				let row = [];
				for (let x = 0; x < nCols; x++) {
					row.push(Math.random() < chanceLightStartsOn);
				}
				board.push(row);
			}
			return board;
		};

		setLightsOutConfig(conf => {
			return { ...conf, board: createBoard() };
		});
	}, []);

	return (
		<StyledLightsOut>
			{hasWon ? (
				<StyledWinnerWrapper>
					<StyledSpanOrange>YOU</StyledSpanOrange>
					<StyledSpanBlue>WIN!</StyledSpanBlue>
				</StyledWinnerWrapper>
			) : (
				<div>
					<StyledBoardTitle>
						<StyledDivOrange>Lights</StyledDivOrange>
						<StyledDivBlue>Out</StyledDivBlue>
					</StyledBoardTitle>
					{board.length > 0 ? makeTable() : ''}
				</div>
			)}
		</StyledLightsOut>
	);
};

export default LightsOut;
