"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineTwitterRetweet(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineTwitterRetweet" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.53 11.614a.402.402 0 01-.4.4H4.044a1.88 1.88 0 01-1.882-1.883V3.31L.682 4.743a.395.395 0 01-.28.111.4.4 0 01-.28-.688L2.266 2.1a.401.401 0 01.56 0l2.067 2.066a.402.402 0 01-.569.569L2.964 3.373v6.758a1.087 1.087 0 001.081 1.082h4.084a.397.397 0 01.4.4m5.358-2.338a.395.395 0 00-.56-.017L11.804 10.7V3.86a1.878 1.878 0 00-1.882-1.874H5.839a.397.397 0 00-.4.4.401.401 0 00.4.401h4.084a1.08 1.08 0 011.081 1.073v6.76L9.643 9.266a.4.4 0 00-.569.561l2.066 2.067a.395.395 0 00.56.007l2.179-2.066a.393.393 0 00.008-.56", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = LineTwitterRetweet;
