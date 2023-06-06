"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidMessage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 20 20", "data-icon-name": "SolidMessage" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.101 6.866c-.68 0-1.231.548-1.231 1.225s.551 1.226 1.231 1.226 1.231-.55 1.231-1.226-.55-1.225-1.23-1.225zm3.899 0c-.68 0-1.23.548-1.23 1.225S9.32 9.317 10 9.317c.681 0 1.232-.55 1.232-1.226S10.682 6.866 10 6.866zm3.899 0c-.679 0-1.23.548-1.23 1.225s.551 1.226 1.23 1.226c.68 0 1.231-.55 1.231-1.226s-.551-1.225-1.231-1.225zm3.527-5.616A2.574 2.574 0 0120 3.824v8.534a2.575 2.575 0 01-2.574 2.575H5.023l-3.584 3.57a.844.844 0 01-1.432-.485L0 17.908V3.825A2.574 2.574 0 012.576 1.25h14.85z" }, void 0) }), void 0));
}
exports.default = SolidMessage;
