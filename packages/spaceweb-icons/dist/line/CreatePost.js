"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/CreatePost.svg instead.
 */
function LineCreatePost(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineCreatePost" }, props, { children: (0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.242 6.602l-.33 1.902a.54.54 0 0 0 .159.482.534.534 0 0 0 .492.142l1.853-.397c.342-.072.656-.243.907-.492l4.862-4.862c.709-.71.7-1.875-.019-2.594-.685-.684-1.888-.684-2.576 0L5.749 5.624c-.269.27-.444.609-.507.978zm1.072.184a.72.72 0 0 1 .204-.392l4.84-4.842a.74.74 0 0 1 1.057.018.735.735 0 0 1 0 1.038l-4.86 4.86a.736.736 0 0 1-.366.2l-1.067.23.192-1.112z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.99 6.456c-.023-.252-.23-.453-.488-.453s-.465.2-.49.453H13v6.316a.228.228 0 0 1-.228.228H1.228A.228.228 0 0 1 1 12.772V1.23c0-.127.102-.23.228-.23h6.05V.989c.014 0 .025.008.04.008a.498.498 0 0 0 0-.997c-.015 0-.026.007-.04.008V0h-6.05A1.23 1.23 0 0 0 0 1.229v11.543C0 13.45.55 14 1.228 14h11.544A1.23 1.23 0 0 0 14 12.772V6.456h-.01z" })] }) })));
}
exports.default = LineCreatePost;
