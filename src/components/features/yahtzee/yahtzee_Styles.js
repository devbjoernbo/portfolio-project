import styled, { css } from 'styled-components';

//MEDIA-QUERIES
const sizes = {
	tablet: 1024,
	yahtzeeConfig: 700,
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

export const StyledYatzee = styled.div`
	position: relative;
	text-align: center;

	display: flex;
	height: 100%;
`;
export const StyledDetailsContainer = styled.div`
	width: 250px;
	height: 100%;
	background-color: white;

	border-left: solid 5px #673ab7;

	z-index: 1000;

	${media.yahtzeeConfig`display: none;`}
`;
export const StyledExpandedController = styled.div`
	position: relative;

	.showed-expanded-feature-enter {
		opacity: 0;
	}
	.showed-expanded-feature-enter-active {
		opacity: 1;
		transition: opacity 2s;
	}
	.showed-expanded-feature-exit {
		opacity: 1;
	}
	.showed-expanded-feature-exit-active {
		opacity: 0;
		transition: opacity 2s;
	}
`;
