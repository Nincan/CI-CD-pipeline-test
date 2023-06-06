"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Notes.svg instead.
 */
function LineNotes(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineNotes" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.002.034H1.998A1.966 1.966 0 00.034 1.998v10.004a1.966 1.966 0 001.964 1.964h6.113a.991.991 0 00.686-.256l4.825-3.67a1.038 1.038 0 00.308-.742l.036-7.3A1.966 1.966 0 0012.002.034zm.729 9.183l-4.665 3.55H1.998a.765.765 0 01-.765-.765V1.998a.765.765 0 01.765-.765h10.004a.765.765 0 01.765.762z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.359 5.834H2.674a.7.7 0 000 1.4h6.685a.7.7 0 000-1.4zM7 8.827H2.669a.7.7 0 00.005 1.4h4.331A.7.7 0 007 8.828zm4.326-6.245H2.67a.7.7 0 00.005 1.4h8.657a.7.7 0 00-.005-1.4z" }, void 0)] }), void 0));
}
exports.default = LineNotes;
