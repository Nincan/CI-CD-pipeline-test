"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidFillColour(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidFillColour" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.73 9.002s-1.269 1.378-1.269 2.222a1.27 1.27 0 002.539 0c0-.844-1.27-2.222-1.27-2.222zm-.797-1.304a.7.7 0 00.99-.99l-6.4-6.4a.7.7 0 00-.99.99l.195.195-5.49 5.49c-.008.008-.01.02-.018.028-.007.008-.017.011-.024.02a.666.666 0 00-.056.1.693.693 0 00-.06.109.679.679 0 00-.028.144.698.698 0 00-.016.11.697.697 0 00.032.162.675.675 0 00.021.093.694.694 0 00.15.225l5.013 5.014a.7.7 0 00.99 0l5.49-5.49zM10.704 6.47c-.976.85-2.892 2.43-4.835 2.677-1.344.166-3.095-1.03-4.067-1.747L6.72 2.484z" }, void 0) }), void 0));
}
exports.default = SolidFillColour;
