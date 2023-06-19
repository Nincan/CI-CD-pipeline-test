"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLock(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLock" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.115 4.797H10.03V3.171a3.169 3.169 0 00-6.338 0v1.626h-.808a1.476 1.476 0 00-1.478 1.479v6.248a1.474 1.474 0 001.478 1.468h8.23a1.474 1.474 0 001.478-1.468V6.276a1.476 1.476 0 00-1.478-1.479zM7.72 11.51a.694.694 0 01-1.389 0v-1.23a.871.871 0 01-.394-.759 1.064 1.064 0 012.13 0 1.046 1.046 0 01-.383.801zm.93-6.712H5.084V3.171a1.784 1.784 0 113.568 0z" }) })));
}
exports.default = SolidLock;
