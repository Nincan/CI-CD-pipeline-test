"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTicketNotification(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTicketNotification" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.069 2.435a2.93 2.93 0 0 1 .106-.745H1.717A1.712 1.712 0 0 0 0 3.397v8.416a1.712 1.712 0 0 0 1.708 1.717h8.416a1.718 1.718 0 0 0 1.717-1.717V5.382a2.96 2.96 0 0 1-2.772-2.947Zm-.435 2.877a.845.845 0 0 1-.574.173H6.672v4.754a.973.973 0 0 1-.209.678.707.707 0 0 1-.542.229.716.716 0 0 1-.551-.232.963.963 0 0 1-.21-.675V5.485H3.771A.829.829 0 0 1 3.2 5.31a.65.65 0 0 1 .009-.937.843.843 0 0 1 .562-.17H8.06a.838.838 0 0 1 .577.176.606.606 0 0 1 .198.467.596.596 0 0 1-.201.465Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.034.47A1.965 1.965 0 1 0 14 2.435 1.965 1.965 0 0 0 12.034.47Z" })] })));
}
exports.default = SolidTicketNotification;
