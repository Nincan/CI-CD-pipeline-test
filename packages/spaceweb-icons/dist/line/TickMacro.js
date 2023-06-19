"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineTickMacro(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 12 12", "data-icon-name": "LineTickMacro" }, props, { children: (0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.328 1.34H4.672C2.102 1.34.01 3.43.01 6s2.09 4.661 4.66 4.661h2.657c2.57 0 4.661-2.09 4.661-4.66S9.9 1.338 7.33 1.338zm0 8.321H4.672c-2.019 0-3.661-1.642-3.661-3.66s1.642-3.662 3.66-3.662h2.657C9.347 2.34 10.99 3.982 10.99 6S9.347 9.661 7.33 9.661z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.506 4.407L5.38 6.533l-.886-.886a.5.5 0 1 0-.707.707l1.24 1.24a.498.498 0 0 0 .706 0l2.48-2.48a.5.5 0 1 0-.707-.707z" })] }) })));
}
exports.default = LineTickMacro;
