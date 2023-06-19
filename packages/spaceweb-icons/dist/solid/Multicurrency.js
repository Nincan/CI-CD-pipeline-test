"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMulticurrency(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMulticurrency" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M1.2 7.93V5.124h8.976v.85a4.144 4.144 0 01.526-.053 4.165 4.165 0 01.596.06V1.759A1.118 1.118 0 0010.176.636H1.199A1.113 1.113 0 00.083 1.758L.077 8.491a1.118 1.118 0 001.122 1.122h5.336a4.2 4.2 0 01.284-1.122H1.76a.563.563 0 01-.56-.561zm0-6.172h8.976V2.88H1.199z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.702 6.922a3.221 3.221 0 103.221 3.22 3.222 3.222 0 00-3.221-3.22zm.32 4.81v.35a.13.13 0 01-.13.13h-.38a.13.13 0 01-.13-.13v-.336a.852.852 0 01-.744-.758.27.27 0 01.03-.102.132.132 0 01.101-.043h.394a.14.14 0 01.13.102.192.192 0 00.205.16h.335a.348.348 0 00.35-.292.267.267 0 00-.087-.247.3.3 0 00-.248-.102H10.6a.998.998 0 01-1.006-.875.966.966 0 01.787-1.05v-.335a.13.13 0 01.132-.13h.378a.13.13 0 01.132.13v.336a.852.852 0 01.743.758.27.27 0 01-.03.102.132.132 0 01-.101.043h-.394a.14.14 0 01-.13-.102.192.192 0 00-.205-.16h-.335a.348.348 0 00-.35.291.267.267 0 00.088.248.3.3 0 00.247.102h.292a.962.962 0 01.175 1.91z" })] })));
}
exports.default = SolidMulticurrency;
