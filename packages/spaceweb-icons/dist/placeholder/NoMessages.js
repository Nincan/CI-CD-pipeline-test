"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderNoMessages(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderNoMessages" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M39.98 10.13a.96.96 0 0 0 0-.1l-.01-.04a.85.85 0 0 0-.2-.37.65.65 0 0 0-.19-.19.99.99 0 0 0-.12-.08l-.03-.02a.98.98 0 0 0-.1-.03.97.97 0 0 0-.1-.04L4.27.53a1.02 1.02 0 0 0-.87.19l-3 2.37-.05.04-.05.04c-.02.01-.02.04-.04.06a.99.99 0 0 0-.12.17l-.03.06-.04.07a1 1 0 0 0-.06.3v25.99a.98.98 0 0 0 .04.17.98.98 0 0 0 .05.18.96.96 0 0 0 .08.15.99.99 0 0 0 .13.15.94.94 0 0 0 .07.09l.06.03a1.01 1.01 0 0 0 .1.06.98.98 0 0 0 .2.09l.03.01 34.97 8.72a1.03 1.03 0 0 0 .25.03l.06-.01a1 1 0 0 0 .23-.04h.03l.07-.04a.97.97 0 0 0 .11-.05l.04-.04.08-.04 3.01-2.36a1 1 0 0 0 .39-.79v-25.9a.97.97 0 0 0-.02-.1ZM18.7 19.97 4.32 5.74l28.75 7.18ZM2 6.29l9.3 9.2L2 26.94ZM12.74 16.9l5.05 5c.01 0 .03 0 .04.02a.99.99 0 0 0 .25.16l.08.04a1 1 0 0 0 .33.06h.01a1 1 0 0 0 .41-.1h.03l4.98-2.44 10 17.3-31.14-7.77Zm12.99 1.85 9.24-4.54v20.51Z" }) })));
}
exports.default = PlaceholderNoMessages;
