"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTiktokComment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTiktokComment" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 .202C3.134.202 0 2.977 0 6.4s3.235 5.773 7.101 5.773v.002c-.003.01-.575 1.98.84 1.566a8.01 8.01 0 0 0 3.537-2.529c.106-.096.224-.188.322-.286A6.37 6.37 0 0 0 14 6.4C14 2.977 10.866.202 7 .202ZM3.6 7.55a.993.993 0 1 1 1-.994.997.997 0 0 1-1 .994Zm3.4 0a.993.993 0 1 1 1-.994.997.997 0 0 1-1 .994Zm3.4 0a.993.993 0 1 1 1-.994.997.997 0 0 1-1 .994Z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidTiktokComment;
