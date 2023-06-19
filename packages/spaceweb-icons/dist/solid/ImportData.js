"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidImportData(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidImportData" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { x: ".514", y: "9.033", width: "12.971", height: "4.967", rx: "1" }), (0, jsx_runtime_1.jsx)("path", { d: "m4.537 5.417 1.978 1.898h.002v.002h.001l.002.002v.001h.001l.002.002a.697.697 0 0 0 .423.185.702.702 0 0 0 .492-.154q.025-.02.048-.042l1.975-1.894a.698.698 0 0 0 .023-.987.69.69 0 0 0-.516-.212c-.01 0-.017-.005-.026-.005H7.697V.695a.698.698 0 0 0-1.397 0v3.518H5.052c-.01 0-.02.005-.03.006a.696.696 0 0 0-.485 1.198Z" })] })));
}
exports.default = SolidImportData;
