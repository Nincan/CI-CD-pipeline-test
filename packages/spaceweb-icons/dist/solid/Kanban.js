"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidKanban(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidKanban" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.934 14H1.066a.566.566 0 01-.566-.566V.566C.5.253.753 0 1.066 0h3.868c.313 0 .566.253.566.566v12.868a.566.566 0 01-.566.566zm7.994-4.782H9.072a.572.572 0 01-.572-.572V.572C8.5.256 8.756 0 9.072 0h3.856c.316 0 .572.256.572.572v8.074a.572.572 0 01-.572.572z" }) })));
}
exports.default = SolidKanban;
