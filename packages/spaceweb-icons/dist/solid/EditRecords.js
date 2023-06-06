"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidEditRecords(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidEditRecords" }, props, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", (0, tslib_1.__assign)({ id: "editRecords_a" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M0 0h14v14H0z" }, void 0) }), void 0) }, void 0), (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ clipPath: "url(#editRecords_a)" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.51 0H5a1.53 1.53 0 00-1.42.9h7.79a1.73 1.73 0 011.73 1.73v7.79A1.53 1.53 0 0014 9V1.49A1.49 1.49 0 0012.51 0z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.78 1.72H3.25a1.53 1.53 0 00-1.39.9h7.79a1.73 1.73 0 011.73 1.73v7.79a1.53 1.53 0 00.9-1.39V3.21a1.49 1.49 0 00-1.5-1.49z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.437 4.36a1.49 1.49 0 00-1.377-.92H1.53A1.53 1.53 0 000 5v7.47A1.53 1.53 0 001.53 14H9a1.53 1.53 0 001.55-1.54V4.93a1.49 1.49 0 00-.113-.57zM8.276 7.413a1.13 1.13 0 01-.322.448l-3.34 3.349a.873.873 0 01-.591.336l-1.42.247a.37.37 0 01-.18-.038.318.318 0 01-.149-.112.343.343 0 01-.082-.164.397.397 0 01-.008-.187l.254-1.256a1.248 1.248 0 01.33-.665l3.348-3.348a1.312 1.312 0 011.838 0 1.199 1.199 0 01.322 1.39z" }, void 0)] }), void 0)] }), void 0));
}
exports.default = SolidEditRecords;
