import styled from 'styled-components';

export const StyledListImageCollection = styled.div`
	position: relative;
	width: 450px;
	height: 550px;
	display: flex;
	flex-direction: column;
	background-color: white;
	justify-content: center;
	align-items: center;

	justify-items: center;
`;
export const StyledList = styled.div`
	width: 400px;
	height: 350px;
	border: solid 1px #6c49b8;
	padding: 15px;
`;
export const StyledListItem = styled.div`
	position: relative;
	top: 50%;
	text-align: center;
`;
export const StyledRowSize = styled.div`
	margin: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	justify-items: center;
`;
export const StyledLabel = styled.label`
	font-size: 15px;
	font-weight: 500;
`;
export const StyledInput = styled.input`
	text-align: center;
	font-size: 15px;
	width: 60px;
	margin: 0 10px 0 10px;
`;
export const StyledImageCollection = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 100px;
	grid-auto-flow: row;
`;
export const StyledImage = styled.img`
	align-self: start;
	border: solid 1px black;
	width: 100%;
	height: 100%;
`;

export const StyledButton = styled.button`
	width: 250px;
	height: 35px;
	font-size: 20px;
	cursor: pointer;
	margin-bottom: 30px;

	color: white;
	font-weight: 100;

	background-size: 100% auto;
	box-shadow: 0 9px 20px rgba(0, 0, 0, 0.3), 0 9px 6px rgba(0, 0, 0, 0.1);
	background-image: linear-gradient(
		to right,
		#7d38b1 0%,
		#59287d 51%,
		#7d38b1 100%
	);
	border-radius: 0.5rem;
	border: none;
`;