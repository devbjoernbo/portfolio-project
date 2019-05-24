import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { StyledBiografi } from './biografi_Styles';

import Timeline from './timeline/Timeline';
import Courses from './courses/Courses';

const Biografi = () => {
	const [on, toggle] = useState(false);

	return (
		<StyledBiografi>
			<Waypoint
				onEnter={() => {
					if (!on) toggle(true);
				}}
				bottomOffset="20%"
			/>
			<Courses on={on} />
			<Timeline on={on} />
		</StyledBiografi>
	);
};

export default Biografi;
