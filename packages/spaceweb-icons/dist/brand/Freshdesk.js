"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandFreshdesk(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandFreshdesk" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.23 0H6.98A7.03 7.03 0 000 7.02v.01A6.98 6.98 0 006.98 14h.04A6.98 6.98 0 0014 7.02V1.73A1.75 1.75 0 0012.23 0zm-2.05 8.5a1.05 1.05 0 01-.82 1.03v.08a1.28 1.28 0 01-1.27 1.27H7.1a.17.17 0 01-.16-.17c0-.07.08-.11.16-.11h.98a1 1 0 00.99-1v-.03h-.82v-2.5h1.24v-.7a2.49 2.49 0 00-4.97 0v.7h1.22v2.5h-.9A1.09 1.09 0 013.77 8.5V6.32a3.2 3.2 0 013.2-3.2 3.17 3.17 0 013.21 3.24z" }) })));
}
exports.default = BrandFreshdesk;
