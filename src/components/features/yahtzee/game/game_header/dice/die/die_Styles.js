import styled, { keyframes } from 'styled-components';

const spin = keyframes`
	0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;

export const StyledDie = styled.i`
	color: white;
	text-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;

	&.Die-locked {
		opacity: 0.5;
		text-shadow: none;

		:hover {
			cursor: not-allowed;
			opacity: 0.65;
		}
	}

	:hover {
		opacity: 0.8;
	}

	&.Die-rolling {
		animation: ${spin} 1s ease-out;
	}
`;
