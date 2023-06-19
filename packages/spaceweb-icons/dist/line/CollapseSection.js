"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineCollapseSection(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineCollapseSection" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.29 8.066H.706A.703.703 0 00.7 9.472h12.59a.703.703 0 000-1.406zM7.902 2.396H13.3a.703.703 0 000-1.406H7.907a.703.703 0 10-.005 1.406zM13.3 4.528H7.1a.703.703 0 10-.005 1.406H13.3a.703.703 0 000-1.406zM13.29 11.604H.706A.703.703 0 00.7 13.01h12.59a.703.703 0 000-1.406zM2.757 4.69a.47.47 0 00.102.067l.086.056a.614.614 0 00.283.072.654.654 0 00.251-.05A1.02 1.02 0 003.7 4.69l2.553-2.564a.666.666 0 00-.944-.94L3.227 3.277l-2.09-2.093a.666.666 0 10-.942.943z" }) })));
}
exports.default = LineCollapseSection;
