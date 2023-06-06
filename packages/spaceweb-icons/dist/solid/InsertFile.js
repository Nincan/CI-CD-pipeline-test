"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidInsertFile(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 494.554 494.554", "data-icon-name": "SolidInsertFile" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M464.962 16.626C464.962 7.441 457.507 0 448.337 0H114.845c-9.171 0-16.626 7.441-16.626 16.626v141.807h33.252V33.252H431.71v351.659h-59.795c-9.176 0-16.625 7.436-16.625 16.627v59.766H131.471V337.159H98.219v140.769c0 9.186 7.455 16.626 16.626 16.626h257.07c4.593 0 8.749-1.87 11.752-4.873l.016-.016 76.391-76.359.016-.016a16.56 16.56 0 004.873-11.752V16.626z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M172.989 327.305a14.522 14.522 0 008.977 13.428 14.565 14.565 0 005.569 1.104c3.798 0 7.519-1.474 10.292-4.255l79.492-79.508a14.549 14.549 0 004.272-10.277c0-3.865-1.544-7.563-4.272-10.291l-79.492-79.492a14.524 14.524 0 00-10.292-4.27c-1.881 0-3.767.359-5.569 1.101a14.564 14.564 0 00-8.977 13.445v23.396H44.139c-8.022 0-14.548 6.508-14.548 14.547v83.129c0 8.037 6.525 14.549 14.548 14.549h128.85v23.394z" }, void 0)] }), void 0));
}
exports.default = SolidInsertFile;
