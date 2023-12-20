"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativePermissions = require("react-native-permissions");
const BLOCKED = 'Permission is denied and not requestable anymore';
const DENIED = "Permission hasn't been requested / is denied but requestable";
const GRANTED = 'Permission is granted';
const LIMITED = 'Permission is limited: some actions are possible';
const UNAVAILABLE = 'This feature is not available.';
const MESSAGES = new Map([[_reactNativePermissions.RESULTS.BLOCKED, BLOCKED], [_reactNativePermissions.RESULTS.DENIED, DENIED], [_reactNativePermissions.RESULTS.GRANTED, GRANTED], [_reactNativePermissions.RESULTS.LIMITED, LIMITED], [_reactNativePermissions.RESULTS.UNAVAILABLE, UNAVAILABLE]]);
var _default = (targetPermission, TAG) => {
  const CheckPermission = async compare => {
    try {
      const result = await (0, _reactNativePermissions.check)(targetPermission);
      console.log(TAG, MESSAGES.get(result));
      return compare ? compare(result) : result;
    } catch (error) {
      console.log(TAG, error.message);
      return null;
    }
  };
  const RequestPermission = async (rationale, compare) => {
    try {
      const result = await (0, _reactNativePermissions.request)(targetPermission, rationale);
      console.log(TAG, MESSAGES.get(result));
      return compare ? compare(result) : result;
    } catch (error) {
      console.log(TAG, error.message);
      return null;
    }
  };
  return {
    CheckPermission,
    RequestPermission
  };
};
exports.default = _default;
//# sourceMappingURL=index.js.map