"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidFontAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidFontAsset" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.746 8.083c0 .15.094.268.306.268a.595.595 0 00.53-.567v-.068h-.1c-.343 0-.736.1-.736.367zm-3.3-2.423h-.013s-.1.485-.18.766l-.256.866h.88l-.25-.866c-.08-.28-.18-.767-.18-.767z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.063-.018H1.937a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h10.126a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zM6.405 9.099l-.274-.935h-1.39l-.267.935H3.352l1.514-4.456h1.147L7.527 9.1zm4.242 0h-.985v-.193a1.784 1.784 0 01.012-.2h-.012a.998.998 0 01-.91.467 1.026 1.026 0 01-1.09-1.034c0-.935 1.365-1.04 1.863-1.04h.044v-.057c0-.267-.206-.355-.474-.355a1.916 1.916 0 00-.866.305l-.374-.76a2.43 2.43 0 011.346-.417 1.272 1.272 0 011.446 1.31z" }, void 0)] }), void 0));
}
exports.default = SolidFontAsset;
