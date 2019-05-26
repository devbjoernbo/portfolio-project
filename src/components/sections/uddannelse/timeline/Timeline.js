import React from 'react';
import { useTrail, config } from 'react-spring';
import chroma from 'chroma-js';
import {
	StyledTimelineContainer,
	StyledItemCircle,
	StyledItemName,
	StyledItemContent,
	StyledItemContainer,
	StyledItemTime,
	StyledItemText
} from './timeline_Styles';

function randomColor() {
	//pick a "red" from 0 - 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	let b = Math.floor(Math.random() * 256);
	return { output: 'rgb(' + r + ', ' + g + ', ' + b + ')', rgb: [r, g, b] };
}

const Timeline = ({ on }) => {
	const trail = useTrail(timelineData.length, {
		from: {
			opacity: 0,
			transform: 'scale(0)'
		},
		to: {
			opacity: on ? 1 : 0,
			transform: on ? 'scale(1)' : 'scale(0)'
		},
		config: config.gentle
	});

	return (
		<StyledTimelineContainer>
			{trail.map((animation, key) => {
				const { output, rgb } = randomColor();
				const isDark = chroma(rgb).luminance() <= 0.6;
				const { name, date, text } = timelineData[key];
				return (
					<StyledItemContainer key={key} style={animation}>
						<StyledItemContent>
							<StyledItemName
								isDark={isDark}
								backgroundColor={output}
							>
								{name}
							</StyledItemName>
							<StyledItemTime>{date}</StyledItemTime>
							<StyledItemText>{text}</StyledItemText>
							<StyledItemCircle />
						</StyledItemContent>
					</StyledItemContainer>
				);
			})}
		</StyledTimelineContainer>
	);
};

export default Timeline;

const timelineData = [
	{
		name: 'Java',
		date: 'September 2017',
		text: 'Første semester CBS. En masse youtube videoer.'
	},
	{
		name: 'GWT, JDBC og MYSQL',
		date: 'Februar 2018',
		text: 'Andet semester CBS. UdeMy kursuser, youtube-videoer og artikler.'
	},
	{
		name: 'HTML, CSS og JavaScript',
		date: 'Juli 2018',
		text: 'UdeMy kursuser, youtube-videoer og artikler.'
	},
	{
		name: 'MongoDB, Express og Node',
		date: 'August 2018',
		text: 'UdeMy kursuser, youtube-videoer og artikler.'
	},
	{
		name: 'React',
		date: 'Oktober 2018',
		text: 'UdeMy kursuser, youtube-videoer, artikler og React-docs.'
	},
	{
		name: 'MERN-stack',
		date: 'Januar 2019',
		text: 'UdeMy kursuser, youtube-videoer og artikler.'
	},
	{
		name: 'Hooks',
		date: 'Februar 2019',
		text: 'UdeMy kursuser, youtube-videoer, artikler og React-docs.'
	},
	{
		name: 'React relateret teknologier',
		date: 'April 2019',
		text: 'UdeMy kursuser, youtube-videoer, artikler og forskellige docs.'
	},
	{
		name: 'Deployment',
		date: 'Maj 2019',
		text: 'UdeMy kursus, artikler og forskellige docs.'
	}
];
