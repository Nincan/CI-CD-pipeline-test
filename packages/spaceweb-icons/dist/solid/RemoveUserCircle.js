"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidRemoveUserCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidRemoveUserCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.7 8.71H8.362a.294.294 0 100 .587H9.7a.294.294 0 100-.587z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm-.466 2.748a1.454 1.454 0 11-1.455 1.454 1.455 1.455 0 011.455-1.454zm-2.42 7.676a.393.393 0 01-.394-.393V8.692a2.631 2.631 0 012.625-2.624h.375a2.61 2.61 0 011.656.599 2.207 2.207 0 00-.276.1 2.46 2.46 0 00-1.526 2.272 2.414 2.414 0 00.422 1.368c.006.006.006.011.012.017zM10.86 9.37a1.84 1.84 0 01-.51.957 1.905 1.905 0 01-.958.511 1.87 1.87 0 01-2.09-2.548 1.85 1.85 0 01.405-.61 1.946 1.946 0 01.61-.406 1.855 1.855 0 01.717-.14 1.854 1.854 0 011.72 1.156 1.838 1.838 0 01.106 1.08z" }, void 0)] }), void 0));
}
exports.default = SolidRemoveUserCircle;
