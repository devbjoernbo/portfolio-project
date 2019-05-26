import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

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

//Timeline
export const StyledTimelineContainer = styled.div`
	width: 40%;

	display: flex;
	flex-direction: column;
	position: relative;

	:after {
		background-color: #e17b77;
		content: '';
		position: absolute;
		left: calc(50% - 6px);
		width: 4px;
		height: 100%;
	}

	${media.tablet` width: 50%; margin-top: 50px; `}
`;

export const StyledItemContent = styled.div`
	width: 500px;

	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 40px 15px 0px 15px;
	position: relative;

	max-width: 100%;
	text-align: right;

	box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	background-color: #fff;

	:after {
		content: ' ';
		background-color: #fff;
		box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
			0 15px 12px rgba(0, 0, 0, 0.1);
		position: absolute;
		right: -7.5px;
		top: calc(50% - 7.5px);
		transform: rotate(45deg);
		width: 15px;
		height: 15px;
	}
`;

export const StyledItemCircle = styled.span`
	background-color: #fff;
	border: 3px solid #e17b77;
	border-radius: 50%;
	position: absolute;
	top: calc(50% - 9px);
	right: -42px;
	width: 20px;
	height: 20px;
	z-index: 100;
`;
export const StyledItemName = styled.span`
	font-size: 10px;
	font-weight: bold;
	top: 5px;
	left: 5px;
	letter-spacing: 1px;
	padding: 5px;
	position: absolute;
	text-transform: uppercase;
	background: ${props => props.backgroundColor};
	color: ${props => (props.isDark ? 'white' : 'black')};
`;

export const StyledItemContainer = styled(animated.div)`
	display: flex;
	justify-content: flex-end;
	margin-left: -35px;
	position: relative;
	width: 50%;
	z-index: 15;
	box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
	transition: box-shadow 0.5s;
	will-change: transform;
	:hover  {
		box-shadow: 0px 30px 100px -20px rgba(0, 0, 0, 0.8);
	}

	&:nth-child(odd) {
		align-self: flex-end;
		justify-content: flex-start;
		margin-right: -35px;
		padding-right: 0;
	}

	:nth-child(odd) ${StyledItemContent} {
		text-align: left;
		align-items: flex-start;
	}

	:nth-child(odd) ${StyledItemContent}:after {
		right: auto;
		left: -7.5px;
		box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
	}

	:nth-child(odd) ${StyledItemContent} ${StyledItemName} {
		left: auto;
		right: 5px;
	}

	:nth-child(odd) ${StyledItemContent} ${StyledItemCircle} {
		right: auto;
		left: -48px;
	}
`;

export const StyledItemTime = styled.time`
	color: #777;
	font-size: 12px;
	font-weight: bold;
`;
export const StyledItemText = styled.p`
	font-size: 14px;
	line-height: 18px;
	font-weight: 400;
	margin: 10px 0 10px 0;
	max-width: 250px;
`;
// Timeline -END
