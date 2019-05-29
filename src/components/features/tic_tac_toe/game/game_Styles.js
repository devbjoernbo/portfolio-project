import styled, { css } from 'styled-components';
const sizes = {
	tablet: 1110,
	phone: 500,
	smallPhone: 330
};

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`;

	return acc;
}, {});
export const StyledGame = styled.div`
	width: 450px;
	position: absolute;

	padding: 30px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	text-align: center;
	${media.phone`width: 360px;`}
	${media.smallPhone`width: 300px;`}
`;

export const StyledGameBoardContainer = styled.div`
	display: flex;
	flex-direction: column;

	${media.phone`padding-left: 10px;`}
`;
export const StyledGameInfo = styled.div`
	width: 175px;
	margin-left: 20px;

	${media.phone`width: 200px;`}
	${media.smallPhone`width: 150px;`}
`;
export const StyledGameOptions = styled.div`
	margin-left: 20px;
`;

export const StyledStatus = styled.div`
	font-size: 25px;
	margin-bottom: 10px;

	${media.phone`font-size: 23px;`}
	${media.smallPhone`font-size: 16px;`}
`;

export const StyledOrderedList = styled.ol`
	font-size: 20px;
	font-weight: 600;
	padding-left: 30px;

	${media.phone`padding-left: 30px;`}
	${media.smallPhone`padding-left: 10px; font-size: 16px;`}
`;
