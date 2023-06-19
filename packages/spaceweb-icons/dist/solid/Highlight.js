"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidHighlight(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidHighlight" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.571 8.967l-.003.014-.002.005-.273 1.025a.48.48 0 00.129.467 2.559 2.559 0 01.722.977l-.517 1.939a.48.48 0 00.463.603L6.16 14a.48.48 0 00.465-.356l.328-1.232a.492.492 0 00.13-.128 1.905 1.905 0 011.137-.521.48.48 0 00.356-.344l.274-1.026.002-.007.002-.012 1.856-8.254a.479.479 0 00-.279-.546L6.861.039a.48.48 0 00-.648.3L3.57 8.968zm.8.73l3.429.913-.077.29a3.132 3.132 0 00-1.189.576l-1.511-.403a3.485 3.485 0 00-.733-1.08l.08-.297z", fillRule: "evenodd" }) })));
}
exports.default = SolidHighlight;
