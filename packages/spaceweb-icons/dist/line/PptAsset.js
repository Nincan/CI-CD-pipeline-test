"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/PptAsset.svg instead.
 */
function LinePptAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 12 12", "data-icon-name": "LinePptAsset" }, props, { children: [(0, jsx_runtime_1.jsx)("style", {}, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M4.659 4.392h1.577c.738 0 1.237.542 1.237 1.307s-.499 1.317-1.237 1.317h-.648v1.173h-.93V4.392zM6.045 6.22c.324 0 .483-.218.483-.52s-.16-.51-.467-.51h-.473v1.03h.457z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7.938 1.01a.58.58 0 01.345.138l2.536 2.403c.08.075.146.227.146.337v6.901a.2.2 0 01-.2.2h-9.53a.2.2 0 01-.2-.2V1.211c0-.11.09-.2.2-.2h6.703m0-1H1.235c-.661 0-1.2.538-1.2 1.2v9.578c0 .662.539 1.2 1.2 1.2h9.53c.661 0 1.2-.538 1.2-1.2v-6.9c0-.384-.18-.801-.458-1.065L8.97.422A1.582 1.582 0 007.938.011z" }, void 0)] }), void 0));
}
exports.default = LinePptAsset;
