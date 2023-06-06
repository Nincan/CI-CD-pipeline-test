"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidEdit(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 15 15", "data-icon-name": "SolidEdit" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2 10.292V13h2.708l7.987-7.986-2.708-2.708L2 10.292zM14.789 2.92a.72.72 0 000-1.019l-1.69-1.69a.72.72 0 00-1.019 0l-1.32 1.322 2.708 2.708 1.321-1.321z" }, void 0) }), void 0));
}
exports.default = SolidEdit;
