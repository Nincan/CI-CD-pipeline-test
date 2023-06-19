"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineNpsRating(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineNpsRating" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.157 2.487a.475.475 0 01-.474.473.474.474 0 010-.947.475.475 0 01.474.474zM7 2.96a.474.474 0 10-.474-.473A.475.475 0 007 2.96zm-1.684-.947a.474.474 0 10.474.474.475.475 0 00-.474-.474zm-1.21.474A2.053 2.053 0 112.053.433a2.055 2.055 0 012.053 2.054zm-.948 0a1.105 1.105 0 10-1.105 1.105 1.107 1.107 0 001.105-1.105zm6.736 0a2.053 2.053 0 112.053 2.053 2.055 2.055 0 01-2.053-2.053zm.947 0a1.105 1.105 0 101.106-1.106 1.107 1.107 0 00-1.105 1.106zM.041 8.659v.9q.645-.437 1.315-.834h.029v4.73h.929V7.797h-.897c-.323.17-1.06.639-1.376.862zm3.701 2.884H5.61v-.82H3.742v.82zM6.405 8.66v.9q.644-.437 1.314-.834h.029v4.73h.928V7.797h-.895c-.324.17-1.061.639-1.376.862zm7.507 1.76v.416c0 1.613-.71 2.732-2.077 2.732-1.34 0-2.069-1.077-2.069-2.733v-.414c0-1.653.746-2.735 2.085-2.735s2.06 1.077 2.06 2.735zm-.933.006c0-1.265-.44-1.956-1.14-1.956-.697 0-1.136.687-1.136 1.956v.402c0 1.268.44 1.956 1.136 1.956.7 0 1.14-.692 1.14-1.956z" }) })));
}
exports.default = LineNpsRating;
