"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Export.svg instead.
 */
function LineExport(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineExport" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.353 13.804l-12.658.127a.6.6 0 01-.606-.594L.054 9.784a.6.6 0 111.199-.012l.03 2.953 11.458-.115-.03-2.953a.6.6 0 111.2-.012l.035 3.553a.6.6 0 01-.593.606z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M3.562 3.82a.6.6 0 00.85.009l1.782-1.746.076 7.658a.6.6 0 101.2-.012l-.077-7.68 1.924 1.767a.6.6 0 10.811-.884L7.185.227c-.036-.033-.08-.052-.122-.075C7.04.14 7.02.12 6.998.112a.598.598 0 00-.225-.043.598.598 0 00-.228.05c-.003.001-.007 0-.01.002-.008.004-.012.013-.02.017a.594.594 0 00-.156.103L3.57 2.97a.6.6 0 00-.009.85z" }, void 0)] }), void 0));
}
exports.default = LineExport;
