import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { StyledUddannelse } from './uddannelse_Styles';

import Timeline from './timeline/Timeline';
import Courses from './courses/Courses';

const Uddannelse = () => {
	const [on, toggle] = useState(false);

	return (
		<StyledUddannelse>
			<Waypoint
				onEnter={() => {
					if (!on) toggle(true);
				}}
				bottomOffset="0%"
			/>
			<Courses on={on} />

			<Timeline on={on} />

			<Waypoint
				onEnter={() => {
					if (!on) toggle(true);
				}}
				bottomOffset="0%"
			/>
		</StyledUddannelse>
	);
};

export default Uddannelse;
