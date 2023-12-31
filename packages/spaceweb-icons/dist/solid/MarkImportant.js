"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMarkImportant(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMarkImportant" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M9.612 12.12c-.24.003-.482.002-.723 0H.613a.601.601 0 01-.517-.297.589.589 0 010-.605l.003-.004.003-.003c.084-.124.173-.245.262-.367.045-.06.09-.12.133-.182.273-.377.546-.755.82-1.137q.236-.325.47-.652l.472-.652q.391-.537.779-1.077L3.142 7l-.051-.072-.131-.184-.819-1.133V5.61l-.471-.652-.472-.653Q.808 3.77.42 3.23l-.323-.448a.589.589 0 010-.605.601.601 0 01.517-.297h8.585c.145 0 .29-.002.436 0a1.255 1.255 0 01.54.135 1.225 1.225 0 01.421.382l.051.066.156.203.156.203 1.144 1.49 1.227 1.595.287.372.286.372a.572.572 0 010 .605l-.003.005-.003.004c-.096.133-.198.262-.3.391l-.14.182-.886 1.15-.499.649-.499.648-.764.993-.036.048-.151.197-.027.036a1.143 1.143 0 01-.916.513.562.562 0 01-.043.002h-.023z" }) })));
}
exports.default = SolidMarkImportant;
