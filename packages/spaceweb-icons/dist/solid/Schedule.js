"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSchedule(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSchedule" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 100 14A7 7 0 007 0zm1.986 9.658a.595.595 0 01-.428-.18l-2.023-2.06a.597.597 0 01-.172-.42V2.734a.6.6 0 011.2 0v4.019l1.85 1.885a.598.598 0 01-.427 1.02z" }, void 0) }), void 0));
}
exports.default = SolidSchedule;
