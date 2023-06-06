"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCameraSwitch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCameraSwitch" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.071 3.42v8.315a1.39 1.39 0 001.386 1.386h11.086a1.39 1.39 0 001.386-1.386V3.421a1.39 1.39 0 00-1.386-1.386h-2.197L9.39.989a1.055 1.055 0 00-.769-.34H5.38a1.055 1.055 0 00-.77.34l-.955 1.046H1.457A1.39 1.39 0 00.071 3.421zm6.063 7.504a.518.518 0 01-.229-.866.498.498 0 01.492-.131A2.48 2.48 0 007 10.01a2.428 2.428 0 002.425-2.425h-.374a.343.343 0 01-.243-.59l.894-.893a.343.343 0 01.492 0l.894.894a.346.346 0 01-.243.589h-.38A3.466 3.466 0 017 11.049a3.58 3.58 0 01-.866-.125zM3.813 9.068l-.9-.901a.346.346 0 01.249-.59h.374A3.466 3.466 0 017 4.115a3.266 3.266 0 01.866.117.518.518 0 01.229.866.498.498 0 01-.492.132A2.477 2.477 0 007 5.153a2.428 2.428 0 00-2.425 2.425h.374a.343.343 0 01.243.589l-.894.9a.347.347 0 01-.485 0z" }, void 0) }), void 0));
}
exports.default = SolidCameraSwitch;
