"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandBlog(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandBlog" }, props, { children: (0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("path", { d: "M2.156 5.305h2.995v3.006H2.156zm4.44.017h5.268v.928H6.596zm0 2.115h5.268v.928H6.596zm-4.46 2.151h9.728v.928H2.136z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.719 13.001H1.28A1.281 1.281 0 010 11.721V2.28C0 1.572.574.999 1.281.999H12.72a1.28 1.28 0 011.281 1.28v9.441c0 .708-.574 1.281-1.281 1.281zm.281-1.82V3.943H1v7.25c0 .45.364.814.813.814h10.361c.456 0 .826-.37.826-.826zm-4.28-8.63V2.39A.39.39 0 008.328 2h-.163a.39.39 0 00-.39.39v.163c0 .216.174.39.39.39h.163a.39.39 0 00.39-.39zm1.944 0V2.39a.39.39 0 00-.391-.39h-.163a.39.39 0 00-.39.39v.163c0 .216.174.39.39.39h.163a.39.39 0 00.39-.39zm1.944 0V2.39a.39.39 0 00-.391-.39h-.163a.39.39 0 00-.39.39v.163c0 .216.175.39.39.39h.163a.39.39 0 00.39-.39z" })] }) })));
}
exports.default = BrandBlog;
