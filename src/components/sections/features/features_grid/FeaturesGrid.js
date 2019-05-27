import React, { useState, useRef } from 'react';
import { animated, useTrail, useSpring, useChain, config } from 'react-spring';
import Card from 'react-bootstrap/Card';
import {
	StyledFeatureCarousel,
	StyledFeatureItem,
	StyledFeaturesWrapper,
	StyledLinks,
	StyledLinkButton,
	StyledButton,
	StyledFeatureName,
	StyledCurrentFeatureDescription,
	StyledCurrentFeatureContainer,
	StyledCurrentFeatureTitle,
	StyledCurrentFeatureText,
	StyledCurrentFeaturePackages,
	StyledCurrentFeaturePackage
} from './featuresGrid_Styles';

const FeaturesGrid = ({ features, toggle, on }) => {
	const [currentFeature, setCurrentFeature] = useState({ id: 0 });
	const springRef = useRef();
	const scaleDownSpring = useSpring({
		ref: springRef,
		from: { width: '0%', height: '0%' },
		to: {
			width: on ? '100%' : '0%',
			height: on ? '100%' : '0%'
		},
		config: config.gentle
	});

	const expandFeatureDesc = useRef();
	const { opacity, display, transform } = useSpring({
		ref: expandFeatureDesc,
		from: {
			opacity: 0,
			display: 'none',
			transform: 'scale(0)'
		},
		to: {
			opacity: on ? 0 : 1,
			display: 'block',
			transform: on ? 'scale(0)' : 'scale(1)'
		},
		config: config.gentle
	});

	const trailRef = useRef();
	const trail = useTrail(features.length, {
		ref: trailRef,
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

	useChain(
		on
			? [expandFeatureDesc, springRef, trailRef]
			: [trailRef, springRef, expandFeatureDesc],
		on ? [0, 0, 1] : [0, 1, 1]
	);

	return (
		<StyledFeatureCarousel>
			<StyledFeaturesWrapper
				style={{
					width: scaleDownSpring.width,
					height: scaleDownSpring.height,
					backgroundColor: scaleDownSpring.backgroundColor
				}}
			>
				{trail.map((animation, key) => {
					return (
						<animated.div key={key} style={animation}>
							<StyledFeatureItem
								backgroundColor={features[key].css}
							>
								<StyledFeatureName>
									{features[key].name}
								</StyledFeatureName>

								<StyledLinks
									to={`/feature/${features[key].id}`}
									onClick={() => [
										toggle(false),
										setCurrentFeature({ id: key })
									]}
								>
									<StyledLinkButton variant="outline-dark">
										Prøv
									</StyledLinkButton>
								</StyledLinks>
							</StyledFeatureItem>
						</animated.div>
					);
				})}

				<StyledCurrentFeatureDescription
					style={{
						opacity: opacity,
						display: display,
						transform: transform
					}}
					className="text-center"
					bg="light"
				>
					<StyledCurrentFeatureContainer>
						<StyledCurrentFeatureTitle>
							{features[currentFeature.id].name}
						</StyledCurrentFeatureTitle>
						<StyledCurrentFeatureText>
							{features[currentFeature.id].desc}
						</StyledCurrentFeatureText>
						<StyledCurrentFeaturePackages>
							<Card.Header style={{ fontWeight: '500' }}>
								Packages
							</Card.Header>
							{features[currentFeature.id].componentPackages.map(
								componentPackage => (
									<StyledCurrentFeaturePackage
										key={componentPackage}
									>
										{componentPackage}
									</StyledCurrentFeaturePackage>
								)
							)}
						</StyledCurrentFeaturePackages>
						<StyledButton onClick={() => toggle(true)}>
							Se alle features
						</StyledButton>
					</StyledCurrentFeatureContainer>
				</StyledCurrentFeatureDescription>
			</StyledFeaturesWrapper>
		</StyledFeatureCarousel>
	);
};

export default FeaturesGrid;
