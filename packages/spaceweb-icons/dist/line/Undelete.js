"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineUndelete(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineUndelete" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.998 10.595v.004c-.143 1.018-.661 2.206-1.65 2.206H5.275a1.63 1.63 0 01-1.133-.361l-.818.818a2.717 2.717 0 001.952.707h4.07c1.37 0 2.43-1.163 2.756-2.973a.565.565 0 00.027-.082l1-7.457-1.354 1.355-.777 5.783zM13.621.552a.599.599 0 00-.848 0l-.848.848H7.821V.613a.583.583 0 00-1.165 0V1.4H.786a.582.582 0 000 1.165h.34l1.096 8.442a.36.36 0 00.024.072L.681 12.645a.6.6 0 10.847.848L13.621 1.4a.599.599 0 000-.848zM2.3 2.565h8.46L7.808 5.518v-.845a.582.582 0 00-1.164 0v2.01L5.31 8.014l-.294-3.37a.584.584 0 00-1.16.101l.38 4.344-.965.964z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.444 11.11a.581.581 0 00.63-.526v-.003l.39-4.458-1.28 1.28-.268 3.077a.58.58 0 00.525.63zm-1.636-.579V8.78L6.644 9.943v.588a.582.582 0 001.164 0z" }, void 0)] }), void 0));
}
exports.default = LineUndelete;
