"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineTiktokDiscover(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTiktokDiscover" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.796 10.885a6.043 6.043 0 1 1 .98-.919l2.987 2.986a.336.336 0 0 1 0 .475l-.475.475a.335.335 0 0 1-.475 0Zm1.085-4.842a4.7 4.7 0 1 1-4.7-4.7 4.7 4.7 0 0 1 4.7 4.7Z", fillRule: "evenodd" }) })));
}
exports.default = LineTiktokDiscover;
