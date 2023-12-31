"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Catalogue.svg instead.
 */
function LineCatalogue(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineCatalogue" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.395 1.666h-1.85V3.58h1.844a.602.602 0 00.602-.602v-.718a.596.596 0 00-.596-.595zM13.395 4.922h-1.85v1.915h1.844a.602.602 0 00.602-.602v-.718a.596.596 0 00-.596-.595zM13.395 8.218h-1.85v1.916h1.844a.602.602 0 00.602-.602v-.718a.596.596 0 00-.596-.596z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.014 11.595a.5.5 0 00-.5.5l-.004.669H2.524l-.388.005c-.428.003-.918.015-1.049-.113a.534.534 0 01-.078-.342v-.4h8.715a1 1 0 001-1V1.228a1.001 1.001 0 00-1-1H1.009a1.001 1.001 0 00-1 1v11.086a1.42 1.42 0 00.377 1.055 1.942 1.942 0 001.433.403c.11 0 .222-.002.335-.004l9.356-.004a1.005 1.005 0 001.004-1.004v-.665a.5.5 0 00-.5-.5zm-2.29-.68v.5-.5zM1.01 1.227h8.715l-.001 9.686H1.009V1.228z" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.333 5.798H7.4a1 1 0 001-1V3.56a1 1 0 00-1-1H3.333a1.001 1.001 0 00-1 1v1.238a1.001 1.001 0 001 1zm4.068-1v.5-.5zM3.333 3.56H7.4v1.238H3.333z" })] })));
}
exports.default = LineCatalogue;
