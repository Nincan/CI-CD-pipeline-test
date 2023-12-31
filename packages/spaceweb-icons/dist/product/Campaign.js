"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Campaign.svg instead.
 */
function ProductCampaign(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "ProductCampaign" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.446 11.254l-.516-1.736L10.4.673a.587.587 0 0 0-.722-.4.586.586 0 0 0-.4.722l.19.668a4341.51 4341.51 0 0 0-3.453 2.26c-1.556 1.02-3.114 2.037-4.67 3.06a2.072 2.072 0 0 0-.902 2.165c.041.204.11.403.17.604.157.53.47.943.946 1.227.35.212.734.302 1.143.292h.395a3.078 3.078 0 0 0 3.014 2.479 3.078 3.078 0 0 0 3.015-2.48h.728v.011h.4v.008h1.966l.235.819a.586.586 0 0 0 .722.401.58.58 0 0 0 .413-.566.387.387 0 0 0 .002-.168c-.036-.176-.095-.349-.146-.521M6.11 12.62a1.94 1.94 0 0 1-1.84-1.35h3.682a1.941 1.941 0 0 1-1.842 1.35m4.37-2.19l-2.094-6.8c.336-.22.957-.777 1.343-1.054l2.234 7.815c-.469.008-1.062.039-1.483.039" }) })));
}
exports.default = ProductCampaign;
