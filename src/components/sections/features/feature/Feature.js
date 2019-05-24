import React from 'react';

import { StyledFeatureComponent } from './feature_Styles';

const Feature = ({ feature }) => {
	return <StyledFeatureComponent>{feature.component}</StyledFeatureComponent>;
};

export default Feature;
