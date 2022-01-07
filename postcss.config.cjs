// postcss.config.cjs

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({ preset: ['default', { discardComments: { removeAll: true } }], })
  ],
};
