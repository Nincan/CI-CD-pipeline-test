"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineDistributedControlPanel(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineDistributedControlPanel" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.373 7.993V.701a.6.6 0 00-1.199 0v7.292c-.688.248-1.185.9-1.185 1.673s.497 1.426 1.185 1.674v1.979a.6.6 0 001.2 0v-1.98c.688-.247 1.184-.9 1.184-1.673s-.496-1.425-1.185-1.673zm-.6 2.258a.586.586 0 010-1.17.586.586 0 010 1.17zm10.174-.585a1.78 1.78 0 00-1.185-1.673V.701a.6.6 0 00-1.2 0v7.292c-.688.248-1.184.9-1.184 1.673s.496 1.426 1.185 1.674v1.979a.6.6 0 001.199 0v-1.98a1.78 1.78 0 001.185-1.673zm-1.785.585a.586.586 0 010-1.17.586.586 0 010 1.17zM7.461 4.142V.7a.6.6 0 00-1.199 0v3.44c-.689.248-1.185.902-1.185 1.675s.496 1.426 1.185 1.673v5.83a.6.6 0 001.2 0v-5.83c.688-.247 1.184-.9 1.184-1.673S8.15 4.389 7.46 4.142zm-.6 2.259a.586.586 0 01-.002-1.17h.005a.586.586 0 01-.002 1.17z" }) })));
}
exports.default = LineDistributedControlPanel;
