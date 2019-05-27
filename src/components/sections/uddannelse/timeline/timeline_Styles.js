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
		left: calc(50% - 2px);
		width: 4px;
		height: 100%;
	}

	${media.tablet` width: 70%; margin-top: 50px; `}
`;

export const StyledItemContent = styled.div`
	width: 500px;

	display: flex;
	flex-direction: column;
	align-items: flex-end;

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

export const StyledBottomContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;

	height: 100%;
	padding: 10px;
	text-align: center;
	align-items: center;
`;
export const StyledItemCircle = styled.span`
	background-color: #fff;
	border: 3px solid #e17b77;
	border-radius: 50%;
	position: absolute;
	top: calc(50% - 9px);
	right: -45px;
	width: 20px;
	height: 20px;
	z-index: 100;
`;

export const StyledItemName = styled.span`
	width: 100%;
	position: relative;
	text-align: center;
	font-size: 10px;
	font-weight: bold;
	top: 5px;
	left: 0;
	letter-spacing: 1px;
	padding: 5px;
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

	:nth-child(odd) ${StyledItemContent} ${StyledBottomContainer} {
		flex-direction: row;
	}

	:nth-child(odd) ${StyledItemContent}:after {
		right: auto;
		left: -7.5px;
		box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
	}

	:nth-child(odd) ${StyledItemContent} ${StyledItemCircle} {
		right: auto;
		left: -45px;
	}
`;

export const StyledItemTime = styled.time`
	position: relative;
	padding: 0 5px;

	color: #777;
	font-size: 15px;
	font-weight: bold;
`;
export const StyledItemText = styled.div`
	position: relative;
	padding: 0 5px;
	font-size: 14px;
	line-height: 18px;
	font-weight: 400;
`;
// Timeline -END
