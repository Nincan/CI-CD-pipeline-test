"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandRedditSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandRedditSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#ff4500", d: "M0 0h14v14H0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M11.274 7a.937.937 0 00-1.587-.671 4.588 4.588 0 00-2.506-.795l.427-2.008 1.395.296a.671.671 0 10.068-.327l-1.555-.33a.166.166 0 00-.126.022.169.169 0 00-.072.106l-.48 2.24a4.557 4.557 0 00-2.54.796.936.936 0 10-1.031 1.534 1.857 1.857 0 00-.022.288c0 1.438 1.678 2.61 3.747 2.61s3.749-1.17 3.749-2.61a1.843 1.843 0 00-.022-.282.937.937 0 00.555-.87zm-6.425.671a.671.671 0 11.671.671.671.671 0 01-.67-.67zm3.74 1.767a2.473 2.473 0 01-1.59.491 2.47 2.47 0 01-1.589-.49.174.174 0 01.246-.246 2.103 2.103 0 001.342.39 2.103 2.103 0 001.343-.39.175.175 0 01.248.245zm-.123-1.096a.671.671 0 11.671-.67.671.671 0 01-.67.67z" })] })));
}
exports.default = BrandRedditSquareClr;
