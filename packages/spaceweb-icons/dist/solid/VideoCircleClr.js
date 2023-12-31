"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidVideoCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidVideoCircleClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#1c6cfd", d: "M7 .02A6.98 6.98 0 1013.98 7 6.98 6.98 0 007 .02zm1.839 8.487a.962.962 0 01-.962.956H3.952a.962.962 0 01-.962-.962V5.499a.962.962 0 01.962-.962h3.925a.962.962 0 01.962.962zm2.171.298c0 .355-.252.498-.556.32l-1.11-.636V5.51l1.11-.635c.304-.172.556-.035.556.32z" }) })));
}
exports.default = SolidVideoCircleClr;
