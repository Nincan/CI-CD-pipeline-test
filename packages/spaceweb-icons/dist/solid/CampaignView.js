"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCampaignView(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCampaignView" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.376 9.154a3.899 3.899 0 0 0-3.633 2.427 3.93 3.93 0 0 0 7.257 0 3.888 3.888 0 0 0-3.624-2.427Zm0 3.934a1.51 1.51 0 1 1 1.507-1.507 1.508 1.508 0 0 1-1.507 1.507Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.376 10.669a.908.908 0 1 0 .904.912.907.907 0 0 0-.904-.912ZM5.295 8.907a1.077 1.077 0 0 0 1.022-.75H4.274a1.076 1.076 0 0 0 1.021.75Z" }), (0, jsx_runtime_1.jsx)("path", { d: "m8.76 8.43-.074-.262H7.595v-.004h-.222v-.006h-.404a1.705 1.705 0 0 1-3.346 0h-.22a1.163 1.163 0 0 1-1.159-.843c-.033-.111-.071-.222-.094-.335a1.15 1.15 0 0 1 .5-1.201q1.296-.852 2.592-1.699l1.916-1.254-.105-.37a.324.324 0 1 1 .623-.18l1.404 4.91.286.963c.011.037.02.075.032.112a5.005 5.005 0 0 1 .978-.107 4.872 4.872 0 0 1 1.201.163V1.679A1.754 1.754 0 0 0 9.807 0H1.68A1.674 1.674 0 0 0 0 1.67v8.229a1.674 1.674 0 0 0 1.67 1.677h3.997l.148-.368A4.845 4.845 0 0 1 8.761 8.43Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.558 3.918 7.72 7.69c.234 0 .563-.017.823-.021l-1.24-4.337c-.214.154-.558.463-.745.585Z" })] })));
}
exports.default = SolidCampaignView;
