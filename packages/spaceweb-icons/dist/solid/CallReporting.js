"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCallReporting(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCallReporting" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.841 9.239a1.263 1.263 0 00-1.064-.213s-1.232.732-1.487.853c-.255.122-.638-.213-.638-.213S4.31 6.435 4.038 6.04c-.27-.394.254-1.317.637-1.705.584-.59-.075-1.498-.075-1.498A25.876 25.876 0 002.85.623C1.94-.392.734 1.142.326 1.741a2.008 2.008 0 00-.318 1.274A19.198 19.198 0 004.132 9.75a12.494 12.494 0 006.324 3.876 1.841 1.841 0 001.393-.061 14.857 14.857 0 001.42-1.627 1.103 1.103 0 00-.148-1.165S11.4 9.628 10.841 9.24z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.945 1.677a.71.71 0 00-.384-.384.7.7 0 00-.356-.038.67.67 0 00-.082-.016h-2.978a.71.71 0 100 1.42h1.43L9.978 4.256 8.713 2.992a.704.704 0 00-.235-.156.697.697 0 00-.177-.035.712.712 0 00-.09-.017.705.705 0 00-.07.014.938.938 0 00-.432.194l-.001.001-2.302 2.301A.71.71 0 106.409 6.3l1.802-1.8 1.265 1.264a.71.71 0 001.004 0l2.1-2.1v1.264a.71.71 0 101.42 0V1.949a.71.71 0 00-.055-.272z" })] })));
}
exports.default = SolidCallReporting;
