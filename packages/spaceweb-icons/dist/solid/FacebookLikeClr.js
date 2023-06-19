"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFacebookLikeClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFacebookLikeClr" }, props, { children: (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fillRule: "evenodd", clipRule: "evenodd" }, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#3380FF", d: "M7 14c3.855 0 7-3.145 7-7s-3.145-7-7-7-7 3.145-7 7 3.145 7 7 7z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M7.233 3.507V3.05a.574.574 0 01.558-.566c.285 0 .476.18.542.42.142.517.286 1.039-.376 2.418H9.94a.613.613 0 01.091 1.22.559.559 0 01-.037 1.116h-.003a.543.543 0 01-.064 1.025.524.524 0 01-.347.92H5.986a.338.338 0 01-.337-.337V6.77c0-1.968 1.584-2.636 1.584-3.262zm-3.746 6.644h1.29c.2 0 .364-.164.364-.364V6.494c0-.2-.163-.363-.363-.363H3.487c-.2 0-.364.163-.364.363v3.293c0 .2.164.364.364.364z" })] })) })));
}
exports.default = SolidFacebookLikeClr;
