"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidImageAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidImageAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.063 0H1.937a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h10.126a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zm-1.19 3.026a.875.875 0 11-.874.875.875.875 0 01.875-.875zM1.98 10.974h-.001l2.906-5.342a.696.696 0 011.237-.004l2.868 5.346zm7.493 0l-1.29-2.39 1.01-1.53c.08-.128.216-.226.264-.197a.34.34 0 01.258.186l2.432 3.931z" }, void 0) }), void 0));
}
exports.default = SolidImageAsset;
