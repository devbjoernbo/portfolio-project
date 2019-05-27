import React, { useReducer, useEffect, useMemo } from 'react';

import {
	StyledTicTacToe,
	StyledGameContainer,
	StyledMoves,
	StyledMovesButton
} from './ticTacToe_Styles';

import Game from './game/Game';

const TicTacToe = () => {
	const {
		addMove,
		moves,
		handleOnStartNewGame,
		handleOnResetHighScore,
		gameConfig: [gameConfig]
	} = useTicTacToeGameSetup();

	const { status, currentGameView, scores } = gameConfig;

	return (
		<StyledTicTacToe>
			<StyledGameContainer>
				<Game
					currentGameView={currentGameView}
					addMove={addMove}
					status={status}
					moves={moves}
					scores={scores}
					handleOnStartNewGame={handleOnStartNewGame}
					handleOnResetHighScore={handleOnResetHighScore}
				/>
			</StyledGameContainer>
		</StyledTicTacToe>
	);
};

export default TicTacToe;

const useTicTacToeGameSetup = () => {
	const [gameConfig, dispatchGameConfig] = useReducer(
		ticTacToeReducer,
		initialGameConfig
	);
	console.log(gameConfig);
	const { history, stepNumber, isXNext } = gameConfig;

	const addMove = i => {
		if (
			calculateWinner(history[stepNumber].squares) ||
			history[stepNumber].squares[i]
		) {
			return;
		}

		dispatchGameConfig({ type: 'ADD_MOVE', payload: [history, i] });
	};

	const jumpTo = step => {
		dispatchGameConfig({ type: 'GO_PAST_MOVE', payload: step });
	};

	const handleOnStartNewGame = () => {
		dispatchGameConfig({ type: 'RESET_BOARD' });
	};

	const handleOnResetHighScore = () => {
		dispatchGameConfig({ type: 'RESET_WINNERS' });
	};

	const moves = history.map((step, move) => {
		const description = move ? `Gå til #${move}` : 'Gå til start';
		return (
			<StyledMoves key={move}>
				<StyledMovesButton onClick={() => jumpTo(move)}>
					{description}
				</StyledMovesButton>
			</StyledMoves>
		);
	});

	const updateGameStatus = useMemo(
		() => () => {
			const current = history[stepNumber];
			const winner = calculateWinner(current.squares);

			let status;
			if (winner) {
				status = 'Vinder: ' + winner;

				dispatchGameConfig({
					type: 'CHECK_GAME-STATUS',
					payload: status
				});
				dispatchGameConfig({ type: 'ADD_WINNER', payload: winner });
			} else {
				status = 'Næste spiller: ' + (isXNext ? 'X' : 'O');
				dispatchGameConfig({
					type: 'CHECK_GAME-STATUS',
					payload: status
				});
			}
		},
		[history, isXNext, stepNumber]
	);

	useEffect(() => {
		updateGameStatus();
	}, [updateGameStatus]);

	return {
		addMove,
		moves,
		handleOnStartNewGame,
		handleOnResetHighScore,
		gameConfig: [gameConfig, dispatchGameConfig]
	};
};

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}

const initialGameConfig = {
	history: [{ squares: Array(9).fill(null) }],
	scores: { x: 0, o: 0 },
	stepNumber: 0,
	isXNext: true,
	status: null,
	currentGameView: Array(9).fill(null)
};

const ticTacToeReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_WINNER':
			let newScores = state.scores;

			console.log(newScores);

			newScores[action.payload] = ++newScores[action.payload];

			return { ...state, scores: newScores };

		case 'RESET_BOARD':
			return {
				...state,
				history: [{ squares: Array(9).fill(null) }],
				stepNumber: 0,
				isXNext: true,
				status: null,
				currentGameView: Array(9).fill(null)
			};

		case 'RESET_WINNERS':
			return {
				...state,
				scores: { x: 0, o: 0 }
			};

		case 'ADD_MOVE':
			const newHistory = action.payload[0].slice(0, state.stepNumber + 1);
			const current = newHistory[newHistory.length - 1];
			//creating new array
			let newSquares = current.squares.slice(0);
			newSquares[action.payload[1]] = state.isXNext ? 'x' : 'o';

			return {
				...state,
				history: [...newHistory, { squares: newSquares }],
				stepNumber: newHistory.length,
				isXNext: !state.isXNext,
				currentGameView: newSquares
			};
		case 'GO_PAST_MOVE':
			return {
				...state,
				stepNumber: action.payload,
				isXNext: action.payload % 2 === 0,
				currentGameView: state.history[action.payload].squares
			};
		case 'CHECK_GAME-STATUS':
			return {
				...state,
				status: action.payload
			};
		default:
			throw new Error();
	}
};
