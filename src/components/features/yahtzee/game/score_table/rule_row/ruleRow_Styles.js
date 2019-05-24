import styled, { keyframes } from 'styled-components';

const spin = keyframes`
	0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;
const Slide = keyframes`
	0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
  `;

export const StyledRuleRow = styled.tr`
	transition: all 0.2s;

	&.RuleRow-active {
		:hover {
			cursor: pointer;
			background: rgba(227, 242, 253, 0.5);
		}
	}

	&.RuleRow-disabled {
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
	}

	&.Die-rolling {
		animation: ${spin} 1s ease-out;
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
