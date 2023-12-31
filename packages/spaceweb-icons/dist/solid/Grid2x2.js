"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidGrid2x2(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidGrid2x2" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.405 2.703H.575a.5.5 0 00-.5.5v8.553a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5V3.203a.5.5 0 00-.5-.5zm-.5 4.206H7.49V3.703h5.415zM6.49 3.703V6.91H1.076V3.703zM1.076 7.91H6.49v3.347H1.076zm6.414 3.347V7.91h5.415v3.347z" }) })));
}
exports.default = SolidGrid2x2;
