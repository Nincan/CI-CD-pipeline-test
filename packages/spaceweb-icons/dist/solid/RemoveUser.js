"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidRemoveUser(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidRemoveUser" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M8.73 7.795a3.198 3.198 0 014.178 1.742 3.211 3.211 0 01-.695 3.493c-.45.445-1.02.749-1.64.875a3.206 3.206 0 01-3.584-4.368c.16-.392.395-.748.694-1.047a3.338 3.338 0 011.047-.695zM5.99 5.726a4.475 4.475 0 012.839 1.027 3.86 3.86 0 00-.473.171 4.214 4.214 0 00-2.618 3.896 4.138 4.138 0 00.725 2.346l.02.03H1.52a.674.674 0 01-.674-.675v-2.295a4.511 4.511 0 014.5-4.5zm5.108 4.53H8.804a.503.503 0 000 1.007h2.294a.503.503 0 000-1.007zM5.67.034a2.493 2.493 0 110 4.986 2.493 2.493 0 010-4.986z" }) })));
}
exports.default = SolidRemoveUser;
