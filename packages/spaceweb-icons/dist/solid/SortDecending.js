"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSortDecending(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSortDecending" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.528 5.377H.685a.675.675 0 100 1.35h5.843a.675.675 0 000-1.35zM5.012 9.148H.685a.675.675 0 100 1.349h4.328a.675.675 0 10-.001-1.35zm4.528-.4l1.648 1.652a.675.675 0 00.953-.001l1.65-1.65a.676.676 0 00-.476-1.153h-.002l-.012-.002h-.96V2.296a.674.674 0 10-1.349 0v5.298h-.9c-.011 0-.02.005-.032.006-.017-.001-.033-.01-.05-.01a.667.667 0 00-.469.189.68.68 0 000 .97zM8.19 1.605H.685a.675.675 0 100 1.35h7.506a.675.675 0 100-1.35z" }, void 0) }), void 0));
}
exports.default = SolidSortDecending;
