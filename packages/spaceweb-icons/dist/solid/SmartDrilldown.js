"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidSmartDrilldown(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidSmartDrilldown" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M4.824.78A2.861 2.861 0 002.378.19 2.926 2.926 0 00.165 2.454a2.994 2.994 0 001.092 2.988 1.282 1.282 0 01.472.807v.005a.069.069 0 01.029-.005H4.24a.037.037 0 01.021.005v-.005a1.414 1.414 0 01.53-.845A3 3 0 004.824.781zM4.55 3.29a.316.316 0 01-.31-.316A1.15 1.15 0 003.102 1.81a.317.317 0 010-.634 1.782 1.782 0 011.759 1.797.316.316 0 01-.31.317zm-.31 4.122v-.528H1.758v.406a.764.764 0 00.724.862h1.034a.735.735 0 00.724-.74z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M13.986 6.699l-.918-3.212a.689.689 0 00-.85-.473l-3.213.918a.688.688 0 10.379 1.323l1.238-.354-2.324 4.151-.978-.978a.917.917 0 00-1.425.16l-2.753 4.358a.918.918 0 101.552.98l2.14-3.388 1.024 1.023a.918.918 0 001.45-.2l2.964-5.295.39 1.365a.688.688 0 001.324-.378z" }, void 0)] }), void 0));
}
exports.default = SolidSmartDrilldown;
