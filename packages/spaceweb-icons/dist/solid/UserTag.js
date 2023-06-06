"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidUserTag(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidUserTag" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.202 5.019a2.487 2.487 0 10-2.487-2.487 2.489 2.489 0 002.487 2.487zm1.033 5.441V8.238A1.663 1.663 0 017.89 6.58h.222a4.17 4.17 0 00-.23-.16 4.505 4.505 0 00-.434-.235c-.097-.047-.19-.097-.29-.137a4.41 4.41 0 00-.565-.176c-.075-.019-.147-.046-.224-.061a4.368 4.368 0 00-.847-.088h-.658a4.369 4.369 0 00-.847.088c-.077.015-.149.042-.224.061a4.433 4.433 0 00-.565.176c-.1.04-.193.09-.29.137a4.522 4.522 0 00-.433.236c-.095.06-.185.123-.274.19-.065.047-.136.085-.199.136l.023.008A4.464 4.464 0 00.39 10.211v2.29a.673.673 0 00.673.673h7.199l-1.54-1.54a1.647 1.647 0 01-.487-1.173z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.422 10.645l-2.858-2.859a.631.631 0 00-.448-.184H7.892a.637.637 0 00-.635.635v2.224a.634.634 0 00.187.45l2.859 2.86a.631.631 0 00.448.184.621.621 0 00.448-.188l2.223-2.223a.621.621 0 00.188-.448.641.641 0 00-.188-.451zM8.37 9.19h-.001z" }, void 0)] }), void 0));
}
exports.default = SolidUserTag;
