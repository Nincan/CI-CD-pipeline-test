"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUsers(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUsers" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M2.855 4.593a1.379 1.379 0 00.982-2.354 1.414 1.414 0 00-1.964 0 1.373 1.373 0 000 1.95 1.387 1.387 0 00.982.404zm9.229-.404a1.396 1.396 0 01-1.964 0 1.373 1.373 0 010-1.95 1.414 1.414 0 011.964 0 1.374 1.374 0 010 1.95zM7.92 5.563a1.39 1.39 0 01-2.372-.978 1.368 1.368 0 01.409-.978 1.43 1.43 0 011.963 0 1.383 1.383 0 010 1.956zm-.958 1.093H6.91a3.067 3.067 0 00-3.096 3.031v2.015a.46.46 0 00.465.455h5.317a.46.46 0 00.464-.455V9.687a3.067 3.067 0 00-3.097-3.03zm2.184-.555a2.695 2.695 0 011.94-.82 2.82 2.82 0 012.788 2.85v1.795a.444.444 0 01-.437.448c-.186 0-2.046.048-2.629.064a.169.169 0 01-.129-.05.177.177 0 01-.05-.132v-.008a4.615 4.615 0 00-.332-2.122A8.58 8.58 0 009.16 6.75l-.013-.013a.455.455 0 010-.635zm-4.294 0a2.695 2.695 0 00-1.94-.82A2.82 2.82 0 00.126 8.13v1.795a.444.444 0 00.437.448c.186 0 2.046.048 2.629.064a.169.169 0 00.129-.05.177.177 0 00.05-.132v-.008a4.614 4.614 0 01.332-2.122A8.583 8.583 0 014.84 6.75l.013-.013a.455.455 0 000-.635z" }) })));
}
exports.default = SolidUsers;
