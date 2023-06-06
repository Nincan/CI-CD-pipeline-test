"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineFacebookShare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineFacebookShare" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.853,6.64181,7.61109.39982A.52042.52042,0,0,0,7.05538.28544.52655.52655,0,0,0,6.73683.7593V3.98651A7.55972,7.55972,0,0,0,1.66317,6.748,9.495,9.495,0,0,0,.07,13.31681a.50491.50491,0,0,0,.39216.41668.27783.27783,0,0,0,.1143.01634.527.527,0,0,0,.42485-.2206C3.526,9.8445,6.17287,9.51769,7.178,9.5422v3.25989a.51879.51879,0,0,0,.31036.47387.53679.53679,0,0,0,.56369-.11438l5.80088-5.8008A.51291.51291,0,0,0,13.853,6.64181ZM8.19929,11.5684V9.07651a.51473.51473,0,0,0-.40851-.49838c-.15539-.03268-3.48048-.66178-6.75671,3.219a7.78476,7.78476,0,0,1,1.438-4.42,6.73077,6.73077,0,0,1,4.83665-2.4347A.49936.49936,0,0,0,7.758,4.43587V1.993l5.00821,5.00829Z" }, void 0) }), void 0));
}
exports.default = LineFacebookShare;
