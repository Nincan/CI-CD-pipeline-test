"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Comment.svg instead.
 */
function LineTextComment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineTextComment" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.6 1.403c.056 0 .08.008.081.008.038.03.1.165.119.267v9.628l-.667-.667a1.478 1.478 0 00-1.052-.436H1.4c-.082 0-.129-.011-.137-.011H1.26a.472.472 0 01-.061-.189v-8.4c0-.089 0-.16.13-.2H12.6m0-1.2H1.211S0 .367 0 1.603v8.4s-.007 1.4 1.4 1.4h9.68c.077 0 .15.03.204.084l2.225 2.225a.287.287 0 00.49-.203V1.603c.001 0-.116-1.4-1.399-1.4z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.187 4.39h-6.71a.5.5 0 110-1h6.71a.5.5 0 110 1zm0 1.952h-6.71a.5.5 0 110-1h6.71a.5.5 0 110 1zm0 1.952h-6.71a.5.5 0 110-1h6.71a.5.5 0 110 1z" }, void 0)] }), void 0));
}
exports.default = LineTextComment;
