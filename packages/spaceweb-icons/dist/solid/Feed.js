"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFeed(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFeed" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.15.048H1.402C.291.048.291 1.094.291 1.597v10.75c0 .502 0 1.548 1.11 1.548h10.75a1.555 1.555 0 001.56-1.548V1.597a1.555 1.555 0 00-1.56-1.55zm.462 12.299a.452.452 0 01-.461.45l-10.727.058a2.053 2.053 0 01-.036-.508V4.645h11.224z" }), (0, jsx_runtime_1.jsx)("rect", { width: "1.903", height: "1.903", x: "2.543", y: "6.174", rx: ".12" }), (0, jsx_runtime_1.jsx)("rect", { width: "1.903", height: "1.903", x: "2.543", y: "9.266", rx: ".12" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.397 7.725h4.62a.6.6 0 000-1.199h-4.62a.6.6 0 100 1.2zm0 3.092h4.62a.6.6 0 100-1.199h-4.62a.6.6 0 100 1.2z" })] })));
}
exports.default = SolidFeed;
