"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidRocket(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidRocket" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.026 4.359H2.44a2.135 2.135 0 00-1.4.52l-.87.87a.555.555 0 000 .7l1.355 1.355zm1.132 8.078L7.49 13.77a.547.547 0 00.78.09l.88-.87a2.037 2.037 0 00.52-1.4V8.981zM13.97 1.299a1.503 1.503 0 00-.38-.86 1.625 1.625 0 00-1.22-.44 5.53 5.53 0 00-1.72.22 3.61 3.61 0 00-1.15.68c-.18.16-.36.32-.53.5L6.194 4.262l-.004.004-.09.093h-.004l-4.04 3.976.294.294 2.96 2.96.317.317L9.67 7.928l2.87-2.87a5.473 5.473 0 00.98-1.22 4.335 4.335 0 00.4-1.47 3.828 3.828 0 00.05-1.07zm-2.54 2.18a1.029 1.029 0 111.029-1.03 1.029 1.029 0 01-1.029 1.03zm-6.953 8.206A1.6 1.6 0 012.214 9.42" }, void 0) }), void 0));
}
exports.default = SolidRocket;
