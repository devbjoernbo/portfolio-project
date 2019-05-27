import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { FixedSizeList as List } from 'react-window';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
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

export const StyledCourses = styled(animated.div)`
	position: relative;

	height: 900px;
	width: 40%;
	left: -4%;
	top: -100%;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	${media.tablet` width: 75%; left: 0;`}
`;
export const StyledCourseOverview = styled(Card)`
	position: relative;
	height: 250px;
	width: 70%;

	left: calc(50% - 35%);

	box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
	background-color: white;
	border-radius: 0.3em;

	${media.tablet` height: 300px;`}
`;
export const StyledOverviewTitle = styled(Card.Header)`
	font-weight: 500;
`;
export const StyledStatsContainer = styled(ListGroup)``;
export const StyledStatsText = styled(ListGroup.Item)``;

export const StyledList = styled(List)`
	background-color: white;

	text-align: center;
	border-radius: 0.3em;

	box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1);
`;

export const StyledLink = styled.a`
	text-decoration: none;
	color: black;
	:hover {
		text-decoration: none;
		color: #6c49b8;
	}
`;
export const StyledListWrapper = styled.div`
	height: 480px;
`;
export const StyledListItem = styled(Card)`
	padding: 0 10px 0 10px;
`;

export const StyledCourseTitle = styled(Card.Title)`
	height: 100px;
	display: flex;
	align-items: center;
	text-align: center;
	margin: 0;
`;
export const StyledItemContent = styled(Card.Body)`
	position: absolute;
	bottom: 30px;
	text-align: left;
`;

export const StyledCourseSubjects = styled(ListGroup)`
	font-size: 14px;
	font-weight: 500;
`;
export const StyledCourseSubjectsItem = styled(ListGroupItem)`
	padding: 0.5rem 0;
`;

export const StyledCourseDesc = styled(Card.Text)`
	font-size: 15px;
`;

export const StyledProgressBar = styled.div`
	position: absolute;
	bottom: 15px;
	left: calc(50% - 100px);
	font-size: 12px;

	height: 15px;
	width: 200px;
	border-radius: 50px;
	border: 1px solid #6c49b8;
`;
export const StyledProgressBarFiller = styled.div`
	background-color: ${props =>
		props.percentage === 0 ? 'white' : '#6c49b8'};
	height: 100%;
	border-radius: inherit;
	width: ${props => (props.percentage === 0 ? '100' : props.percentage)}%;
	color: ${props => (props.percentage === 0 ? '#6c49b8' : 'white')};
	text-align: center;
	font-size: 12px;
`;
