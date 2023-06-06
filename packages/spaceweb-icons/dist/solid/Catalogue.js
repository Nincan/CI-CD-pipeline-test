"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCatalogue(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCatalogue" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.395 1.666h-1.85V3.58h1.844a.602.602 0 00.602-.602V2.26a.596.596 0 00-.596-.595zM13.395 4.922h-1.85v1.915h1.844a.602.602 0 00.602-.602v-.718a.596.596 0 00-.596-.595zM13.395 8.218h-1.85v1.916h1.844a.602.602 0 00.602-.602v-.718a.596.596 0 00-.596-.596z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.013 11.595a.5.5 0 00-.5.5l-.003.67H2.524l-.387.003c-.43.008-.919.017-1.05-.112a.535.535 0 01-.078-.343v-.399h8.714a1 1 0 001-1V1.228a1.001 1.001 0 00-1-1H1.01a1.001 1.001 0 00-1 1v11.085a1.418 1.418 0 00.378 1.056 1.938 1.938 0 001.432.403c.11 0 .223-.002.335-.004l9.356-.004a1.005 1.005 0 001.003-1.004v-.665a.5.5 0 00-.5-.5zM2.833 3.56a.5.5 0 01.5-.5H7.4a.5.5 0 01.5.5v1.238a.5.5 0 01-.5.5H3.333a.5.5 0 01-.5-.5z" }, void 0)] }), void 0));
}
exports.default = SolidCatalogue;
