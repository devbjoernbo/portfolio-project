import styled, { keyframes, css } from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
//MEDIA-QUERIES
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

const Gradient = keyframes`
	0% {
    background-position: 0% 50%;
	}
	50% {
    background-position: 100% 50%;
	}
	100% {
    background-position: 0% 50%;
	}
  `;

export const StyledFeatureCarousel = styled.div`
	width: 30%;

	height: 600px;

	display: flex;
	justify-content: center;
	align-items: center;

	${media.tablet`height: 500px; width: 80%;`}
`;
export const StyledFeaturesWrapper = styled(animated.div)`
	display: grid;
	grid-template-columns: 1fr 1fr;

	background: linear-gradient(-45deg, #673ab7, #9c27b0);
	background-size: 300% 300%;

	animation: ${Gradient} 10s ease infinite;

	justify-content: strech;
	align-items: strech;

	box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
`;
export const StyledFeatureItem = styled.div`
	height: 100%;
	width: 100%;

	background: ${props => props.backgroundColor};
	text-align: center;
`;

export const StyledFeatureName = styled.div`
	position: relative;
	background-color: transparent;

	top: calc(50% - 40px);
	user-select: none;
	font-size: 16px;
	color: black;
	font-weight: 600;
	padding: 1em 1.5em;
	line-height: 20px;

	text-transform: uppercase;
`;

export const StyledLinks = styled(Link)`
	text-decoration: none;
	text-transform: uppercase;
`;
export const StyledLinkButton = styled(Button)`
	position: absolute;

	left: calc(50% - 34px);
	bottom: 30px;
	background-color: transparent;

	text-transform: uppercase;

	${media.tablet`bottom: 20px;`}
`;
export const StyledButton = styled(animated.button)`
	position: relative;

	left: calc(50% - 80px);

	margin-top: 15px;

	width: 160px;
	height: 35px;
	font-size: 17px;
	cursor: pointer;
	color: white;
	font-weight: 300;
	background-size: 100% auto;
	box-shadow: 0 10px 19px rgba(0, 0, 0, 0.3), 0 7px 6px rgba(0, 0, 0, 0.1);
	background-image: linear-gradient(
		to right,
		#7d38b1 0%,
		#59287d 51%,
		#7d38b1 100%
	);
	border-radius: 0.5rem;
	border: none;
`;
export const StyledCurrentFeatureDescription = styled(animated(Card))`
	position: absolute;
	height: 90%;
	width: 30%;
	display: none;

	box-shadow: 0 10px 19px rgba(0, 0, 0, 0.3), 0 7px 6px rgba(0, 0, 0, 0.1);
	left: 5%;
	top: calc(50% - 45%);

	z-index: 20;

	${media.tablet`top: 0; height: 45%; width: 80%; left: 10%;`}
`;
export const StyledCurrentFeatureContainer = styled(animated(Card.Body))`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	justify-content: space-evenly;
`;
export const StyledCurrentFeatureTitle = styled(Card.Title)`
	font-size: 30px;
`;
export const StyledCurrentFeatureText = styled(Card.Text)``;
export const StyledCurrentFeaturePackages = styled(ListGroup)``;
export const StyledCurrentFeaturePackage = styled(ListGroupItem)``;
