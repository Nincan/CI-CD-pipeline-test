"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidApproveUser(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidApproveUser" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "5.67", cy: "2.527", r: "2.493" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7.826 9.662l.019-.019-.007-.007c-.005.009-.007.018-.012.026zm.934-.958l.013.014.032-.032c-.014.008-.03.01-.045.018zm.069-1.951a3.776 3.776 0 00-.474.171 4.192 4.192 0 00-1.892 6.242c.01.01.01.02.02.03H1.52a.675.675 0 01-.674-.675v-2.295a4.51 4.51 0 014.5-4.5h.644a4.475 4.475 0 012.839 1.027z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.908 9.537A3.198 3.198 0 008.73 7.795a3.34 3.34 0 00-1.047.695 3.174 3.174 0 00-.694 1.047 3.206 3.206 0 003.583 4.368 3.265 3.265 0 001.641-.875 3.211 3.211 0 00.695-3.493zm-.992.88l-1.86 1.862a.5.5 0 01-.707 0l-.943-.943a.5.5 0 01.707-.707l.589.59 1.507-1.509a.5.5 0 01.707.707z" }, void 0)] }), void 0));
}
exports.default = SolidApproveUser;
