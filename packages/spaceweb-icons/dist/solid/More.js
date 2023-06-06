"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidMore(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 12 1.598", "data-icon-name": "SolidMore" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6 0a.799.799 0 110 1.598A.799.799 0 016 0M.799 0a.799.799 0 110 1.598.799.799 0 010-1.598m10.402 0a.799.799 0 110 1.598.799.799 0 010-1.598" }, void 0) }), void 0));
}
exports.default = SolidMore;
