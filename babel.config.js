module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@screens': './src/screens',
            '@shared': './src/shared',
            '@styles': './src/styles',
          },
        },
      ],
      'react-native-reanimated/plugin', //react-native-reanimated/plugin need to be last item in plugins array
    ],
  };
};
