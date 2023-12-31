"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandWebsite(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandWebsite" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.948 8.694l-.332-1.249h-.007l-.317 1.25h-.529l-.59-1.862h.54l.341 1.264h.008l.31-1.264h.496l.317 1.26h.007l.342-1.26h.526l-.587 1.861h-.525zm3.031 0l-.332-1.249H6.64l-.316 1.25h-.53l-.59-1.862h.54l.341 1.264h.008l.31-1.264h.496l.317 1.26h.007l.342-1.26h.526l-.587 1.861H6.98zm3.031 0l-.332-1.249h-.007l-.316 1.25h-.53l-.59-1.862h.54l.342 1.264h.008l.31-1.264h.495l.318 1.26h.006l.342-1.26h.527l-.587 1.861h-.526zm1.818-.554v.554h-.566V8.14h.566z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.23 13.066H.77a.77.77 0 01-.77-.77V1.56A.77.77 0 01.77.79h12.46a.77.77 0 01.77.77v10.735a.77.77 0 01-.77.77zM13 11.575v-7.84H1v7.847c0 .27.219.49.489.49h11.015a.496.496 0 00.496-.497zM8.72 2.5v-.474a.235.235 0 00-.235-.235H8.01a.235.235 0 00-.235.235V2.5c0 .13.106.235.235.235h.475c.13 0 .234-.105.234-.235zm1.944 0v-.474a.235.235 0 00-.235-.235h-.475a.235.235 0 00-.235.235V2.5c0 .13.106.235.235.235h.475c.13 0 .235-.105.235-.235zm1.944 0v-.474a.235.235 0 00-.235-.235h-.474a.235.235 0 00-.235.235V2.5c0 .13.105.235.235.235h.474c.13 0 .235-.105.235-.235z" })] })));
}
exports.default = BrandWebsite;
