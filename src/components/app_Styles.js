import styled, { createGlobalStyle } from 'styled-components';

// App - Component
export const StyledApp = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	align-items: center;
`;

export const StyledSection = styled.section`
	position: relative;
	width: 100%;
	height: 100%;
	margin-top: 60px;
`;
export const StyledSectionHeader = styled.h1`
	width: 100%;
	height: 50px;
	position: relative;
	text-align: center;
	margin-bottom: 40px;

	font-size: 40px;
	color: white;
`;

export const StyledSectionContent = styled.div`
	width: 100%;
	height: 100%;

	position: relative;
`;

// Global-Style
export const GlobalStyle = createGlobalStyle`
  body {
   	margin: 0px;
	padding: 0px;
	font-family: system-ui;
	background-color: #6c49b8;
  }
`;
