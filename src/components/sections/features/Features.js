import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

import {
	StyledRoutes,
	StyledFeatures,
	StyledFeatureReplacement
} from './features_Styles';

import FeaturesGrid from './features_grid/FeaturesGrid';
import Feature from './feature/Feature';

// Features
import Yahtzee from '../../features/yahtzee/Yahtzee';
import ColorGame from '../../features/color_game/ColorGame';
import LightsOut from '../../features/lights_out/LightsOut';
import TicTacToe from '../../features/tic_tac_toe/TicTacToe';
import Hangman from '../../features/hangman/Hangman';
import RowGridCollection from '../../features/row_grid_collection/RowGridCollection';

const FeaturesRoutes = ({ on }) => {
	const findFeature = id => {
		return featuresProps.find(feature => {
			return feature.id === id;
		});
	};

	return (
		<StyledRoutes>
			<Switch>
				<Route
					path="/"
					exact
					render={routeProps => (
						<StyledFeatureReplacement>
							Prøv en feature:
							<br />
							Klik på den pågældende overskrift
						</StyledFeatureReplacement>
					)}
				/>
				<Route
					path="/feature/:id"
					exact
					render={routeProps => (
						<Feature
							feature={findFeature(routeProps.match.params.id)}
						/>
					)}
				/>
			</Switch>
		</StyledRoutes>
	);
};

const Features = () => {
	const [on, toggle] = useState(true);

	return (
		<StyledFeatures>
			<Waypoint onEnter={() => {}} bottomOffset="30%" />
			<BrowserRouter>
				<FeaturesGrid
					on={on}
					toggle={toggle}
					features={featuresProps}
				/>

				<FeaturesRoutes on={on} />
			</BrowserRouter>
		</StyledFeatures>
	);
};

export default Features;

const featuresProps = [
	{
		name: 'Yahtzee',
		id: 'yahtzee',
		component: <Yahtzee />,
		css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
		desc:
			"Et spil fra 'The Modern React Bootcamp'. Koden var skrevet med React-Classes, som jeg har omskrevet til at bruge React-Hooks. CSS'en har jeg implementeret med Styled-Components. Derudover har jeg tilført em multiplayer-funktion, hvor der kan vælges flere spillere, samt indtastes navne, hvorefter der vises et leadeboard, hvor man kan se stillingen og de enkeltes spilleres score.",
		componentPackages: ['react-transition-group', 'styled-components']
	},
	{
		name: 'Kryds-og-Bolle',
		id: 'kryds-og-bolle',
		component: <TicTacToe />,
		css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
		desc:
			"Spillet gennemgåes i React's docs med udgangspunkt i klasser. Dette har jeg omskrevet til React-Hooks, samt tilføjet en stillingsoversigt og to knapper, hvor man kan starte nyt spil og nulstille stillingen.",
		componentPackages: ['styled-components']
	},
	{
		name: 'Color - Game',
		id: 'color-game',
		component: <ColorGame />,
		css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
		desc:
			"Et spil fra 'The Web Developer Bootcamp' skrevet med ES5-JavaScript. Dette har jeg omskrevet til ES6, samt brugt React til at håndtere interaktionen.",
		componentPackages: ['styled-components']
	},
	{
		name: 'Row-Grid-Collection',
		id: 'react-window_image',
		component: <RowGridCollection />,
		css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
		desc:
			'Lille feature, som jeg har implementeret med react-window, react-virtualized-auto-sizer og faker.',
		componentPackages: [
			'react-window',
			'styled-components',
			'react-virtualized-auto-sizer',
			'faker',
			'react-transition-group'
		]
	},
	{
		name: 'LightsOut',
		id: 'lights-out',
		component: <LightsOut />,
		css: 'linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
		desc:
			"Et spil fra 'The Modern React Bootcamp'. Koden var skrevet med React-Classes, som jeg har omskrevet til at bruge React-Hooks. CSS'en har jeg implementeret med Styled-Components.",
		componentPackages: ['styled-components']
	},
	{
		name: 'Hangman-Game',
		id: 'hangman-game',
		component: <Hangman />,
		css: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
		desc:
			"Et spil fra 'The Modern React Bootcamp'. Koden var skrevet med React-Classes, som jeg har omskrevet til at bruge React-Hooks. CSS'en har jeg implementeret med Styled-Components.",
		componentPackages: ['styled-components']
	}
];
