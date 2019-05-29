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
	StyledItemText,
	StyledBottomContainer
} from './timeline_Styles';

function randomColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
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
							<StyledBottomContainer>
								<StyledItemTime>{date}</StyledItemTime>
								<StyledItemText>{text}</StyledItemText>
							</StyledBottomContainer>
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
		date: 'Sep 2017',
		text: 'Udleveret materiale fra CBS, Youtube og artikler.'
	},
	{
		name: 'GWT, JDBC og MYSQL',
		date: 'Feb 2018',
		text: 'Udemy kurser, Youtube og artikler.'
	},
	{
		name: 'HTML, CSS og JavaScript',
		date: 'Juli 2018',
		text: 'Udemy kurser, Youtube og artikler.'
	},
	{
		name: 'MongoDB, Express og Node',
		date: 'Aug 2018',
		text: 'Udemy kurser, Youtube og artikler.'
	},
	{
		name: 'React',
		date: 'Okt 2018',
		text: 'Udemy kurser, Youtube, artikler og React-docs.'
	},
	{
		name: 'MERN-stack',
		date: 'Jan 2019',
		text: 'Udemy kurser, Youtube og artikler.'
	},
	{
		name: 'React baseret libraries',
		date: 'Apr 2019',
		text: 'Kurser, Youtube, artikler og forskellige docs.'
	},
	{
		name: 'Deployment',
		date: 'Maj 2019',
		text: 'Udemy kursus, artikler og forskellige docs.'
	}
];
