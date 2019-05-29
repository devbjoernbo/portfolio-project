import styled, { css } from 'styled-components';
import Scrollspy from 'react-scrollspy';
import Navbar from 'react-bootstrap/Navbar';

//MEDIA-QUERIES
const sizes = {
	tablet: 1024,
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

export const StyledScrollspy = styled(Scrollspy)`
	padding: 0;
	margin: 0;
`;
export const StyledNavbarBrand = styled(Navbar.Brand)`
	${media.smallPhone`font-size: 16px;`}
`;
