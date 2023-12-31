"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLanguage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLanguage" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.6 11.59a.818.818 0 01-.302-.11.84.84 0 01-.38-.516l-.404-1.652H2.131l-.417 1.657a.836.836 0 01-1.623-.397l1.699-6.75a1.65 1.65 0 011.55-1.423 1.686 1.686 0 011.554 1.438l1.648 6.728a.836.836 0 01-.316.872.826.826 0 01-.297.139.783.783 0 01-.197.025zM4.105 7.64l-.766-3.133L2.55 7.64zm8.988 3.719a.83.83 0 01-.574-.228 9.18 9.18 0 01-2.016-3.24 9.25 9.25 0 01-2.02 3.244.842.842 0 01-.547.205.852.852 0 01-.61-.264.835.835 0 01.004-1.148A8.804 8.804 0 009.266 6.26h-1.35a.832.832 0 01-.59-.243.835.835 0 01-.001-1.181.828.828 0 01.59-.245h1.683a11.843 11.843 0 00.07-1.287.826.826 0 01.245-.59.834.834 0 011.424.59 11.649 11.649 0 00.073 1.287h1.682a.835.835 0 110 1.67h-1.35a8.686 8.686 0 001.929 3.662.835.835 0 01-.554 1.437z" }) })));
}
exports.default = SolidLanguage;
