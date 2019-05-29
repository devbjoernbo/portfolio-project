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

export const StyledSquare = styled.button`
	background: #fff;
	border: 1px solid #999;
	float: left;
	font-size: 34px;
	font-weight: bold;
	line-height: 34px;
	height: 44px;
	margin-right: -1px;
	margin-top: -1px;
	padding: 0;
	text-align: center;
	width: 44px;

	:focus {
		outline: none;
	}

	${media.smallPhone`height: 35px; width: 35px; line-height: 25px;`}
`;
