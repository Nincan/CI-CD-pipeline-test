"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAppointment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAppointment" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.217 12.471V1.4l6.268.003a.8.8 0 01.799.798v3.374a4.761 4.761 0 011.398.572V2.201A2.2 2.2 0 0010.486.005L2.819.002v.003h-.482A1.195 1.195 0 001.14 1.193v.55h-.4a.699.699 0 000 1.398h.4v3.096h-.4a.699.699 0 000 1.398h.4v3.094h-.4a.699.699 0 000 1.398h.4v.536a1.21 1.21 0 001.208 1.208h1.587v-.003l3.14.002a4.81 4.81 0 01-1.101-1.398z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.22 6.518a3.74 3.74 0 103.739 3.74 3.74 3.74 0 00-3.74-3.74zm1.454 5.194a.414.414 0 01-.586.001l-1.16-1.16a.416.416 0 01-.124-.295V8.596a.416.416 0 01.83 0v1.492l1.04 1.039a.414.414 0 010 .585z" })] })));
}
exports.default = SolidAppointment;
