"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCreditCardsvg(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCreditCardsvg" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.597 1.403H1.403a1.388 1.388 0 00-1.392 1.4l-.007 8.395a1.394 1.394 0 001.4 1.399h11.193a1.394 1.394 0 001.4-1.4V2.803a1.394 1.394 0 00-1.4-1.399zm-.7 9.795H2.103a.702.702 0 01-.7-.7V7h11.194v3.498a.702.702 0 01-.7.7zm.7-6.996H1.403v-1.4h11.194z" }) })));
}
exports.default = SolidCreditCardsvg;
