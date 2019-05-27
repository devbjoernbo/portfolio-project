import React, { useContext } from 'react';
import {
	StyledScoreKeeper,
	StyledLeaderBoard,
	StyledLeaderBoardTable,
	StyledLeaderBoardItem,
	StyledTableHeader,
	StyledPlayersBox,
	StyledPlayerDescription,
	StyledName,
	StyledPoints,
	StyledLeaderBoardIndex,
	StyledLeaderBoardTotalScore,
	StyledLeaderBoardName
} from './scoreKeeper_Styles';
import { YahtzeeContext } from '../yahtzee_Context';

const ScoreKeeper = () => {
	const [yahtzeeConfig] = useContext(YahtzeeContext);

	const { players, currentPlayer } = yahtzeeConfig;
	return (
		<StyledScoreKeeper>
			<LeaderBoard players={players} />
			<PlayersBox players={players} currentPlayer={currentPlayer} />
		</StyledScoreKeeper>
	);
};

export default ScoreKeeper;

const LeaderBoard = ({ players }) => {
	const newPlayers = players.slice(0);
	const sortedPlayersByTotalScore = newPlayers.sort((a, b) => {
		return b.totalScore - a.totalScore;
	});

	return (
		<StyledLeaderBoard>
			<StyledLeaderBoardTable>
				<thead>
					<tr>
						<StyledTableHeader>Placering</StyledTableHeader>
						<StyledTableHeader>Point</StyledTableHeader>
						<StyledTableHeader>Navn</StyledTableHeader>
					</tr>
				</thead>
				<tbody>
					{sortedPlayersByTotalScore.map((player, index) => (
						<StyledLeaderBoardItem key={player.id}>
							<StyledLeaderBoardIndex>
								{index + 1}.
							</StyledLeaderBoardIndex>

							<StyledLeaderBoardTotalScore>
								{player.totalScore}
							</StyledLeaderBoardTotalScore>
							<StyledLeaderBoardName>
								{player.name}
							</StyledLeaderBoardName>
						</StyledLeaderBoardItem>
					))}
				</tbody>
			</StyledLeaderBoardTable>
		</StyledLeaderBoard>
	);
};

const PlayersBox = ({ players, currentPlayer }) => {
	return (
		<StyledPlayersBox>
			{players.map((player, index) => {
				const current = player.id === currentPlayer.id ? true : false;
				return (
					<StyledPlayerDescription
						key={player.id}
						current={current}
						index={index}
					>
						<StyledPoints>{player.totalScore} pt.</StyledPoints>
						<StyledName>{player.name}</StyledName>
					</StyledPlayerDescription>
				);
			})}
		</StyledPlayersBox>
	);
};
