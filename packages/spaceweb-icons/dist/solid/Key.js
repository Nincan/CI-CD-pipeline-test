"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidKey(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 13.588", "data-icon-name": "SolidKey" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.565 4.217A4.22 4.22 0 019.803 0C12.114.004 14.004 1.9 14 4.224a4.21 4.21 0 01-4.216 4.211 4.213 4.213 0 01-4.219-4.218zm5.61-.352a1.05 1.05 0 001.05-1.043 1.055 1.055 0 00-1.043-1.052 1.057 1.057 0 00-1.051 1.045 1.053 1.053 0 001.044 1.05zM.847 13.588c-.137 0-.149-.05-.026-.11l2.409-1.184c.123-.061.224.002.224.14v.905a.25.25 0 01-.25.25H.847zm1.562-1.405c-.138 0-.149-.05-.026-.11l2.409-1.184c.123-.061.224.002.224.14v.905a.25.25 0 01-.25.25H2.409z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.951 6.253l-.043.041c-1.62 1.62-3.24 3.24-4.858 4.861a.186.186 0 00-.048.117C-.001 12.019 0 12.767 0 13.514c0 .025.003.049.004.074H2.94v-.702h.514v-.702h1.111v-.417h.445v-1.07h.107c.433 0 .867-.001 1.3.001.058 0 .1-.014.142-.056.471-.474.944-.946 1.417-1.419l.058-.061C6.6 8.621 5.574 7.655 4.951 6.253z" })] })));
}
exports.default = SolidKey;
