"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidHelpComment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidHelpComment" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.885 12.7l-1.398-2.75a6.568 6.568 0 10-5.87 3.618 6.499 6.499 0 003.615-1.085l2.92 1.05a.597.597 0 00.733-.832zm-7.368-1.694a.61.61 0 11.61-.61.61.61 0 01-.61.61zm1.111-4.092a.982.982 0 00-.521.946v.42a.524.524 0 01-.58.526.524.524 0 01-.579-.526v-.367a2.092 2.092 0 011.159-1.84.962.962 0 00.58-1.103 1.06 1.06 0 00-.928-.841 1.304 1.304 0 00-.984.21.992.992 0 00-.406.789.524.524 0 01-.58.526.524.524 0 01-.578-.526 2.074 2.074 0 01.81-1.63 2.444 2.444 0 011.912-.472 2.253 2.253 0 011.854 1.681 2.025 2.025 0 01-1.159 2.207z" }, void 0) }), void 0));
}
exports.default = SolidHelpComment;
