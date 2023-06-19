"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDoubleTickCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDoubleTickCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm4.442 5.317l-3.156 4.11a.6.6 0 01-.407.223h-.055a.6.6 0 01-.389-.142L6.069 8.327l-.763 1.005a.554.554 0 01-.411.226h-.002a.614.614 0 01-.437-.145l-1.823-1.57a.508.508 0 01-.03-.779.56.56 0 01.392-.176h.003a.575.575 0 01.408.151L4.76 8.2l2.77-3.622a.55.55 0 01.372-.226h.045a.59.59 0 01.38.105.515.515 0 01.243.352.504.504 0 01-.118.417L6.737 7.438l.987.857 2.797-3.627a.552.552 0 01.372-.222l.042-.001a.592.592 0 01.382.107.52.52 0 01.24.35.51.51 0 01-.115.415z" }) })));
}
exports.default = SolidDoubleTickCircle;
