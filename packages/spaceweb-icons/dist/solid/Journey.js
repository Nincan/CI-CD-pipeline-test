"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidJourney(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidJourney" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.97 7.109c-.716 0-2.153.36-2.153 1.076v.881h4.307v-.88c0-.717-1.437-1.077-2.153-1.077z" }, void 0), (0, jsx_runtime_1.jsx)("ellipse", { cx: "6.97", cy: "5.347", rx: ".977", ry: ".979" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M1.275 7.094l1.353-1.047A4.477 4.477 0 0 1 7 2.52c2.28 0 4.14 1.708 4.422 3.91l.765-.592a.748.748 0 0 1 .858-.042l.924.58A6.998 6.998 0 0 0 .035 6.314l1.24.781zm11.415.252l-1.486 1.151C10.585 10.231 8.946 11.48 7 11.48a4.478 4.478 0 0 1-4.375-3.534l-.847.656a.749.749 0 0 1-.859.042L.1 8.126C.639 11.456 3.519 14 7 14c3.488 0 6.371-2.553 6.904-5.891l-1.213-.763z" }, void 0)] }), void 0));
}
exports.default = SolidJourney;
