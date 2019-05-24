import React, { useReducer, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
	StyledYatzee,
	StyledDetailsContainer,
	StyledExpandedController
} from './yahtzee_Styles';

import Game from './game/Game';
import GameOptions from './game_options/GameOptions';
import ScoreKeeper from './score_keeper/ScoreKeeper';
import { YahtzeeContext } from './yahtzee_Context';

const Yahtzee = () => {
	const [yahtzeeConfig, dispatchYahtzeeConfig] = useReducer(
		yahtzeeReducer,
		initialState
	);

	useEffect(() => {
		const checkWinner = () => {
			dispatchYahtzeeConfig({ type: 'CHECK_WINNER' });
		};

		checkWinner();
	}, [yahtzeeConfig.players]);

	return (
		<StyledYatzee>
			<YahtzeeContext.Provider
				value={[yahtzeeConfig, dispatchYahtzeeConfig]}
			>
				<Game />

				<StyledDetailsContainer>
					<TransitionGroup component={StyledExpandedController}>
						<CSSTransition
							key={yahtzeeConfig.gameStarted}
							classNames="showed-expanded-feature"
							timeout={2000}
						>
							{yahtzeeConfig.gameStarted ? (
								<ScoreKeeper />
							) : (
								<GameOptions />
							)}
						</CSSTransition>
					</TransitionGroup>
				</StyledDetailsContainer>
			</YahtzeeContext.Provider>
		</StyledYatzee>
	);
};

export default Yahtzee;

const NUM_DICE = 5;
const NUM_ROLLS = 3;

const initialState = {
	numbPlayers: 1,
	dice: Array.from({ length: NUM_DICE }).map(x => 5),
	gameStarted: false,
	locked: Array(NUM_DICE).fill(false),
	rollsLeft: NUM_ROLLS,
	rolling: false,
	currentPlayer: { id: 0 },
	winner: { id: undefined },
	players: [
		{
			id: 0,
			name: '',
			totalScore: 0,
			upperBonus: 0,
			scores: {
				ones: undefined,
				twos: undefined,
				threes: undefined,
				fours: undefined,
				fives: undefined,
				sixes: undefined,
				threeOfKind: undefined,
				fourOfKind: undefined,
				fullHouse: undefined,
				smallStraight: undefined,
				largeStraight: undefined,
				yahtzee: undefined,
				chance: undefined
			}
		}
	]
};

const yahtzeeReducer = (state, action) => {
	let newPlayers;

	switch (action.type) {
		case 'CHECK_WINNER':
			let playersTotalScore;
			let winner = undefined;

			let usedAllScores = state.players.map((player, index) => {
				let playerScores = [];
				for (let key in player.scores) {
					let used =
						player.scores[key] || player.scores[key] === 0
							? true
							: false;

					playerScores = [...playerScores, used];
				}

				return playerScores.every(x => x);
			});

			if (usedAllScores.every(x => x)) {
				playersTotalScore = state.players.map(player => {
					return player.totalScore;
				});

				let calculatedWinnerIndex = playersTotalScore.indexOf(
					Math.max(...playersTotalScore)
				);

				winner = calculatedWinnerIndex;
			}

			if (winner !== undefined) {
				return {
					...state,
					rollsLeft: NUM_ROLLS,
					locked: Array(NUM_DICE).fill(false),
					winner: { id: winner },
					gameStarted: false
				};
			}

			return {
				...state
			};

		case 'GENERATE_PLAYERS':
			newPlayers = action.payload[1];
			newPlayers = newPlayers.map(player => {
				return {
					id: player.id,
					name: player.name,
					totalScore: 0,
					upperBonus: 0,
					scores: {
						ones: undefined,
						twos: undefined,
						threes: undefined,
						fours: undefined,
						fives: undefined,
						sixes: undefined,
						threeOfKind: undefined,
						fourOfKind: undefined,
						fullHouse: undefined,
						smallStraight: undefined,
						largeStraight: undefined,
						yahtzee: undefined,
						chance: undefined
					}
				};
			});

			return {
				...state,
				players: newPlayers,
				numbPlayers: Number(action.payload[0])
			};

		case 'START_GAME':
			return { ...state, gameStarted: true, winner: { id: undefined } };

		case 'ANIMATE_ROLL':
			return { ...state, rolling: true };

		case 'ROLL':
			return {
				...state,
				dice: state.dice.map((die, index) =>
					state.locked[index] ? die : Math.ceil(Math.random() * 6)
				),
				locked:
					state.rollsLeft > 1
						? state.locked
						: Array(NUM_DICE).fill(true),
				rollsLeft: state.rollsLeft - 1,
				rolling: false
			};
		case 'TOGGLE_LOCKED':
			return {
				...state,
				locked: [
					...state.locked.slice(0, action.payload),
					!state.locked[action.payload],
					...state.locked.slice(action.payload + 1)
				]
			};
		case 'DO_SCORE':
			newPlayers = state.players.slice(0);
			let currentPlayerID = state.currentPlayer.id;
			let totalScore = 0;
			let i = currentPlayerID;
			i++;

			//mani players array in currentPlayer
			newPlayers[currentPlayerID].scores = {
				...newPlayers[currentPlayerID].scores,
				[action.payload[0]]: action.payload[1](state.dice)
			};

			//multiplies currentPlayers scores
			for (let key in newPlayers[currentPlayerID].scores) {
				if (newPlayers[currentPlayerID].scores[key])
					totalScore += newPlayers[currentPlayerID].scores[key];
			}

			newPlayers[currentPlayerID].totalScore = totalScore;

			// calc currentPlayer
			if (i >= state.players.length) {
				currentPlayerID = i % state.players.length;
			} else {
				currentPlayerID++;
			}

			return {
				...state,
				players: newPlayers,
				currentPlayer: { id: currentPlayerID },
				rollsLeft: NUM_ROLLS,
				locked: Array(NUM_DICE).fill(false)
			};

		case 'CHECK_BONUS':
			let upperScores = [
				'ones',
				'twos',
				'threes',
				'fours',
				'fives',
				'sixes'
			];
			newPlayers = state.players.slice(0);

			let totalUpperScore = 0;

			for (let key of upperScores) {
				if (
					newPlayers[state.currentPlayer.id].scores[key] !== undefined
				) {
					totalUpperScore +=
						newPlayers[state.currentPlayer.id].scores[key];
				}
			}

			newPlayers[state.currentPlayer.id].upperBonus = totalUpperScore;

			if (newPlayers[state.currentPlayer.id].upperBonus >= 63) {
				newPlayers[state.currentPlayer.id].totalScore += 50;
			}

			return { ...state, players: newPlayers };
		case 'RESET':
			return {
				...state,
				rollsLeft: NUM_ROLLS,
				locked: Array(NUM_DICE).fill(false)
			};

		case 'RESET_GAME':
			return {
				numbPlayers: 1,
				dice: Array.from({ length: NUM_DICE }).map(x => 5),
				gameStarted: false,
				locked: Array(NUM_DICE).fill(false),
				rollsLeft: NUM_ROLLS,
				rolling: false,
				currentPlayer: { id: 0 },
				winner: { id: undefined },
				players: [
					{
						id: 0,
						name: '',
						totalScore: 0,
						upperBonus: 0,
						scores: {
							ones: undefined,
							twos: undefined,
							threes: undefined,
							fours: undefined,
							fives: undefined,
							sixes: undefined,
							threeOfKind: undefined,
							fourOfKind: undefined,
							fullHouse: undefined,
							smallStraight: undefined,
							largeStraight: undefined,
							yahtzee: undefined,
							chance: undefined
						}
					}
				]
			};
		default:
			throw new Error();
	}
};
