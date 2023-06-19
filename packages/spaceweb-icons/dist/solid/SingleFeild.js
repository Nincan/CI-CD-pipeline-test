"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSingleFeild(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSingleFeild" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.675 3.238H1.337A1.368 1.368 0 0 0 0 4.632v4.736a1.368 1.368 0 0 0 1.337 1.394h11.338A1.362 1.362 0 0 0 14 9.368V4.632a1.362 1.362 0 0 0-1.325-1.394ZM7.704 9.355V4.641l4.886-.026a.032.032 0 0 1 .004.017l.081 4.723Z" }), (0, jsx_runtime_1.jsx)("path", { d: "m11.018 6-.69.72-.69-.72a.603.603 0 0 0-.87.833l1.125 1.175a.604.604 0 0 0 .87 0l1.125-1.175a.603.603 0 0 0-.87-.834Z" })] })));
}
exports.default = SolidSingleFeild;
