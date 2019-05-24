import styled, { keyframes } from 'styled-components';

const Slide = keyframes`
	0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
  `;

export const StyledScoreTable = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	font-size: 0.75rem;
	width: 90%;
	background-color: white;
`;
export const StyledTable = styled.table`
	width: 100%;
`;
export const StyledScoreTableSection = styled.div`
	vertical-align: top;
	width: 100%;
`;
export const StyledDesc = styled.h2`
	font-weight: 200;
	font-size: 1.5em;
	border-bottom: 2px solid purple;
	display: inline-block;
	margin: 10px;
`;

export const StyledBonusRow = styled.tr`
	background: linear-gradient(
		to right,
		rgba(209, 196, 233, 1) 0%,
		rgba(209, 196, 233, 1) 0%,
		rgba(209, 196, 233, 1) 30%,
		rgba(227, 242, 253, 1) 40%
	);
	background-size: 300% 300%;
	animation: ${Slide} 1s ease 1;

	:hover {
		cursor: not-allowed;
	}
`;
export const StyledRuleRowItems = styled.td`
	padding: 0.3em;
	border-bottom: solid 1px black;

	&.RuleRow-name {
		width: 50%;
		text-align: left;
		text-decoration: ${props => (props.score ? 'line-through' : '')};
	}
	&.RuleRow-score {
		width: 50%;
		text-align: right;
	}
`;
