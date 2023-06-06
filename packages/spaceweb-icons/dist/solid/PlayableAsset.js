"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPlayableAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPlayableAsset" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.28 5.34a.42.42 0 10.42.41.42.42 0 00-.42-.41zM5.79 5.34h-.42v.83h-.83v.41h.83v.84h.42v-.84h.83v-.41h-.83v-.83z" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "9.11", cy: "7", r: ".42" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.13 3.4L9.91.38A1.33 1.33 0 009 0H1.85A1.43 1.43 0 00.47 1.48v11.05A1.43 1.43 0 001.85 14h10.37a1.43 1.43 0 001.38-1.47V4.5a1.52 1.52 0 00-.47-1.1zM9.97 9.92a1.06 1.06 0 01-.75-.31l-.94-.94h-2.5l-.93.94a1.06 1.06 0 01-1.8-.9l.45-3.18a1.66 1.66 0 011.65-1.43h3.77a1.66 1.66 0 011.64 1.43l.46 3.18a1.06 1.06 0 01-1.05 1.21z" }, void 0)] }), void 0));
}
exports.default = SolidPlayableAsset;
