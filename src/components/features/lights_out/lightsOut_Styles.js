import styled, { keyframes } from 'styled-components';

const neonOrange = keyframes`

  0%,
  100% {
    text-shadow: 0 0 1vw #fa1c16, 0 0 3vw #fa1c16, 0 0 10vw #fa1c16,
      0 0 10vw #fa1c16, 0 0 0.4vw #fed128, 0.5vw 0.5vw 0.1vw #806914;
    color: #fed128;
  }
  50% {
    text-shadow: 0 0 0.5vw #800e0b, 0 0 1.5vw #800e0b, 0 0 5vw #800e0b,
      0 0 5vw #800e0b, 0 0 0.2vw #800e0b, 0.5vw 0.5vw 0.1vw #40340a;
    color: #806914;
  }

`;
const neonBlue = keyframes`

   0%,
  100% {
    text-shadow: 0 0 1vw #1041ff, 0 0 3vw #1041ff, 0 0 10vw #1041ff,
      0 0 10vw #1041ff, 0 0 0.4vw #8bfdfe, 0.5vw 0.5vw 0.1vw #147280;
    color: #28d7fe;
  }
  50% {
    text-shadow: 0 0 0.5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180,
      0 0 5vw #082180, 0 0 0.2vw #082180, 0.5vw 0.5vw 0.1vw #0a3940;
    color: #146c80;
  }

`;

export const StyledLightsOut = styled.div`
	position: relative;

	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 650px;
	width: 100%;

	font-family: neon;
	src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/neon.ttf);
`;
export const StyledTableRow = styled.tr``;

export const StyledTableItem = styled.td`
	&.Cell {
		height: 100px;
		width: 100px;
		border: solid 1px #6c49b8;
		border-radius: 1px;
		background-color: #263238;
		transition: background-color 0.7s ease;
	}

	&.Cell-lit {
		background-color: #00bcd4;
	}
`;

export const StyledBoardTable = styled.table`
	margin: 0 auto;
	border-radius: 10px;
	box-shadow: 0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
`;
export const StyledBoardTableBody = styled.tbody``;

export const StyledWinnerWrapper = styled.div``;
export const StyledSpanOrange = styled.span`
	font-family: neon;
	color: #fb4264;
	font-size: 60px;
	text-shadow: 0 0 3vw #f40a35;
	font-size: 200px;
	animation: ${neonOrange} 1s ease infinite;
	-moz-animation: ${neonOrange} 1s ease infinite;
	-webkit-animation: ${neonOrange} 1s ease infinite;
`;
export const StyledSpanBlue = styled.span`
	font-family: neon;
	color: #426dfb;
	font-size: 60px;
	text-shadow: 0 0 3vw #2356ff;
	animation: ${neonBlue} 2s linear infinite;
	-moz-animation: ${neonBlue} 2s linear infinite;
	-webkit-animation: ${neonBlue} 2s linear infinite;
	-o-animation: ${neonBlue} 2s linear infinite;
`;
export const StyledBoardTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const StyledDivOrange = styled.div`
	font-family: neon;
	color: #fb4264;
	font-size: 80px;
	text-shadow: 0 0 3vw #f40a35;
	animation: ${neonOrange} 1s ease infinite;
	-moz-animation: ${neonOrange} 1s ease infinite;
	-webkit-animation: ${neonOrange} 1s ease infinite;
`;
export const StyledDivBlue = styled.div`
	font-family: neon;
	color: #426dfb;
	font-size: 80px;
	text-shadow: 0 0 3vw #2356ff;
	animation: ${neonBlue} 2s linear infinite;
	-moz-animation: ${neonBlue} 2s linear infinite;
	-webkit-animation: ${neonBlue} 2s linear infinite;
	-o-animation: ${neonBlue} 2s linear infinite;
`;
