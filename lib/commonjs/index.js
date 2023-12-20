"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _pitchDetector = require("./internal/pitch-detector");
Object.keys(_pitchDetector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _pitchDetector[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pitchDetector[key];
    }
  });
});
//# sourceMappingURL=index.js.map