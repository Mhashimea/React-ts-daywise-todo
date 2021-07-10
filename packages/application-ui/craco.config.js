const CracoLessPlugin = require('craco-less');
const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#0f123f' },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: sassResourcesLoader,
      options: {
        resources: './src/assets/scss/index.scss',
      },
    },
  ],
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
