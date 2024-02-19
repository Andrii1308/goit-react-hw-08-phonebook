export const theme = Object.freeze({
  colors: {
    accent: '#cbd6c6',
    white: '#6a6acd',
    light: 'rgba(0, 0, 0, 0.5)',
    dark: '#777777',
    primary: '#02646d',
    mainBackground: ['linear-gradient(to top, #bee0cf, #96d3bc, #ffffff)'],
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e7a',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
