"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTarget(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 15 16", "data-icon-name": "SolidTarget" }, props, { children: (0, jsx_runtime_1.jsx)("path", { clipRule: "evenodd", d: "M14.514 1.486L16 1.657 14.057 3.6l-1.143-.114-5.028 5.028a.276.276 0 01-.4 0 .276.276 0 010-.4l5.028-5.028-.114-1.143L14.343 0l.171 1.486zm.572 6.971A7.536 7.536 0 017.543 16C3.37 16 0 12.571 0 8.457 0 4.343 3.371.914 7.543.914c1.657 0 3.143.515 4.4 1.429l.057.571-1.371 1.372a5.263 5.263 0 00-3.086-1.029c-2.857 0-5.2 2.343-5.2 5.2s2.343 5.2 5.2 5.2 5.2-2.343 5.2-5.2c0-1.143-.4-2.228-1.029-3.086L13.086 4l.571.057a7.367 7.367 0 011.429 4.4zm-4.8-1.657l-1.6 1.6c0 .629-.515 1.086-1.086 1.086-.571 0-1.086-.515-1.086-1.086 0-.571.515-1.086 1.086-1.086l1.543-1.6a3.072 3.072 0 00-1.6-.457 3.195 3.195 0 00-3.2 3.2c0 1.772 1.428 3.2 3.2 3.2 1.771 0 3.2-1.428 3.2-3.2 0-.628-.172-1.143-.457-1.657z" }) })));
}
exports.default = SolidTarget;
