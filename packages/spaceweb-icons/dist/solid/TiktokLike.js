"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTiktokLike(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTiktokLike" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "m13.997 4.503-.01.025A3.97 3.97 0 0 0 10 .511a3.865 3.865 0 0 0-3 1.333A3.865 3.865 0 0 0 4 .51a3.989 3.989 0 0 0-4 4.166A5.758 5.758 0 0 0 .637 7.18l-.035-.036c.025.054.064.103.09.157a9.151 9.151 0 0 0 .551.949c.03.044.054.09.085.135.243.354.51.695.791 1.027.078.093.159.18.24.272.219.248.441.49.67.724.085.086.167.172.252.256.296.293.593.578.886.846 1.2 1.1 2.166 1.834 2.833 1.834.667 0 1.607-.729 2.834-1.834C11.82 9.72 14 7.344 14 4.677q0-.087-.003-.174Z", fillRule: "evenodd" }) })));
}
exports.default = SolidTiktokLike;
