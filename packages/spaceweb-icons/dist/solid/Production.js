"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidProduction(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidProduction" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.235 2.173H2.962a.308.308 0 0 0-.308.308v11.16c0 .17.138.308.308.308h10.273c.17 0 .308-.138.308-.308V2.481a.308.308 0 0 0-.308-.308zM12.18 12.272c0 .17-.138.307-.308.307h-7.53a.308.308 0 0 1-.308-.307V5.478c0-.17.138-.307.308-.307h7.53c.17 0 .308.137.308.307v6.794z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.136.65a.6.6 0 0 0-.6-.599H1.057a.6.6 0 0 0-.6.6v11.404a.6.6 0 0 0 1.2 0V1.25h9.88a.6.6 0 0 0 .6-.6zm-1.528 6.465a.492.492 0 0 0-.35.144L7.49 10.027 6.411 9.012a.492.492 0 0 0-.697.021.493.493 0 0 0 .021.698l1.427 1.343a.491.491 0 0 0 .687-.01l3.108-3.107a.494.494 0 0 0-.35-.842z" })] })));
}
exports.default = SolidProduction;
