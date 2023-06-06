"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidViewTicket(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidViewTicket" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.376 9.154a3.899 3.899 0 00-3.633 2.427 3.93 3.93 0 007.257 0 3.888 3.888 0 00-3.624-2.427zm0 3.934a1.51 1.51 0 111.507-1.507 1.508 1.508 0 01-1.507 1.507z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.376 10.669a.908.908 0 10.904.912.907.907 0 00-.904-.912zm0-2.515a4.872 4.872 0 011.201.163V1.679A1.754 1.754 0 009.807 0H1.68A1.674 1.674 0 000 1.67v8.229a1.674 1.674 0 001.67 1.678h3.997l.148-.37a4.881 4.881 0 014.56-3.053zm-3.852.142a.948.948 0 01-.204.663.686.686 0 01-.53.224.7.7 0 01-.54-.227.943.943 0 01-.205-.66V3.648H3.688a.812.812 0 01-.558-.17.588.588 0 01-.19-.453.584.584 0 01.199-.462.825.825 0 01.549-.168H7.88a.82.82 0 01.564.172.592.592 0 01.193.458.584.584 0 01-.195.455.832.832 0 01-.562.168H6.524z" }, void 0)] }), void 0));
}
exports.default = SolidViewTicket;
