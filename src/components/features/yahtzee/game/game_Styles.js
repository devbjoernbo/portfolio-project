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
	position: relative;
	width: 400px;
	background: white;
	box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	${media.phone`width: 360px;`}
	${media.smallPhone`width: 300px;`}
`;
export const StyledScoreBoardController = styled.div`
	position: relative;

	width: 400px;

	background: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	${media.phone`width: 360px;`}
	${media.smallPhone`width: 300px;`}
`;
export const StyledWinner = styled.div`
	color: green;
`;
