import styled from 'styled-components';
// VersionSettings
export const StyledRadioLabel = styled.label`
	display: block;
	position: relative;
	padding-left: 25px;
	margin-bottom: 12px;
	cursor: pointer;
	user-select: none;
	font-size: 15px;
`;

export const StyledRadioInput = styled.input`
	position: absolute;
	left: 5px;
	bottom: 5px;
	cursor: pointer;
	font-size: 15px;
`;

// VersionSettings - END

//NumberOfPlayersSettings
export const StyledLabel = styled.label`
	display: block;
	position: relative;
	padding-right: 40px;
	font-size: 15px;
`;
export const StyledSelect = styled.select`
	position: absolute;
	right: 0px;
	cursor: pointer;
`;

// NumberOfPlayersSettings - END

//NameOfPlayersSettings
export const StyledOptionSectionHeader = styled.h4`
	margin: 10px 10px 15px 10px;
	font-size: 16px;
`;

export const StyledNameRow = styled.div`
	margin: 0 0 10px 10px;
`;
export const StyledNameInput = styled.input`
	padding-left: 10px;
	border-radius: 5px;
	width: 180px;
	height: 20px;
	font-size: 13px;

	:hover {
		background-color: #ccc;
	}
`;
export const StyledStartGameButton = styled.button`
	margin-top: 25px;
	font-size: 1.7em;
	color: white;
	font-weight: 200;
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

	width: 150px;

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
`;
//NameOfPlayersSettings - END
