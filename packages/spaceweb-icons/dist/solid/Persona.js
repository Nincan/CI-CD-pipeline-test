"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPersona(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPersona" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.097 1.312v9.183c0 .721.583 1.312 1.312 1.312h9.182c.722 0 1.312-.59 1.312-1.312V1.312C12.903.59 12.313 0 11.591 0H2.41c-.73 0-1.313.59-1.313 1.312zm7.87 2.624c0 1.088-.878 1.967-1.967 1.967s-1.968-.879-1.968-1.967S5.912 1.968 7 1.968s1.968.879 1.968 1.968zM3.065 9.183C3.064 7.871 5.336 7.15 7 7.15c1.703 0 3.936.721 3.936 2.033v.656H3.064v-.656zM12.505 14H1.495a.366.366 0 0 1-.365-.366v-.464c0-.202.164-.366.365-.366h11.01c.201 0 .365.164.365.366v.464a.366.366 0 0 1-.365.366z" }) })));
}
exports.default = SolidPersona;
