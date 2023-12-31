"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandPhoneCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandPhoneCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40A3F5", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.998 10.599H3.385c-.04 0-.082 0-.123-.002-.05-.002-.076-.028-.079-.077-.043-.886.049-1.749.453-2.554.512-1.017 1.327-1.665 2.427-1.95.465-.12.938-.144 1.415-.084.695.088 1.32.339 1.87.772.57.45.964 1.03 1.206 1.713.166.468.25.95.265 1.445.006.218-.004.436-.005.655 0 .052-.027.076-.074.08-.043.002-.087.001-.13.001H6.998zm.008-3.502A1.09 1.09 0 005.89 8.204c0 .639.475 1.12 1.107 1.12a1.096 1.096 0 001.12-1.122 1.091 1.091 0 00-1.111-1.105z" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.343 6.304l-.8-1.123s.29-.29.443-.423c.68-.59 1.475-.948 2.342-1.16.47-.116.946-.178 1.429-.193 1.012-.03 1.991.126 2.926.526.67.285 1.262.682 1.748 1.23.008.008.015.018.025.03l-.781 1.11-.087-.044c-.425-.235-.846-.476-1.276-.702a.639.639 0 01-.339-.45 2.82 2.82 0 01-.05-.341c-.004-.04-.022-.057-.053-.074a2.537 2.537 0 00-.7-.228 5.946 5.946 0 00-1.044-.101 5.836 5.836 0 00-1.452.139 2.187 2.187 0 00-.531.192c-.034.018-.044.04-.047.076-.017.215-.044.428-.173.61a.415.415 0 01-.128.12c-.481.27-.964.536-1.452.806z" })] }))] })));
}
exports.default = BrandPhoneCircleClr;
