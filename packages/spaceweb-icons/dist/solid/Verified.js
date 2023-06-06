"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidVerified(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidVerified" }, props, { children: [(0, jsx_runtime_1.jsx)("defs", {}, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.85 1.139L7.24.029a.738.738 0 00-.21 0l-5.83.9a.626.626 0 00-.48.41.697.697 0 00-.05.25l.01.54c.06 5.16.12 10.03 6.35 11.83a1.112 1.112 0 00.17.02.644.644 0 00.2-.03c5.37-1.87 5.88-7.29 5.93-12.21a.611.611 0 00-.48-.6zM9.933 5.376L6.555 8.754l-.003.002-.001.002a.677.677 0 01-.135.089.716.716 0 01-.095.062.697.697 0 01-.526-.002.744.744 0 01-.071-.047.678.678 0 01-.16-.106l-.001-.002-.002-.002-1.498-1.522a.7.7 0 11.998-.982l1.003 1.019 2.878-2.879a.7.7 0 01.99.99z" }, void 0)] }), void 0));
}
exports.default = SolidVerified;
