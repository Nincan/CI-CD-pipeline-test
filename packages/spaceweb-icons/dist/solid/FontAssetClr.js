"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidFontAssetClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidFontAssetClr" }, props, { children: (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ fill: "#00CDCD" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.156 6.266h-.012s-.1.486-.18.767l-.256.866h.879l-.25-.866c-.08-.281-.18-.767-.18-.767zM8.457 8.69c0 .15.094.268.306.268.28 0 .529-.305.529-.567v-.068h-.1c-.342 0-.735.1-.735.367z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.096 3.406L9.876.367A1.328 1.328 0 0 0 8.964 0H1.817c-.76 0-1.38.661-1.38 1.475v11.05c0 .814.62 1.475 1.38 1.475h10.366c.761 0 1.38-.661 1.38-1.474V4.512c0-.423-.17-.825-.467-1.106zm-6.98 6.3l-.274-.935h-1.39l-.267.935H3.063L4.577 5.25h1.147l1.514 4.456H6.116zm4.242 0h-.985v-.193c0-.106.012-.2.012-.2h-.012s-.236.467-.91.467c-.598 0-1.09-.398-1.09-1.034 0-.935 1.365-1.04 1.863-1.04h.044v-.057c0-.267-.206-.355-.474-.355-.405 0-.866.305-.866.305l-.374-.76s.555-.417 1.346-.417c.904 0 1.446.492 1.446 1.309v1.975z" }, void 0)] }), void 0) }), void 0));
}
exports.default = SolidFontAssetClr;
