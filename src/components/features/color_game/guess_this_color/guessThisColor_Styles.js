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

export const StyledGuessColor = styled.div`
	height: 30px;

	line-height: 30px;

	${media.phone`font-size: 15px;`}
	${media.smallPhone`font-size: 13px;`}
`;
