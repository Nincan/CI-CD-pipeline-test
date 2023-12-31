"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPhotoshopAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPhotoshopAsset" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.543 5.678h-.551v1.201h.532a.539.539 0 00.564-.607.525.525 0 00-.545-.594z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.04 0H1.916a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5H12.04a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zM5.747 7.809H4.99v1.369H3.906v-4.43h1.84A1.418 1.418 0 017.19 6.272a1.429 1.429 0 01-1.444 1.537zm2.996 1.443a1.923 1.923 0 01-1.276-.47l.459-.72a1.34 1.34 0 00.81.323c.162 0 .317-.044.317-.149 0-.279-1.493-.31-1.493-1.35 0-.602.576-.973 1.314-.973a1.672 1.672 0 011.12.365l-.365.762a1.275 1.275 0 00-.755-.26c-.161 0-.316.044-.316.155 0 .241 1.493.28 1.493 1.307 0 .546-.483 1.01-1.308 1.01z" })] })));
}
exports.default = SolidPhotoshopAsset;
