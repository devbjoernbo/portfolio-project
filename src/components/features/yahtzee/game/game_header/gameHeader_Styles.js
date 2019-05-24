import styled, { keyframes } from 'styled-components';
const Gradient = keyframes`
	0% {
    background-position: 0% 50%;
	}
	50% {
    background-position: 100% 50%;
	}
	100% {
    background-position: 0% 50%;
	}
  `;

export const StyledGameHeader = styled.div`
	width: 100%;
	background: linear-gradient(-45deg, #673ab7, #9c27b0);
	background-size: 300% 300%;

	animation: ${Gradient} 15s ease infinite;
`;
export const StyledGameTitle = styled.h1`
	margin: 0.5rem 0 0 0;
	color: white;
	margin-bottom: 0;
	font-weight: 100;
	display: inline-block;
	font-size: 2.3rem;
	width: 50%;
`;
export const StyledDiceContainer = styled.section`
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 0;
`;
export const StyledGameButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const StyledGameButton = styled.button`
	font-size: 1.3em;
	color: white;
	font-weight: 100;
	transition: 0.5s;
	background-size: 100% auto;
	box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
	background-image: linear-gradient(
		to right,
		#91eae4 0%,
		#7f7fd5 51%,
		#91eae4 100%
	);
	border-radius: 0.5rem;
	border: none;
	width: 50%;

	margin-bottom: 1rem;

	:hover {
		cursor: pointer;
		background-position: right center;
	}

	:active {
		outline: none;
	}

	:focus {
		outline: none;
	}

	:disabled {
		background-color: #ddd;
		cursor: not-allowed;
		opacity: 0.5;
	}
`;
