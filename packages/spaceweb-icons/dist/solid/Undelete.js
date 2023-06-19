"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUndelete(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUndelete" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.9 10.587v.002a.58.58 0 01-.631.527h-.003a.58.58 0 01-.525-.63L9.019 7.3 7.633 8.688v1.849a.582.582 0 01-1.164 0v-.685l-3.366 3.365a2.686 2.686 0 001.995.762h4.07c1.37 0 2.43-1.17 2.76-2.98a.676.676 0 00.03-.08l1.016-7.572-2.675 2.675zM13.767.227a.7.7 0 00-.99 0l-1.182 1.182H7.648v-.79a.585.585 0 00-1.17 0v.79H.608a.58.58 0 100 1.16h.34l1.094 8.392-1.723 1.724a.7.7 0 00.99.99L13.767 1.217a.7.7 0 000-.99zM7.05 4.097a.582.582 0 01.582.582v.691L6.469 6.534V4.68a.582.582 0 01.582-.582zm-3.37.655a.584.584 0 011.16-.102l.283 3.23-1.075 1.074z" }) })));
}
exports.default = SolidUndelete;
