import styled from 'styled-components';

export const StyledNavbar = styled.nav`
	height: 50px;
	width: 100%;

	display: flex;
	flex-direction: row;

	justify-content: space-around;
	align-items: center;

	background-color: #6c49b8;
`;

export const StyledName = styled.div`
	padding: 0 15px 0 15px;
	color: white;
`;

export const StyledScrollSpyLink = styled.a`
	height: auto;
	padding: 12.5px 15px 12.5px 15px;
	color: white;
	text-decoration: none;

	:hover {
		background-color: white;
		color: #6c49b8;
	}
`;
