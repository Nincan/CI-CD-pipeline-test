"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Image.svg instead.
 */
function LinePhoto(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LinePhoto" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "9.912", cy: "4.685", r: "1.25" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.034 1H1.966C.88 1 0 1.88 0 2.966v8.068C0 12.12.88 13 1.966 13h10.068C13.12 13 14 12.12 14 11.034V2.966C14 1.88 13.12 1 12.034 1zM1.966 2.2h10.068c.422 0 .766.344.766.766v8.068c0 .015-.008.028-.009.043L10.9 8.322c-.29-.412-.723-.648-1.188-.648h-.004c-.468.001-.902.24-1.181.643l-.49.668-1.22-2.035c-.339-.558-.927-.891-1.573-.891s-1.235.333-1.574.891L1.2 11.012V2.966c0-.422.344-.766.766-.766zm6.36 9.6h-6.2l2.569-4.227c.242-.4.855-.397 1.094-.003l2.536 4.23zm1.394-.008l-1.014-1.691.797-1.087c.062-.091.17-.161.208-.14.07 0 .144.049.203.132L11.83 11.8H9.723l-.003-.008z" })] })));
}
exports.default = LinePhoto;
