"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMessageQueue(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMessageQueue" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.008 3.152h9.457a.788.788 0 0 0 0-1.576H2.008a.788.788 0 1 0 0 1.576ZM2.402.788h8.668a.394.394 0 0 0 0-.788H2.402a.394.394 0 0 0 0 .788ZM13.565 5.419a1.445 1.445 0 0 0-.355-1.05 1.398 1.398 0 0 0-1.069-.428H1.856A1.456 1.456 0 0 0 .43 5.368v4.24q-.003.06 0 .12a1.366 1.366 0 0 0 1.425 1.306l3.83.018 3.157 2.742a.8.8 0 0 0 .522.206.705.705 0 0 0 .294-.065.749.749 0 0 0 .426-.708v-2.193h2.056a1.322 1.322 0 0 0 .187 0 1.336 1.336 0 0 0 1.24-1.427ZM3.404 8.27a.835.835 0 1 1 .834-.835.835.835 0 0 1-.834.835Zm3.332 0a.835.835 0 1 1 .835-.835.835.835 0 0 1-.835.835Zm3.333 0a.835.835 0 1 1 .835-.835.835.835 0 0 1-.835.835Z" }) })));
}
exports.default = SolidMessageQueue;
