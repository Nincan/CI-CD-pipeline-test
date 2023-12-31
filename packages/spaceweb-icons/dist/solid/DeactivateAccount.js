"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDeactivateAccount(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 22 18", "data-icon-name": "SolidDeactivateAccount" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M16 0c-1.77 0-3.36.78-4.46 2H2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h15.27a2 2 0 002-2v-4.97A6 6 0 0016 0zM6.38 6.2c.86 0 1.55.68 1.55 1.53s-.7 1.53-1.55 1.53c-.85 0-1.55-.69-1.55-1.53s.7-1.53 1.55-1.53zm0 7.95H6.2c-1.64 0-2.93-.16-2.93-1.59 0-1.48 1.4-2.69 3.11-2.69s3.12 1.2 3.12 2.7c0 1.48-1.4 1.58-3.12 1.58zm12.89-4.4A4.96 4.96 0 0111 6c0-1.64.8-3.09 2.03-4A5 5 0 0121 6c0 1.5-.68 2.84-1.73 3.75zm-.89-2.5a.8.8 0 01-1.13 1.13L16 7.13l-1.25 1.25a.8.8 0 01-1.13-1.13L14.87 6l-1.25-1.25a.8.8 0 011.13-1.13L16 4.87l1.25-1.25a.8.8 0 011.13 1.13L17.13 6l1.25 1.25z" }) })));
}
exports.default = SolidDeactivateAccount;
