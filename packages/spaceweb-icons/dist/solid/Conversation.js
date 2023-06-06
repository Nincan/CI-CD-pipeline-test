"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidConversation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidConversation" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.2 2.1H.8a.8.8 0 00-.8.8v8.2a.8.8 0 00.8.8h12.4a.8.8 0 00.8-.8V2.9a.8.8 0 00-.8-.8zm-.53 2.31L7.36 8.4a.58.58 0 01-.07.03.57.57 0 01-.06.03.6.6 0 01-.23.05.6.6 0 01-.23-.05.57.57 0 01-.06-.03.58.58 0 01-.07-.03L1.33 4.4a.6.6 0 01.72-.96L7 7.15l4.95-3.7a.6.6 0 01.72.96z" }, void 0) }), void 0));
}
exports.default = SolidConversation;
