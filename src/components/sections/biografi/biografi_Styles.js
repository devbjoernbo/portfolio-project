import styled, { css } from 'styled-components';

//MEDIA-QUERIES
const sizes = {
	tablet: 1024,
	phone: 500
};

const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`;

	return acc;
}, {});

// Biografi
export const StyledBiografi = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;

	${media.tablet`flex-direction: column;`}
`;
