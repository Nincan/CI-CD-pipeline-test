"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderNoStories(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderNoStories" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M33.927 14.888h-9.579a1.016 1.016 0 000 2.032h9.58a1.016 1.016 0 100-2.032zm-20.375-3.957h20.375a1.016 1.016 0 100-2.031H13.552a1.016 1.016 0 000 2.031zm0 16.237h20.375a1.016 1.016 0 100-2.031H13.552a1.016 1.016 0 100 2.031zm0 3.94h20.375a1.016 1.016 0 100-2.031H13.552a1.016 1.016 0 000 2.031zm20.375-11.96h-9.579a1.016 1.016 0 000 2.032h9.58a1.016 1.016 0 100-2.032z" }), (0, jsx_runtime_1.jsx)("path", { d: "M38.872 3.387H9.426A1.015 1.015 0 008.41 4.403v7.76H1.128a1.016 1.016 0 00-.973 1.311l6.786 22.418a1.016 1.016 0 00.972.72h30.96a1.015 1.015 0 001.015-1.015V4.403a1.015 1.015 0 00-1.016-1.016zm-1.015 31.194H10.442V5.42h27.415z" }), (0, jsx_runtime_1.jsx)("rect", { width: "8.356", height: "8.53", x: "12.895", y: "13.77", rx: "1.016" })] })));
}
exports.default = PlaceholderNoStories;
