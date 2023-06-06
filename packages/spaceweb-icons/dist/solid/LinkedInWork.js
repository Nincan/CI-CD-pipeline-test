"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidLinkedInWork(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidLinkedInWork" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.616 3.173a1.269 1.269 0 0 0-.928-.414H9.625v-.47a1.47 1.47 0 0 0-.385-1 1.269 1.269 0 0 0-.927-.415H5.687a1.266 1.266 0 0 0-.927.415 1.469 1.469 0 0 0-.385 1v.47H1.312a1.266 1.266 0 0 0-.928.414 1.47 1.47 0 0 0-.384 1v1.304l6.662.064h.676L14 5.477V4.172a1.47 1.47 0 0 0-.384-.999ZM8.75 2.76h-3.5v-.47a.49.49 0 0 1 .128-.334.422.422 0 0 1 .31-.138h2.625a.422.422 0 0 1 .309.138.49.49 0 0 1 .128.333ZM6.887 6.417 0 6.387v5.325a1.47 1.47 0 0 0 .384 1 1.266 1.266 0 0 0 .928.414h11.376a1.269 1.269 0 0 0 .928-.415 1.47 1.47 0 0 0 .384-.999V6.387l-6.887.03Z" }, void 0) }), void 0));
}
exports.default = SolidLinkedInWork;
