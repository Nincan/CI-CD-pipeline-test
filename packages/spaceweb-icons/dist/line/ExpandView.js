"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineExpandView(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 13.345", "data-icon-name": "LineExpandView" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.107 6.11l-.1-.013a.678.678 0 00-.68.7v4.742a.43.43 0 01-.385.429h-9.13a.43.43 0 01-.453-.43V2.507a.496.496 0 01.136-.338.568.568 0 01.317-.136H6.57A.678.678 0 106.57.7H1.812a1.815 1.815 0 00-1.268.542A1.849 1.849 0 000 2.529v9.032a1.787 1.787 0 001.812 1.784h9.04a1.787 1.787 0 001.811-1.784V6.82a.7.7 0 00-.556-.708z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.434.045L8.835 0a.611.611 0 00-.521.384.586.586 0 00.113.632l1.835 1.83L5.55 7.541a.653.653 0 000 .948.68.68 0 00.476.204.703.703 0 00.498-.204l4.69-4.674 1.812 1.83a.703.703 0 00.408.157l.226-.045a.565.565 0 00.34-.52V.633a.588.588 0 00-.566-.587z" })] })));
}
exports.default = LineExpandView;
