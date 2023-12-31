"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidEmlAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidEmlAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.063 0H1.937a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h10.126a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zm-1.804 4.342L6.998 6.566l-3.26-2.224zm.508 4.83a.482.482 0 01-.476.486H3.71a.482.482 0 01-.477-.486V4.875l3.566 2.432c.005.004.011.002.017.005a.35.35 0 00.177.056h.009a.35.35 0 00.178-.056c.005-.003.011-.001.017-.005l3.57-2.435z" }) })));
}
exports.default = SolidEmlAsset;
