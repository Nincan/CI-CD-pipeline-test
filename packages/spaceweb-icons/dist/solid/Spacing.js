"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSpacing(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSpacing" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.979 8.742h-.002l-.012-.002h-.96V5.26h.9c.011 0 .02-.005.032-.006.017.001.033.01.05.01a.667.667 0 00.469-.189.68.68 0 000-.97L2.81 2.456a.675.675 0 00-.953 0l-1.65 1.65a.676.676 0 00.476 1.153h.002l.011.002h.961v3.48h-.9c-.012 0-.021.006-.032.006-.018 0-.033-.01-.051-.01a.667.667 0 00-.468.189.68.68 0 00-.001.97l1.647 1.651a.675.675 0 00.954 0l1.65-1.651a.676.676 0 00-.476-1.153zM.6 1.2h12.8a.6.6 0 000-1.2H.6a.6.6 0 000 1.2zm12.8 3.366H7.6a.6.6 0 000 1.2h5.8a.6.6 0 100-1.2zm0 3.668H7.6a.6.6 0 100 1.2h5.8a.6.6 0 100-1.2zm0 4.566H.6a.6.6 0 100 1.2h12.8a.6.6 0 100-1.2z" }) })));
}
exports.default = SolidSpacing;
