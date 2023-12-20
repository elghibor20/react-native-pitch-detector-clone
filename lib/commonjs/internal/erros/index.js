"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PitchDetectorError = void 0;
var _reactNative = require("react-native");
var _types = require("../../types");
const base = `The package 'react-native-pitch-detector' find a error. Make sure: \n\n` + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const linking = `The package 'react-native-pitch-detector' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  android: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const permission = `The package 'react-native-pitch-detector' need audio record permission. Make sure: \n\n` + _reactNative.Platform.select({
  ios: '- You have added Microphone access permission before start record.',
  android: `- You have added '<uses-permission android:name="android.permission.RECORD_AUDIO" />' on AndroidManifest.xml and request permission before start record.\n`
});
class PitchDetectorError {
  constructor(type) {
    if (type === _types.PitchDetectorErrors.LINKING_ERROR) {
      return new Error(linking);
    }
    if (type === _types.PitchDetectorErrors.PERMISSIONS_ERROR) {
      return new Error(permission);
    }
    return new Error(base);
  }
}
exports.PitchDetectorError = PitchDetectorError;
//# sourceMappingURL=index.js.map