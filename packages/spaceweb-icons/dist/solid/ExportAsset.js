"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidExportAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidExportAsset" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.582 8.877a.552.552 0 00-.066-.26l-2.611-4.87a.55.55 0 00-.485-.29H8.686l.007 1.1h1.399l2.02 3.77H9.75l.04.588a1.41 1.41 0 01-.264.9.736.736 0 01-.571.205H4.957c-.168-.007-.713-.11-.713-1.142v-.55H1.879l2.02-3.773h1.428L5.32 3.463c-.013 0-.023-.007-.036-.008H3.57a.55.55 0 00-.485.29L.476 8.618a.553.553 0 00-.065.26v4.53a.55.55 0 00.55.55H13.04a.55.55 0 00.55-.55z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.365 2.465l.949-.005.017 2.827A.682.682 0 007.5 5.76a.675.675 0 00.197-.48L7.68 2.45l.948-.006a.387.387 0 00.271-.666L7.258.158a.388.388 0 00-.55-.003L5.085 1.8a.39.39 0 00.281.665zm-.96 4.012a.55.55 0 000 1.1h5.086a.55.55 0 10-.001-1.1H4.405z" })] })));
}
exports.default = SolidExportAsset;
