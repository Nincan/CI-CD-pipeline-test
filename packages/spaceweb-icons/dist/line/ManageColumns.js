"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineManageColumns(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineManageColumns" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.542 9.996a.718.718 0 00-1.225.505l-.001.676H2.438v-2.4a.735.735 0 00-1.47 0v3.097a.74.74 0 00.735.735h5.613l-.004.683a.715.715 0 00.712.714.737.737 0 00.517-.214L9.934 12.4a.715.715 0 000-1.013zm.078-3.338a.738.738 0 00.735-.735V.742a.735.735 0 10-1.47 0v5.181a.736.736 0 00.735.735zm-3.546 0a.736.736 0 00.735-.735V.742a.735.735 0 10-1.469 0v5.181a.736.736 0 00.734.735zm-3.381 0a.736.736 0 00.735-.735V.742a.735.735 0 10-1.47 0v5.181a.736.736 0 00.735.735zM12.336.007a.736.736 0 00-.735.735v12.53a.735.735 0 101.469 0V.742a.736.736 0 00-.734-.735z" }) })));
}
exports.default = LineManageColumns;
