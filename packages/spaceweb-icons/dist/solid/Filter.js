"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFilter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFilter" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.637 14a.691.691 0 01-.3-.07.741.741 0 01-.41-.696V7.1L.587 1.194A.757.757 0 01.5.396a.753.753 0 01.692-.397h11.616a.752.752 0 01.692.398.75.75 0 01-.086.794L9.066 7.11v3.695a4.648 4.648 0 01-.019.467l-.028.19-.273.26-.216.172-2.396 1.921a.795.795 0 01-.497.186z" }) })));
}
exports.default = SolidFilter;
