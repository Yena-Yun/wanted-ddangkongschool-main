import { DefaultTheme } from 'styled-components';

const responsive = {
  desktop: '1200px',
  ipad: '768px',
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
		flex-direction: column
	`,
};

const theme = {
  responsive,
  color,
  common,
};

export default theme;
