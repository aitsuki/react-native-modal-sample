module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // 注意：'react-native-reanimated/plugin' 必须放到 plugins 数组最后面
    plugins: ["react-native-reanimated/plugin"],
  };
};
