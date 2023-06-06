"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAsterisk(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAsterisk" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.44605,4.17667l-.77778-1.34556a.78582.78582,0,0,0-1.06555-.28778L8.55383,4.30889V.77778A.78007.78007,0,0,0,7.77605,0H6.22049a.78006.78006,0,0,0-.77777.77778V4.30889L2.38605,2.54333a.77246.77246,0,0,0-1.05778.28L.55049,4.16889a.77478.77478,0,0,0,.28,1.06555L3.88716,7,.83049,8.76556A.78582.78582,0,0,0,.54272,9.83111l.77777,1.34556a.78584.78584,0,0,0,1.06556.28778L5.44272,9.69111v3.53111A.78006.78006,0,0,0,6.22049,14H7.77605a.78007.78007,0,0,0,.77778-.77778V9.69111l3.05666,1.76556a.779.779,0,0,0,1.06556-.28778l.77778-1.34556a.779.779,0,0,0-.28778-1.06555L10.10938,7l3.05667-1.76556A.76754.76754,0,0,0,13.44605,4.17667Z" }, void 0) }), void 0));
}
exports.default = SolidAsterisk;
