"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidThread(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 15.94 15.29", "data-icon-name": "SolidThread" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M14.1 6.52c1.02 0 1.84-.82 1.84-1.83V1.83C15.94.82 15.12 0 14.11 0H1.83C.82 0 0 .82 0 1.83V4.7C0 5.7.82 6.52 1.83 6.52h1.22v2.25H1.83C.82 8.77 0 9.59 0 10.6v2.86c0 1 .82 1.83 1.83 1.83h12.28c1.01 0 1.83-.82 1.83-1.83V10.6c0-1.01-.82-1.83-1.83-1.83H3.88V6.52H14.1zm-6.89 4.5c0-.3.23-.52.52-.52h3.31c.29 0 .52.23.52.51v.03c0 .29-.23.52-.52.52H7.73a.51.51 0 01-.52-.52v-.03zm0 2c0-.3.23-.52.52-.52h1.14c.28 0 .51.23.51.51v.03c0 .29-.23.52-.5.52H7.72a.51.51 0 01-.52-.52v-.03zm-2.2-1a1.54 1.54 0 11-3.09 0 1.54 1.54 0 013.09 0zm2.2-9.92c0-.29.23-.52.52-.52h3.31c.29 0 .52.23.52.52v.03c0 .28-.23.51-.52.51H7.73a.51.51 0 01-.52-.51V2.1zm0 2c0-.29.23-.52.52-.52h1.14c.28 0 .51.23.51.52v.03c0 .28-.23.51-.5.51H7.72a.51.51 0 01-.52-.51V4.1zm-5.29-.84a1.54 1.54 0 113.1 0 1.54 1.54 0 01-3.1 0z" }) })));
}
exports.default = SolidThread;
