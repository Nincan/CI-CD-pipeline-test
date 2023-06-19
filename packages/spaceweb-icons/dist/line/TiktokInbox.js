"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineTiktokInbox(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineTiktokInbox" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.613 5.456a.341.341 0 0 0-.34.34v.683a.341.341 0 0 0 .34.34h4.774a.341.341 0 0 0 .34-.34v-.682a.341.341 0 0 0-.34-.341Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M1.544 0A1.364 1.364 0 0 0 .18 1.364v8.866a1.364 1.364 0 0 0 1.364 1.364H4.64l1.84 2.166a.683.683 0 0 0 1.04 0l1.84-2.166h3.096a1.364 1.364 0 0 0 1.364-1.364V1.364A1.364 1.364 0 0 0 12.456 0Zm0 10.23V1.364h10.912v8.866H9.049a.683.683 0 0 0-.521.24L7 12.277 5.472 10.47a.683.683 0 0 0-.52-.241Z", fillRule: "evenodd" })] })));
}
exports.default = LineTiktokInbox;
