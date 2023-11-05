const { getDefaultConfig } = require('expo/metro-config');

// Learn more https://docs.expo.io/guides/customizing-metro
//const { defaultConfig } = getDefaultConfig(__dirname);
const defaultConfig = {
    resolver: {
      assetExts: ['js', 'jsx', 'json'], // Your initial assetExts array
    },
  };
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;