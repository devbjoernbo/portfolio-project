import React, { useState } from 'react';

import {
	FixedSizeGrid as FixedGrid,
	FixedSizeList as FixedList
} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import faker from 'faker';
import {
	StyledListImageCollection,
	StyledList,
	StyledListItem,
	StyledRowSize,
	StyledLabel,
	StyledInput,
	StyledImage,
	StyledButton
} from './rowGridCollection_Styles';

const RowGridCollection = () => {
	const [listConfig, setListConfig] = useState({
		rowCount: 10,
		columnCount: 10,
		isRow: true
	});

	const { rowCount, columnCount, isRow } = listConfig;

	const handleOnValueNumberChange = (countType, event) => {
		const count = event.target.value;

		setListConfig(config => {
			return { ...config, [countType]: Number(count) };
		});
	};

	const handleOnPickedList = () => {
		setListConfig(config => {
			return { ...config, isRow: !config.isRow };
		});
	};

	return (
		<StyledListImageCollection>
			<RowSizeSelection
				handleOnPickedList={handleOnPickedList}
				isRow={isRow}
				rowCount={rowCount}
				columnCount={columnCount}
				handleOnValueNumberChange={handleOnValueNumberChange}
			/>
			<StyledList>
				{isRow ? (
					<AutoSizer>
						{({ height, width }) => (
							<FixedList
								height={height}
								itemCount={rowCount}
								itemSize={100}
								width={width}
							>
								{PhraseRowCollection}
							</FixedList>
						)}
					</AutoSizer>
				) : (
					<AutoSizer>
						{({ height, width }) => (
							<FixedGrid
								columnCount={columnCount}
								columnWidth={80}
								height={height}
								rowCount={rowCount}
								rowHeight={80}
								width={width}
								overscanColumnsCount={5}
								overscanRowsCount={5}
							>
								{ImageGridCollection}
							</FixedGrid>
						)}
					</AutoSizer>
				)}
			</StyledList>
		</StyledListImageCollection>
	);
};

const ImageGridCollection = ({ columnIndex, rowIndex, style }) => {
	faker.seed(columnIndex + rowIndex + 3);
	let image = faker.random.image();
	faker.seed(columnIndex + rowIndex + 3);
	return (
		<div key={`${rowIndex}/${columnIndex}`} style={style}>
			<StyledImage src={image} />
		</div>
	);
};

const PhraseRowCollection = ({ index, style }) => {
	faker.seed(index + 2);
	let phrase = faker.hacker.phrase();

	return (
		<div key={index} style={style}>
			<StyledListItem children={phrase} />
		</div>
	);
};

const RowSizeSelection = ({
	rowCount,
	columnCount,
	handleOnValueNumberChange,
	isRow,
	handleOnPickedList
}) => {
	return (
		<StyledRowSize>
			<StyledButton onClick={handleOnPickedList}>
				Toggle Grid eller Row visning
			</StyledButton>
			<StyledLabel>
				{isRow
					? 'Select number of rows:'
					: 'Select number of rows & columns:'}
				<StyledInput
					value={rowCount}
					onChange={event =>
						handleOnValueNumberChange('rowCount', event)
					}
				/>
				{isRow ? (
					''
				) : (
					<StyledInput
						value={columnCount}
						onChange={event =>
							handleOnValueNumberChange('columnCount', event)
						}
					/>
				)}
			</StyledLabel>
		</StyledRowSize>
	);
};

export default RowGridCollection;
