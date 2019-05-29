import React from 'react';
import { useSpring, config } from 'react-spring';

import AutoSizer from 'react-virtualized-auto-sizer';
import {
	StyledCourses,
	StyledCourseOverview,
	StyledOverviewTitle,
	StyledStatsContainer,
	StyledListItem,
	StyledListWrapper,
	StyledList,
	StyledCourseTitle,
	StyledCourseSubjects,
	StyledCourseSubjectsItem,
	StyledStatsText,
	StyledProgressBar,
	StyledProgressBarFiller,
	StyledCourseDesc,
	StyledItemContent,
	StyledLink
} from './courses_Styles';

const Courses = ({ on }) => {
	const animation = useSpring({
		opacity: on ? 1 : 0,
		transform: on ? 'translateX(0)' : 'translateX(-200px)',
		config: config.molasses
	});

	return (
		<StyledCourses style={animation}>
			<CourseOverview courses={coursesItems} />

			<StyledListWrapper>
				<AutoSizer>
					{({ height, width }) => (
						<StyledList
							height={height}
							itemCount={coursesItems.length}
							itemSize={250}
							layout="horizontal"
							width={width}
							itemData={coursesItems}
						>
							{CourseItem}
						</StyledList>
					)}
				</AutoSizer>
			</StyledListWrapper>
		</StyledCourses>
	);
};

export default Courses;

const CourseOverview = ({ courses }) => {
	// Hours(t)
	const totalHours = Math.round(
		courses.reduce((total, item) => (total += item.hours), 0)
	);
	// Hours(t) * Completed(%) / 100
	const totalCompletedHours = Math.round(
		courses.reduce(
			(total, item) => (total += (item.hours * item.completed) / 100),
			0
		)
	);

	return (
		<StyledCourseOverview border="light">
			<StyledOverviewTitle>
				Oversigt over kurser - inkl. planlagte
			</StyledOverviewTitle>
			<StyledStatsContainer>
				<StyledStatsText>
					<strong>Antal kurser: </strong>
					{courses.length}
				</StyledStatsText>
				<StyledStatsText>
					<strong>Samlet antal timer: </strong>
					{totalHours}
				</StyledStatsText>
				<StyledStatsText>
					<strong>Fuldførte timer: </strong>
					{totalCompletedHours}
				</StyledStatsText>
				<StyledStatsText>
					<strong>Hovedemner: </strong>HTML, CSS, JavaScript, ReactJS,
					MongoDB, ExpressJS, NodeJS.
				</StyledStatsText>
			</StyledStatsContainer>
		</StyledCourseOverview>
	);
};

const CourseItem = ({ index, style, data }) => {
	const item = data[index];

	return (
		<StyledListItem className="text-center" key={index} style={style}>
			<StyledCourseTitle>
				<StyledLink href={item.url} target="_blank">
					{item.title}
				</StyledLink>
			</StyledCourseTitle>

			<StyledCourseSubjects variant="flush">
				{item.mainSubjects.map((subject, index) => (
					<StyledCourseSubjectsItem key={index}>
						{subject}
					</StyledCourseSubjectsItem>
				))}
			</StyledCourseSubjects>
			<StyledItemContent>
				<StyledCourseDesc>
					<strong>Forfatter:</strong> {item.author}
				</StyledCourseDesc>
				<StyledCourseDesc>
					<strong>Længde:</strong> {item.hours} t
				</StyledCourseDesc>
			</StyledItemContent>
			<ProgressBar percentage={item.completed} />
		</StyledListItem>
	);
};

const ProgressBar = ({ percentage }) => {
	return (
		<StyledProgressBar>
			<ProgressBarFiller percentage={percentage} />
		</StyledProgressBar>
	);
};

const ProgressBarFiller = ({ percentage }) => {
	return (
		<StyledProgressBarFiller percentage={percentage}>
			{percentage === 0 ? 'planned course' : `${percentage}%`}
		</StyledProgressBarFiller>
	);
};

const coursesItems = [
	{
		title: 'The Modern React Bootcamp',
		author: 'Colt Steele',
		hours: 36.5,
		completed: 18,
		mainSubjects: ['Hooks', 'React Router', 'Animations'],
		url: 'https://www.udemy.com/modern-react-bootcamp'
	},
	{
		title: 'The Web Developer Bootcamp',
		author: 'Colt Steele',
		hours: 47,
		completed: 87,
		mainSubjects: [
			'HTML5',
			'CSS3',
			'JavaScript',
			'NodeJS',
			'ExpressJS',
			'MongoDB / MongooseJS'
		],
		url: 'https://www.udemy.com/the-web-developer-bootcamp'
	},
	{
		title: 'MySQL, SQL and Stored Procedures from Beginner to Advanced',
		author: 'John Purcell',
		hours: 18.5,
		completed: 62,
		mainSubjects: ['Create, query and update databases'],
		url: 'https://www.udemy.com/mysql-and-sql-from-beginner-to-advanced'
	},
	{
		title: 'Modern React with Redux',
		author: 'Stephen Grider',
		hours: 47.5,
		completed: 88,
		mainSubjects: ['Fundamentals features of React and Redux'],
		url: 'https://www.udemy.com/react-redux/learn/v4/overview'
	},
	{
		title: 'Node with React: Fullstack Web Development',
		author: 'Stephen Grider',
		hours: 26,
		completed: 93,
		mainSubjects: [
			'Fullstack programming',
			'MERN-stack: MongoDB, ExpressJS, React/Redux and NodeJS',
			'Stipe-payments',
			'Heroku Deployment'
		],
		url: 'https://www.udemy.com/node-with-react-fullstack-web-development'
	},
	{
		title: "ES6 JavaScript: The Complete Developer's Guide",
		author: 'Stephen Grider',
		hours: 6.5,
		completed: 95,
		mainSubjects: ['ES6 features'],
		url: 'https://www.udemy.com/javascript-es6-tutorial'
	},
	{
		title: 'The Complete Developers Guide to MongoDB',
		author: 'Stephen Grider',
		hours: 13.5,
		completed: 99,
		mainSubjects: ['Mongoose', 'Mocha', 'Robomongo'],
		url: 'https://www.udemy.com/the-complete-developers-guide-to-mongodb'
	},
	{
		title: 'Advanced React and Redux: 2018 Edition',
		author: 'Stephen Grider',
		hours: 21,
		completed: 62,
		mainSubjects: ['Testing: Jest & Enzyme', 'Authentication'],
		url: 'https://www.udemy.com/react-redux-tutorial'
	},
	{
		title: 'Learn HTML5 Programming From Scratch',
		author: 'Eduonix-Tech',
		hours: 10.5,
		completed: 42,
		mainSubjects: ['Forskellige HTML features'],
		url: 'https://www.udemy.com/learn-html5-programming-from-scratch'
	},
	{
		title: 'The Complete JavaScript Course 2019: Build Real Projects!',
		author: 'Jonas Schmedtmann',
		hours: 28,
		completed: 100,
		mainSubjects: ['Forskellige JavaScript features'],
		url: 'https://www.udemy.com/the-complete-javascript-course'
	},
	{
		title: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
		author: 'Jonas Schmedtmann',
		hours: 28,
		completed: 40,
		mainSubjects: ['Grid', 'Flexbox'],
		url: 'https://www.udemy.com/advanced-css-and-sass'
	},
	{
		title: 'Animating React',
		author: 'Scott Tolinski',
		hours: 4,
		completed: 100,
		mainSubjects: ['React-Spring, React-with-Gestures'],
		url: 'https://www.leveluptutorials.com/tutorials/animating-react'
	},
	{
		title: ' Code With Node',
		author: 'Dev Sprout',
		hours: 19,
		completed: 41,
		mainSubjects: [
			'Fullstack programming',
			'NEMO - Stack: NodeJS, ExpressJS, MongoDB & other stuff'
		],
		url: 'https://www.devsprout.io/code-with-node'
	},

	{
		title: 'MERN Stack Front To Back: Full Stack React, Redux & Node.js',
		author: 'Brad Traversy',
		hours: 12,
		completed: 0,
		mainSubjects: ['MERN-stack', 'Server-config'],
		url: 'https://www.udemy.com/mern-stack-front-to-back'
	},
	{
		title: 'Machine Learning with Javascript',
		author: 'Stephen Grider',
		hours: 17.5,
		completed: 0,
		mainSubjects: ['Machine learning'],
		url: 'https://www.udemy.com/machine-learning-with-javascript'
	},
	{
		title: 'React Native - The Practical Guide',
		author: 'Maximilian Schwarzmüller',
		hours: 16.5,
		completed: 0,
		mainSubjects: ['React Native'],
		url: 'https://www.udemy.com/react-native-the-practical-guide'
	},
	{
		title: 'Node JS: Advanced Concepts',
		author: 'Stephen Grider',
		hours: 16,
		completed: 0,
		mainSubjects: ['NodeJS'],
		url: 'https://www.udemy.com/advanced-node-for-developers'
	},
	{
		title: 'React Native: Advanced Concepts',
		author: 'Stephen Grider',
		hours: 16.5,
		completed: 0,
		mainSubjects: ['React Native'],
		url: 'https://www.udemy.com/react-native-advanced'
	},
	{
		title: 'GraphQL with React: The Complete Developers Guide',
		author: 'Stephen Grider',
		hours: 13.5,
		completed: 0,
		mainSubjects: ['GraphQL'],
		url: 'https://www.udemy.com/graphql-with-react-course'
	}
];
