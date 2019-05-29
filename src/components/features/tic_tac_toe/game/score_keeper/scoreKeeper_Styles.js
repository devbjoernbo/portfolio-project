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

export const StyledScoreKeeper = styled.div`
	position: relative;
	height: ${470 - 30 - 44 * 3}px;
	display: flex;
	flex-direction: column;
`;
export const StyledControlButtons = styled.div`
	position: absolute;

	display: flex;
	flex-direction: column;
	font-size: 20px;
	margin: 20px 0;
`;
export const StyledControlButton = styled.button`
	margin: 10px 0;
	font-size: 15px;
	cursor: pointer;
	${media.smallPhone`font-size: 12px;`}
`;

export const StyledScoreBox = styled.div`
	position: absolute;
	height: 150px;
	width: ${44 * 3}px;
	border: solid 1px #6c49b8;
	bottom: 20px;
`;
export const StyledScoreItem = styled.div`
	position: relative;
	font-size: 18px;
	padding: 26px;
	&:first-child {
		border-bottom: dashed 2px #6c49b8;
	}
`;
