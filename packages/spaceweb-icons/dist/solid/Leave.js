"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLeave(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLeave" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "5.479", cy: "2.667", r: "2.623" }), (0, jsx_runtime_1.jsx)("path", { d: "M8.917 13.26a1.628 1.628 0 01.13-.64H7.019a1.635 1.635 0 010-3.27H9.05a1.635 1.635 0 01.282-1.72c-.017-.019-.031-.04-.048-.059a4.525 4.525 0 00-.215-.223 4.777 4.777 0 00-.539-.445c-.068-.048-.14-.09-.21-.134a4.7 4.7 0 00-.538-.292c-.06-.027-.116-.059-.177-.084a4.67 4.67 0 00-.748-.232 4.612 4.612 0 00-.198-.039 4.697 4.697 0 00-.839-.084h-.683a4.697 4.697 0 00-.838.084 4.371 4.371 0 00-.199.039 4.668 4.668 0 00-.747.232c-.061.025-.118.057-.178.084a4.71 4.71 0 00-.537.292c-.07.045-.142.086-.21.134a4.777 4.777 0 00-.54.445c-.075.071-.144.147-.214.223a4.79 4.79 0 00-.32.388 4.69 4.69 0 00-.949 2.814v2.408a.71.71 0 00.71.71h7.926a1.625 1.625 0 01-.125-.632z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.019 11.62h4.28l-1.196 1.19a.636.636 0 00.898.9l2.284-2.275.001-.001a.6.6 0 00.042-.064.627.627 0 00.094-.14l.003-.007v-.001a.637.637 0 000-.476l-.003-.005a.626.626 0 00-.095-.143.6.6 0 00-.041-.062l-.001-.001-2.284-2.283a.636.636 0 00-.898.9l1.199 1.198H7.019a.635.635 0 100 1.27z" })] })));
}
exports.default = SolidLeave;
