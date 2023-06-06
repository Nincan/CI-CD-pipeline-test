"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTaskSchedule(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTaskSchedule" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.3 2.19h5.18a.2.2 0 00.2-.2V.23a.2.2 0 00-.2-.2H3.3a.2.2 0 00-.2.2v1.75a.203.203 0 00.2.21z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.44 5.88a4.49 4.49 0 011.32.218V1.2a.287.287 0 00-.29-.3L9.85.91v2.44H1.92V.91L.3.9a.293.293 0 00-.29.3v11.94a.29.29 0 00.29.29h6.745a4.529 4.529 0 013.395-7.55z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.44 6.87a3.55 3.55 0 103.55 3.55 3.55 3.55 0 00-3.55-3.55zm1.38 4.94a.405.405 0 01-.56 0l-1.1-1.1a.363.363 0 01-.12-.28V8.85a.39.39 0 01.78 0v1.42l.99.99a.367.367 0 01.01.55z" }, void 0)] }), void 0));
}
exports.default = SolidTaskSchedule;
