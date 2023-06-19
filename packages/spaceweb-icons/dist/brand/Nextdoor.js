"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandNextdoor(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandNextdoor" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.73 1.661a5.343 5.343 0 0 0-4.479 2.233c-.076.113-.206.353-.38.354-.842.007-.894-1.03-.92-1.954a.26.26 0 0 0-.257-.247L.259 2.033A.258.258 0 0 0 0 2.291v.005c.054 2.258.47 3.792 3.205 4.402a.33.33 0 0 1 .255.323v5.07a.256.256 0 0 0 .256.256h2.367a.257.257 0 0 0 .257-.258V6.852A2.407 2.407 0 0 1 8.667 4.37l.063-.001a2.456 2.456 0 0 1 2.39 2.484v5.237a.257.257 0 0 0 .257.258h2.366a.257.257 0 0 0 .257-.258V6.464a4.989 4.989 0 0 0-5.164-4.808l-.106.005Z" }) })));
}
exports.default = BrandNextdoor;
