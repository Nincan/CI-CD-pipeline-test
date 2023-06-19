"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidClock(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidClock" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { x: "-0.31587", y: "-0.69027", width: "13.21745", height: "13.21745", fill: "none" }), (0, jsx_runtime_1.jsx)("rect", { x: "-0.31587", y: "-0.69027", width: "13.21745", height: "13.21745", fill: "none" }), (0, jsx_runtime_1.jsx)("path", { d: "M7,0a7,7,0,1,0,7,7A7.00055,7.00055,0,0,0,7,0ZM9.72222,9.72222a.77454.77454,0,0,1-1.09666,0l-2.17-2.17A.7772.7772,0,0,1,6.22222,7V3.88889A.78007.78007,0,0,1,7,3.11111H7a.78007.78007,0,0,1,.77778.77778V6.68111L9.72222,8.62556A.77454.77454,0,0,1,9.72222,9.72222Z" })] })));
}
exports.default = SolidClock;
