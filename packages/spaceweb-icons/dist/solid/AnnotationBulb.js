"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAnnotationBulb(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14.03337 13.25379", "data-icon-name": "SolidAnnotationBulb" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.17734 3.20018a1.46819 1.46819 0 011.465 1.465.25853.25853 0 01-.51706 0 .9474.9474 0 00-.94794-.94793.25853.25853 0 010-.51706zm1.434-.324a2.41316 2.41316 0 10-2.97138 3.80206 1.04 1.04 0 01.393.66184l.01206-.003.01207-.00043h2.08542l.02-.08651a1.17588 1.17588 0 01.42122-.6029 2.41426 2.41426 0 00.02757-3.77106zm-.486 4.97752H6.05706v.33092a.6284.6284 0 00.60322.7032h.86177a.60613.60613 0 00.60323-.60323zM11.95688 0a2.07927 2.07927 0 012.0765 2.07715v6.7073a2.07872 2.07872 0 01-2.0765 2.0765H9.12169a11.18779 11.18779 0 01-1.69688 2.30675 1.04984 1.04984 0 01-.79425.01556 10.90206 10.90206 0 01-1.71887-2.32231H2.0765A2.07872 2.07872 0 010 8.78445v-6.7073A2.07927 2.07927 0 012.0765 0z" }, void 0) }), void 0));
}
exports.default = SolidAnnotationBulb;
