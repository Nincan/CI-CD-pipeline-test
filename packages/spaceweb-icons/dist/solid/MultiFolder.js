"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMultiFolder(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMultiFolder" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.624 2.342H7.989l-.933-.933a1.328 1.328 0 00-.94-.39H3.355A1.302 1.302 0 002.096 2.05h2.04a2.315 2.315 0 011.648.683l.64.64h4.221A2.327 2.327 0 0112.97 5.7v5.18a1.31 1.31 0 00.98-1.254v-5.96a1.328 1.328 0 00-1.325-1.324z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.645 4.375H6.01l-.933-.933a1.328 1.328 0 00-.94-.391H1.376A1.322 1.322 0 00.058 4.375l-.006 7.283a1.328 1.328 0 001.324 1.324h9.269a1.328 1.328 0 001.324-1.324V5.699a1.328 1.328 0 00-1.324-1.324z" })] })));
}
exports.default = SolidMultiFolder;
