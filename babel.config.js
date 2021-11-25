module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic',
        },
      ],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            screens: './src/screens',
            shared: './src/shared',
            styles: './src/styles',
          },
        },
      ],
    ],
  };
};
