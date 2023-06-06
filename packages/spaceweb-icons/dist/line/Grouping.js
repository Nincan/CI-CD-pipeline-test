"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineGrouping(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineGrouping" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.592 1.255h12.816a.591.591 0 1 0 0-1.183H.592a.591.591 0 1 0 0 1.183zm12.816 11.49H.592a.591.591 0 1 0 0 1.183h12.816a.591.591 0 1 0 0-1.183zm0-4.225H7.766a.591.591 0 1 0 0 1.183h5.642a.591.591 0 1 0 0-1.182zm0-4.223H7.766a.591.591 0 1 0 0 1.182h5.642a.591.591 0 1 0 0-1.182zM1.187 7.592h1.52v1.52a.591.591 0 0 0 1.183 0v-1.52h1.52a.591.591 0 1 0 0-1.183H3.89V4.89a.591.591 0 0 0-1.184 0v1.52h-1.52a.591.591 0 1 0 0 1.183z" }, void 0) }), void 0));
}
exports.default = LineGrouping;
