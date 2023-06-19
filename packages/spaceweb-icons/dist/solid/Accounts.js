"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAccounts(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 19 19", "data-icon-name": "SolidAccounts" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M17.5 1.962h-16a1.5 1.5 0 00-1.5 1.5v12.08a1.5 1.5 0 001.5 1.5h16a1.5 1.5 0 001.5-1.5V3.462a1.5 1.5 0 00-1.5-1.5zm-8 2.918a1.834 1.834 0 11-1.834 1.834A1.834 1.834 0 019.5 4.88zm1.624 8.93H7.876a1.943 1.943 0 01-1.413-3.182 3.925 3.925 0 016.074 0 1.943 1.943 0 01-1.413 3.183z" }) })));
}
exports.default = SolidAccounts;
