import React from 'react';

import { StyledRuleRow, StyledRuleRowItems } from './ruleRow_Styles';

const RuleRow = ({ name, score, doScore, description }) => {
	const disabled = score !== undefined;

	return (
		<StyledRuleRow
			className={`RuleRow-${score === undefined ? 'active' : 'disabled'}`}
			onClick={disabled ? null : doScore}
		>
			<StyledRuleRowItems
				score={disabled ? true : false}
				className="RuleRow-name"
			>
				{name}
			</StyledRuleRowItems>
			<StyledRuleRowItems
				score={disabled ? true : false}
				className="RuleRow-score"
			>
				{disabled ? score : description}
			</StyledRuleRowItems>
		</StyledRuleRow>
	);
};

export default RuleRow;
