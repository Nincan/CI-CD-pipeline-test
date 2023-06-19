"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMarket(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMarket" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.444.778H1.556a.778.778 0 0 0 0 1.556h10.888a.778.778 0 1 0 0-1.556zM14 8.556V7.01a.11.11 0 0 0-.002-.022L13.24 3.2a.11.11 0 0 0-.108-.089H.868A.11.11 0 0 0 .76 3.2L.002 6.99A.11.11 0 0 0 0 7.01v1.546h.778v4.556c0 .06.05.11.11.11h7.557a.11.11 0 0 0 .11-.11V8.666c0-.061.05-.11.111-.11h2.89a.11.11 0 0 1 .11.11v4.446c0 .06.05.11.111.11h1.335a.11.11 0 0 0 .11-.11V8.556H14zm-7.11 3.11H2.443a.11.11 0 0 1-.11-.11v-2.89a.11.11 0 0 1 .11-.11h4.445a.11.11 0 0 1 .111.11v2.89a.11.11 0 0 1-.11.11z" }) })));
}
exports.default = SolidMarket;
