"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidExit(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidExit" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.568 9.539a.788.788 0 01-.551-.224.806.806 0 01-.246-.586l-.004-.917H6.536a.81.81 0 01-.001-1.621h4.231v-.888a.838.838 0 01.249-.618.784.784 0 01.55-.224.799.799 0 01.578.25l1.631 1.726a.863.863 0 01.218.451.774.774 0 01.006.173.823.823 0 01-.212.493l-1.643 1.737a.789.789 0 01-.575.248z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M11.567 10.538a1.799 1.799 0 01-1.794-1.726H6.536a1.81 1.81 0 01-.008-3.621H9.77a1.832 1.832 0 01.547-1.224 1.682 1.682 0 011.505-.479V1.5a1.5 1.5 0 00-1.5-1.5H1.515a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h8.808a1.5 1.5 0 001.5-1.5v-1.987a1.805 1.805 0 01-.256.025z" }, void 0)] }), void 0));
}
exports.default = SolidExit;
