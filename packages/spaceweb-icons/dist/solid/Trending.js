"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTrending(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTrending" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M10.016 3.453a.41.41 0 01.461.183 10.958 10.958 0 011.816 5.56 4.803 4.803 0 01-9.606 0 9.157 9.157 0 01.715-3.378 15.93 15.93 0 011.55-2.89A20.057 20.057 0 017.2.12a.41.41 0 01.7.29v3.438a.908.908 0 001.816 0 .41.41 0 01.3-.395zm-.2 6.047a.41.41 0 00.411-.41V7.333a.41.41 0 00-.41-.41H8.06a.41.41 0 000 .82h.767L7.074 9.495l-.952-.952a.41.41 0 00-.58 0l-.932.932a.41.41 0 10.58.58l.642-.642.952.952a.41.41 0 00.58 0l2.043-2.042v.767a.41.41 0 00.41.41z" }) })));
}
exports.default = SolidTrending;
