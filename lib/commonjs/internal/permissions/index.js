"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUnavailable = exports.isLimited = exports.isGranted = exports.isDenied = exports.isBlocked = exports.Permissions = void 0;
var _reactNative = require("react-native");
var _reactNativePermissions = require("react-native-permissions");
var _factory = _interopRequireDefault(require("./factory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const isDenied = status => status === _reactNativePermissions.RESULTS.DENIED;
exports.isDenied = isDenied;
const isGranted = status => status === _reactNativePermissions.RESULTS.GRANTED;
exports.isGranted = isGranted;
const isBlocked = status => status === _reactNativePermissions.RESULTS.BLOCKED;
exports.isBlocked = isBlocked;
const isLimited = status => status === _reactNativePermissions.RESULTS.LIMITED;
exports.isLimited = isLimited;
const isUnavailable = status => status === _reactNativePermissions.RESULTS.UNAVAILABLE;
exports.isUnavailable = isUnavailable;
class Permissions {
  static async audio() {
    const MICROPHONE_PERMISSION = _reactNative.Platform.select({
      android: _reactNativePermissions.PERMISSIONS.ANDROID.RECORD_AUDIO,
      ios: _reactNativePermissions.PERMISSIONS.IOS.MICROPHONE
    });
    const rationale = {
      title: 'Acesso ao microfone',
      message: 'Para que possamos executar',
      buttonPositive: 'Permitir',
      buttonNegative: 'Negar'
    };
    const audio = (0, _factory.default)(MICROPHONE_PERMISSION, 'AUDIO PERMISSION:');
    const denied = await audio.CheckPermission(isDenied);
    const blocked = await audio.CheckPermission(isBlocked);
    if (denied || blocked) {
      return await audio.RequestPermission(rationale, isGranted);
    }
    return await audio.CheckPermission(isGranted);
  }
}
exports.Permissions = Permissions;
//# sourceMappingURL=index.js.map