"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandKakaoCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandKakaoCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#FFC012", cx: "7", cy: "7", r: "7" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M8.863 3.862v2.9s.006 2.248-1.952 3.722c0 0-.122.058-.213-.044l-.963-1.08s-.126-.142.019-.27c0 0 1.057-.773 1.13-1.892H5.5s-.364-.038-.364-.363V3.862S5.15 3.5 5.5 3.5h3.037s.325.055.325.362z" }, void 0)] }), void 0));
}
exports.default = BrandKakaoCircleClr;
