import color from 'color';

const textStyles = {
  white: {
    color: 'white',
  },
  title: {
    fontSize: 22,
  },
  subtitle: {
    fontSize: 17,
  },
  subtle: {
    color: '#bdbdbd',
  },
};
const spacing = {
  sm: 6,
  md: 12,
  lg: 24,
  xl: 36,
};

const colors = {
  overlay: color('#282828')
    .alpha(0.8)
    .toString(),
};

export { textStyles, spacing, colors };
