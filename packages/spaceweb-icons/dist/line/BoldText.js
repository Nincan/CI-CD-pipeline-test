"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineBoldText(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineBoldText" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.221 13.55a1.716 1.716 0 01-1.29-.414 1.804 1.804 0 01-.393-1.286V2.143A1.796 1.796 0 011.939.845 1.768 1.768 0 013.221.442h4.184a9.953 9.953 0 011.619.115 3.508 3.508 0 011.25.454 3.261 3.261 0 01.836.713 3.135 3.135 0 01.553.953 3.206 3.206 0 01.191 1.104 3.021 3.021 0 01-1.78 2.82 3.193 3.193 0 012.388 3.17 3.661 3.661 0 01-.57 2.005 3.452 3.452 0 01-1.54 1.317 5.41 5.41 0 01-1.385.355 13.773 13.773 0 01-1.8.102zm3.841-2.16c1.717 0 2.553-.593 2.553-1.814a1.455 1.455 0 00-.642-1.335 3.773 3.773 0 00-2-.425H4.35v3.575zm-.414-5.646a4.673 4.673 0 001.476-.18 1.338 1.338 0 00.763-.658 1.513 1.513 0 00.208-.78 1.184 1.184 0 00-.64-1.21 5.22 5.22 0 00-2.08-.314H4.35v3.142z" }, void 0) }), void 0));
}
exports.default = LineBoldText;
