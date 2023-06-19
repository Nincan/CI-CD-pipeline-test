"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidXlxsAssetClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidXlxsAssetClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#2FBD8E", d: "M13.096 3.406L9.876.367A1.328 1.328 0 008.964 0H1.817c-.76 0-1.38.661-1.38 1.475v11.05c0 .814.62 1.475 1.38 1.475h10.366c.761 0 1.38-.661 1.38-1.474V4.512c0-.423-.17-.825-.467-1.106zM9.18 9.625H7.858l-.556-.918a6.407 6.407 0 01-.298-.544H6.99s-.13.269-.299.544l-.555.918H4.819l1.472-2.172L4.812 5.25h1.35l.53.9c.163.275.298.563.298.563h.014s.128-.282.298-.563l.536-.9h1.35L7.702 7.453l1.48 2.172z" }) })));
}
exports.default = SolidXlxsAssetClr;
