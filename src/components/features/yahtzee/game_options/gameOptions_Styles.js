import styled from 'styled-components';

export const StyledContentTransition = styled.div`
	height: 100%;

	&.display-content-view-enter {
		opacity: 0;
	}
	&.display-content-view-enter-active {
		opacity: 1;
		transition: opacity 2s;
	}
	&.display-content-view-exit {
		opacity: 0;
	}
	&.display-content-view-exit-active {
		opacity: 0;
		transition: opacity 2s;
	}
`;
export const StyledGameOptions = styled.div`
	width: 100%;
`;
