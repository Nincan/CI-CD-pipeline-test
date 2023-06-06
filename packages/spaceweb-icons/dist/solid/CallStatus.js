"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCallStatus(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCallStatus" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.056 10.38a.754.754 0 00.437-.11 7.433 7.433 0 00.717-.82.63.63 0 00-.07-.69l-.025-.025s-.83-.545-1.097-.727a.714.714 0 00-.61-.115l-.03.012c-.207.125-.625.374-.72.42-.034.014-.13-.032-.186-.08-.643-.619-1.633-1.588-1.724-1.72-.076-.112.116-.499.31-.695a.688.688 0 00-.015-.867 12.305 12.305 0 00-.846-1.075l-.034-.037h-.002a.505.505 0 00-.405-.158c-.4.024-.78.49-.971.767a1.105 1.105 0 00-.182.691l.006.027a9.08 9.08 0 001.988 3.285 5.986 5.986 0 003.116 1.876 1.545 1.545 0 00.343.04zM4.123 2.073a.725.725 0 10-.725-.724.724.724 0 00.725.724zm-2.335.587a.724.724 0 10.725.725.724.724 0 00-.725-.724zm-.25 4.375a.725.725 0 10-.724.725.725.725 0 00.724-.725z" }, void 0), (0, jsx_runtime_1.jsx)("circle", { cx: "1.788", cy: "10.685", r: ".725" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M4.123 11.997a.725.725 0 10.724.725.725.725 0 00-.724-.725zM7.035.115a.696.696 0 100 1.392 5.529 5.529 0 010 11.057.696.696 0 100 1.392 6.92 6.92 0 000-13.84z" }, void 0)] }), void 0));
}
exports.default = SolidCallStatus;
