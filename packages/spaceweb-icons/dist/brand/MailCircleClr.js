"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandMailCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandMailCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40A3F5", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.558 3.498h4.93v3.285l1.204-1.107-.679-.295V3.236a.263.263 0 00-.263-.263H4.296a.263.263 0 00-.263.263V5.38l-.532.295 1.057 1.107V3.498z" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.786 5.2h-3.38a.2.2 0 000 .401h3.38a.2.2 0 000-.402zm0 1.07h-3.38a.2.2 0 000 .402h3.38a.2.2 0 000-.402zm0-2.141h-3.38a.2.2 0 000 .401h3.38a.2.2 0 000-.401z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.1 5.93L8.729 8.163l-.012.011-.517.487-.293.267a1.296 1.296 0 01-.529.256 1.269 1.269 0 01-1.09-.254l-.708-.658L3.093 5.93a.49.49 0 00-.05.237v4.31c0 .024-.002.048.001.072a.647.647 0 00.087.246l2.467-1.84.255.25-.772.578-.824.611-.761.569c-.028.02-.055.044-.082.066l.002.019c.08.01.161.032.242.032h6.878c.083 0 .164-.01.247-.048l-.023-.02c-.288-.216-.577-.43-.865-.645l-.897-.672-.674-.501.262-.245 2.476 1.846a.647.647 0 00.087-.246c.003-.024.001-.048.001-.071v-4.31a.49.49 0 00-.05-.238z" })] }))] })));
}
exports.default = BrandMailCircleClr;
