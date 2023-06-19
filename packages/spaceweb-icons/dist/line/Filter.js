"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Filter.svg instead.
 */
function LineFilter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineFilter" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.637 14a.691.691 0 01-.3-.069c-.257-.122-.41-.382-.41-.696V7.1L.587 1.194C.405.942.373.645.5.396S.886 0 1.192 0h11.616c.306 0 .566.149.692.398.127.249.095.547-.086.794L9.066 7.11v3.695c0 .2-.01.411-.019.467l-.028.189-.273.261-.216.172-2.396 1.921a.795.795 0 01-.497.186zm-.255-1.124l-.001.001zM2.086 1.202l4.043 5.505v5.57l1.648-1.321.086-.07v-4.17l4.051-5.514H2.086z" }) })));
}
exports.default = LineFilter;
