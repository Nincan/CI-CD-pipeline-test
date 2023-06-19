"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Slider.svg instead.
 */
function LineSlider(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineSlider" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.568 4.225a2.044 2.044 0 00-3.969 0H0v1h8.6a2.044 2.044 0 003.968 0H14v-1zm-1.984 1.553a1.053 1.053 0 111.053-1.053 1.054 1.054 0 01-1.053 1.053zM3.417 7.222a2.051 2.051 0 00-1.985 1.553H0v1h1.432a2.044 2.044 0 003.969 0H14v-1H5.4a2.052 2.052 0 00-1.984-1.553zm0 3.106A1.053 1.053 0 114.47 9.275a1.054 1.054 0 01-1.053 1.053z" }) })));
}
exports.default = LineSlider;
