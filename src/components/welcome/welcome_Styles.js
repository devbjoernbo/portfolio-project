import styled, { css } from 'styled-components';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

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

export const StyledJumbotron = styled(Jumbotron)`
	position: relative;
	height: auto;
	width: 90%;
	padding-top: 35px;
	padding-bottom: 35px;
	top: 50px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

	box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);

	${media.tablet`height: auto; flex-direction: column;`}
`;

export const StyledRightContainer = styled.div`
	flex-direction: column;
	justify-content: center;

	${media.tablet`text-align: center;`}
`;
export const StyledContactInfo = styled.div``;
export const StyledEmail = styled.p`
	margin-top: 40px;
	font-size: 20px;
`;
export const StyledMobileNr = styled.p`
	font-size: 20px;
`;
export const StyledTitle = styled.h1`
	margin-bottom: 15px;
	width: 100%;
`;
export const StyledDecriptionContainer = styled.div`
	width: 50%;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	font-size: 15px;
	${media.tablet`width: 80%; text-align: center;`}
`;
export const StyledDecription = styled.p``;

export const StyledImage = styled(Image)`
	position: relative;

	height: 280px;

	box-shadow: 0 10px 19px rgba(0, 0, 0, 0.3), 0 7px 6px rgba(0, 0, 0, 0.1);

	${media.tablet`height: 280px; margin-top: 60px;`}
	${media.smallPhone`height: 200px; margin-top: 20px;`}
`;
