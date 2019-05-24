import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import {
	ones,
	twos,
	threes,
	fours,
	fives,
	sixes,
	threeOfKind,
	fourOfKind,
	fullHouse,
	smallStraight,
	largeStraight,
	yahtzee,
	chance
} from './rules';
import RuleRow from './rule_row/RuleRow';
import { YahtzeeContext } from '../../yahtzee_Context';
import {
	StyledScoreTable,
	StyledTable,
	StyledScoreTableSection,
	StyledDesc,
	StyledBonusRow,
	StyledRuleRowItems
} from './scoreTable_Styles';

const ScoreTable = ({ doScore, currentPlayer }) => {
	const { scores, name, upperBonus, totalScore } = currentPlayer;
	const [yahtzeeConfig, dispatchYahtzeeConfig] = useContext(YahtzeeContext);
	return (
		<StyledScoreTable>
			<StyledScoreTableSection>
				<StyledDesc>Upper</StyledDesc>
				<StyledTable cellSpacing="0">
					<tbody>
						<RuleRow
							name="Ones"
							score={scores.ones}
							description={ones.description}
							doScore={evt => doScore('ones', ones.evalRoll)}
						/>
						<RuleRow
							name="Twos"
							score={scores.twos}
							description={twos.description}
							doScore={evt => doScore('twos', twos.evalRoll)}
						/>
						<RuleRow
							name="Threes"
							score={scores.threes}
							description={threes.description}
							doScore={evt => doScore('threes', threes.evalRoll)}
						/>
						<RuleRow
							name="Fours"
							score={scores.fours}
							description={fours.description}
							doScore={evt => doScore('fours', fours.evalRoll)}
						/>
						<RuleRow
							name="Fives"
							score={scores.fives}
							description={fives.description}
							doScore={evt => doScore('fives', fives.evalRoll)}
						/>
						<RuleRow
							name="Sixes"
							score={scores.sixes}
							description={sixes.description}
							doScore={evt => doScore('sixes', sixes.evalRoll)}
						/>
						<StyledBonusRow>
							<StyledRuleRowItems
								score={upperBonus >= 63 ? true : false}
								className="RuleRow-name"
							>
								{`Goal: 63 /  Current: ${upperBonus}`}
							</StyledRuleRowItems>
							<StyledRuleRowItems
								score={upperBonus >= 63 ? true : false}
								className="RuleRow-score"
							>
								{upperBonus >= 63
									? 50
									: '50 points for acheiving the goal'}
							</StyledRuleRowItems>
						</StyledBonusRow>
					</tbody>
				</StyledTable>
			</StyledScoreTableSection>
			<StyledScoreTableSection>
				<StyledDesc>Lower</StyledDesc>
				<StyledTable cellSpacing="0">
					<tbody>
						<RuleRow
							name="Three of Kind"
							score={scores.threeOfKind}
							description={threeOfKind.description}
							doScore={evt =>
								doScore('threeOfKind', threeOfKind.evalRoll)
							}
						/>
						<RuleRow
							name="Four of Kind"
							score={scores.fourOfKind}
							description={fourOfKind.description}
							doScore={evt =>
								doScore('fourOfKind', fourOfKind.evalRoll)
							}
						/>
						<RuleRow
							name="Full House"
							score={scores.fullHouse}
							description={fullHouse.description}
							doScore={evt =>
								doScore('fullHouse', fullHouse.evalRoll)
							}
						/>
						<RuleRow
							name="Small Straight"
							score={scores.smallStraight}
							description={smallStraight.description}
							doScore={evt =>
								doScore('smallStraight', smallStraight.evalRoll)
							}
						/>
						<RuleRow
							name="Large Straight"
							score={scores.largeStraight}
							description={largeStraight.description}
							doScore={evt =>
								doScore('largeStraight', largeStraight.evalRoll)
							}
						/>
						<RuleRow
							name="Yahtzee"
							score={scores.yahtzee}
							description={yahtzee.description}
							doScore={evt =>
								doScore('yahtzee', yahtzee.evalRoll)
							}
						/>
						<RuleRow
							name="Chance"
							score={scores.chance}
							description={chance.description}
							doScore={evt => doScore('chance', chance.evalRoll)}
						/>
					</tbody>
				</StyledTable>
			</StyledScoreTableSection>
			{yahtzeeConfig.players.length > 1 ? (
				<h3>CurrentPlayer is: {name}</h3>
			) : (
				<h4>
					{yahtzeeConfig.winner.id !== undefined ? (
						<Button variant="outline-dark">
							onClick=
							{() =>
								dispatchYahtzeeConfig({ type: 'RESET_GAME' })
							}
							> Reset game
						</Button>
					) : (
						`TotalScore is: ${totalScore}`
					)}
				</h4>
			)}
		</StyledScoreTable>
	);
};

export default ScoreTable;
