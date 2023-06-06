"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidExitFullScreen(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidExitFullScreen" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.224 8.416a.63.63 0 00-.522-.616.367.367 0 00-.083-.016c-.012-.001-.022-.008-.035-.008l-.014.003c-.012 0-.023-.003-.035-.003H2.78a.673.673 0 00-.69.69.716.716 0 00.058.28.595.595 0 00.136.212l.89.885L.22 12.795a.657.657 0 000 .984.657.657 0 00.984 0l2.955-2.955.863.859a.636.636 0 00.05.05l.004.003a.597.597 0 00.422.174c.007 0 .013-.004.02-.004l.016.003a.673.673 0 00.689-.689V8.465c0-.006-.006-.012-.007-.018 0-.011.007-.02.007-.031zm1.553-2.791a.63.63 0 00.522.615.367.367 0 00.082.017c.013 0 .023.007.035.007l.015-.003c.011 0 .023.003.035.003h2.755a.673.673 0 00.689-.689.716.716 0 00-.058-.281.595.595 0 00-.135-.212l-.89-.885 2.952-2.951a.657.657 0 000-.984.657.657 0 00-.984 0L9.841 3.216l-.864-.859a.632.632 0 00-.05-.05l-.003-.003a.597.597 0 00-.423-.173c-.006 0-.012.003-.019.003l-.016-.003a.673.673 0 00-.689.689v2.755c0 .006.006.013.006.019 0 .01-.006.02-.006.03z" }, void 0) }), void 0));
}
exports.default = SolidExitFullScreen;
