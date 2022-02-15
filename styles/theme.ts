import { DefaultTheme } from 'styled-components';

const media = {
  desktop: '1200px',
  tablet: '768px',
};

const color: DefaultTheme = {
  primary: '#fdc441',
  default: '#333333',
  white: '#fff',
};

const common: DefaultTheme = {
  flexCenter: `
		display: flex;
		justify-content: center;
		align-items: center;
	`,
  flexColumn: `
		display: flex;
		flex-direction: column;
	`,
};

const theme = {
  media,
  color,
  common,
};

export default theme;
