"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidProduct(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidProduct" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.773 5.345l-1.73-.912 1.7-.938a.433.433 0 00-.014-.766L9.593.64a.433.433 0 00-.399.005l-2.29 1.22L4.674.69a.43.43 0 00-.403 0L.228 2.847a.43.43 0 00.005.762l1.78.918 4.947-2.63 4.95 2.56-4.857 2.588-5.019-2.522-1.764.94a.429.429 0 00.004.759l4.121 2.132a.429.429 0 00.41-.008l2.243-1.278 2.292 1.18a.426.426 0 00.395-.002l4.04-2.148a.426.426 0 00-.002-.753z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M4.448 9.281a.397.397 0 01-.18-.043L1.871 8.04a.383.383 0 01-.068-.053l.004.387c.006.836.013 1.645.029 2.455a.34.34 0 00.187.206q.993.51 1.985 1.017 1.32.674 2.64 1.353V8.233l-2.02 1.006a.405.405 0 01-.18.042zm7.764-1.282a.383.383 0 01-.065.05l-2.395 1.2a.397.397 0 01-.18.043.405.405 0 01-.18-.042l-1.937-.964V13.4q2.268-1.221 4.554-2.424a.366.366 0 00.23-.383 144.44 144.44 0 01-.021-1.863l-.006-.732z" }, void 0)] }), void 0));
}
exports.default = SolidProduct;
