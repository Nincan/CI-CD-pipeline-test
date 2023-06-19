"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFallback(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFallback" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.704 0h12.592a.689.689 0 01.498.216.753.753 0 01.206.52v12.528a.753.753 0 01-.206.52.689.689 0 01-.498.216H.704a.69.69 0 01-.498-.216.753.753 0 01-.206-.52V.736A.765.765 0 01.054.454.74.74 0 01.206.216a.703.703 0 01.229-.16A.678.678 0 01.705 0zM2 3a1 1 0 011-1h3a1 1 0 010 2H3a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 010 2H3a1 1 0 01-1-1z", fillRule: "evenodd" }) })));
}
exports.default = SolidFallback;
