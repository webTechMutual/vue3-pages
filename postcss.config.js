module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 360,
      exclude: /node_modules/
    },
  },
};