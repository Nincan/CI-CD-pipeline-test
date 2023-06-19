"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandNewscred(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandNewscred" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.988 8.959q.005-4.244 0-8.487a.548.548 0 0 0-.064-.384L9.323 4.642Q7.15 2.489 4.975.339c-.098-.097-.16-.249-.33-.256a.609.609 0 0 0-.131.077Q2.33 2.331.152 4.506c-.072.071-.178.13-.134.262a.849.849 0 0 0-.016.117Q0 9.303.002 13.721c0 .06-.023.135.126.178l4.518-4.536q2.192 2.172 4.388 4.34c.086.086.136.258.32.203l.01-9.063-.01 9.063c1.553-1.48 3.064-3 4.56-4.536.13-.118.074-.273.074-.411ZM3.892 1.837 3.884 7.51l-.794-.779L1.314 4.99l-.295-.29q1.436-1.432 2.873-2.862Zm6.214 10.3.006-5.59 2.796 2.781a188.826 188.826 0 0 1-2.802 2.808Z" }) })));
}
exports.default = BrandNewscred;
