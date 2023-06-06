"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidResetColour(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidResetColour" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.064 1.14 5.378.69A1.244 1.244 0 0 1 7.48.78l1.473 2.58a23.962 23.962 0 0 1 2.01 4.694ZM3.444 4.4.91 1.549A.93.93 0 0 1 2.3.312l10.792 12.14a.93.93 0 1 1-1.39 1.236l-1.302-1.465A5.363 5.363 0 0 1 6.502 14c-2.389 0-4.977-1.808-4.977-4.562 0-1.787.872-3.26 1.92-5.037Z" }, void 0) }), void 0));
}
exports.default = SolidResetColour;
