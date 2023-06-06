"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAudioAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAudioAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.062 0H1.936a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h10.126a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zM8.519 9.839v.002a.234.234 0 01-.373.176L5.811 8.145a.234.234 0 00-.132-.044H4.342a.197.197 0 01-.198-.22V6.12a.203.203 0 01.198-.22H5.68a.275.275 0 00.143-.044l2.335-1.873a.224.224 0 01.362.176zM9.75 8.25v.001a.21.21 0 01-.146.062.209.209 0 01-.153-.347l.007-.007A1.374 1.374 0 009.853 7a1.33 1.33 0 00-.396-.958.201.201 0 01-.008-.284l.008-.008a.201.201 0 01.284-.008l.008.008a1.762 1.762 0 010 2.5z" }, void 0) }), void 0));
}
exports.default = SolidAudioAsset;
