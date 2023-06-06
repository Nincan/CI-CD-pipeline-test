"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidMerge(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidMerge" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.905 13.748a.856.856 0 000-1.212l-2.321-2.321-1.213 1.212 2.322 2.322a.856.856 0 001.212 0zm-7.73-10.06h1.97v4.807l-4.05 4.041a.857.857 0 101.212 1.213l4.05-4.042a1.705 1.705 0 00.507-1.212V3.689h1.97a.426.426 0 00.3-.731L7.305.129a.426.426 0 00-.61 0L3.866 2.958a.43.43 0 00.31.73z" }, void 0) }), void 0));
}
exports.default = SolidMerge;
