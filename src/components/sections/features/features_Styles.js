import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const sizes = {
	tablet: 1110,
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

export const StyledFeatures = styled(animated.div)`
	position: relative;
	height: 100%;
	width: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;

	justify-content: space-between;

	${media.tablet`flex-direction: column;`}
`;

export const StyledRoutes = styled.div`
	position: relative;
	width: 60%;
	display: flex;
	justify-content: center;

	${media.tablet`margin-top: 80px;`}
`;

export const StyledFeatureReplacement = styled.h1`
	font-size: 40px;
	color: white;
	text-align: center;
`;
