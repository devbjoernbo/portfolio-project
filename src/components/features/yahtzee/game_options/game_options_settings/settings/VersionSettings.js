import React from 'react';
import {
	StyledRadioLabel,
	StyledRadioInput,
	StyledOptionSectionHeader
} from './settings_Styles';

const VersionSettings = ({ playersConfig, handleOnRadioChange }) => {
	return (
		<React.Fragment>
			<StyledOptionSectionHeader>
				Yahtzee-Version
			</StyledOptionSectionHeader>

			<StyledRadioLabel>
				Normal - 5 Dice / 15 rules
				<StyledRadioInput
					type="radio"
					name="version"
					value="normal"
					checked={playersConfig.version === 'normal'}
					onChange={handleOnRadioChange}
				/>
			</StyledRadioLabel>
			<StyledRadioLabel>
				Large - 6 Dice / 20 rules
				<StyledRadioInput
					type="radio"
					name="version"
					value="large"
					checked={playersConfig.version === 'large'}
					onChange={handleOnRadioChange}
				/>
			</StyledRadioLabel>
		</React.Fragment>
	);
};

export default VersionSettings;
