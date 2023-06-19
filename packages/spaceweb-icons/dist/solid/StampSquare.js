"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidStampSquare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidStampSquare" }, props, { children: [(0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", tslib_1.__assign({ id: "solid_stampSquare__a" }, { children: (0, jsx_runtime_1.jsx)("path", { fill: "none", d: "M0 0h14v14H0z" }) })) }), (0, jsx_runtime_1.jsx)("g", tslib_1.__assign({ clipPath: "url(#solid_stampSquare__a)" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.444 0H1.556A1.56 1.56 0 0 0 0 1.556v10.887A1.56 1.56 0 0 0 1.556 14h10.887A1.56 1.56 0 0 0 14 12.444V1.556A1.56 1.56 0 0 0 12.444 0Zm-1.47 11.595H3.025a.498.498 0 1 1 0-.992h7.947a.498.498 0 1 1 0 .992Zm.498-1.984a.498.498 0 0 1-.498.498H3.025a.498.498 0 0 1-.498-.498v-.997a1.495 1.495 0 0 1 1.495-1.49h2.47V5.806a1.738 1.738 0 1 1 .997 0v1.318h2.47a1.495 1.495 0 0 1 1.495 1.49Z" }) }))] })));
}
exports.default = SolidStampSquare;
