"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAddRecords(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAddRecords" }, props, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", tslib_1.__assign({ id: "createRecords_a" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M0 0h14v14H0z" }) })) }), (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ clipPath: "url(#createRecords_a)" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.51 0H5a1.53 1.53 0 00-1.42.9h7.79a1.73 1.73 0 011.73 1.73v7.79A1.53 1.53 0 0014 9V1.49A1.49 1.49 0 0012.51 0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.78 1.72H3.25a1.53 1.53 0 00-1.39.9h7.79a1.73 1.73 0 011.73 1.73v7.79a1.53 1.53 0 00.9-1.39V3.21a1.49 1.49 0 00-1.5-1.49z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.437 4.36a1.49 1.49 0 00-1.377-.92H1.53A1.53 1.53 0 000 5v7.47A1.53 1.53 0 001.53 14H9a1.53 1.53 0 001.55-1.54V4.93a1.49 1.49 0 00-.113-.57zM7.718 9.42H5.976v1.743a.7.7 0 11-1.4 0V9.42H2.831a.7.7 0 010-1.4h1.743V6.276a.7.7 0 111.4 0V8.02h1.743a.7.7 0 110 1.4z" })] }))] })));
}
exports.default = SolidAddRecords;
