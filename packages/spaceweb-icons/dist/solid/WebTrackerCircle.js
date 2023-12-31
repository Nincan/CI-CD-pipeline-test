"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidWebTrackerCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 24 24", "data-icon-name": "SolidWebTrackerCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.8 6.1c-1.5.3-2.7 1.3-3.3 2.6l1.9-.1c.3-.9.8-1.7 1.4-2.5zm-1.9 5.3c0-.6 0-1.2.2-1.8l-2 .1c-.3 1.1-.2 2.3.4 3.3h1.6c-.1-.6-.2-1.1-.2-1.6zM7.1 14c.6.8 1.5 1.4 2.5 1.6-.4-.5-.8-1.1-1.1-1.7l-1.4.1zm8-5.7c-.7-1.2-1.9-2-3.2-2.3.5.7 1 1.5 1.3 2.4l1.9-.1zm-2.9.2c-.4-.8-.8-1.5-1.3-2.2-.6.7-1 1.5-1.4 2.3l2.7-.1zm4.6 6h.3c-.2-.8-.8-1.5-1.7-1.7v.2c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-.2c-.8.2-1.5.8-1.7 1.7h.3c.3 0 .5.2.5.5s-.2.5-.5.5h-.3c.2.8.8 1.5 1.7 1.7v-.3c0-.3.2-.5.5-.5s.5.2.5.5v.3c.8-.2 1.5-.8 1.7-1.7h-.3c-.3 0-.5-.2-.5-.5s.3-.5.5-.5z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm-1.5 15.2v.1c0 .5.1 1 .3 1.5-3.2-.1-5.8-2.7-5.8-5.9C5 7.6 7.6 5 10.9 5c3.3 0 5.9 2.6 5.9 5.9-.3-.1-.7-.2-1-.2 0-.5-.1-.9-.3-1.4l-2 .1c.1.5.2 1 .2 1.5-.3.1-.6.3-.9.4 0-.6-.1-1.3-.3-1.9l-3.4.1c-.2.6-.2 1.2-.2 1.8 0 .5.1 1 .3 1.5l2.1-.1c-.2.3-.3.6-.5 1l-1.2.1c.2.5.5 1 .9 1.4zm8 .3h-.4c-.2 1.4-1.3 2.5-2.7 2.7v.4c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-.4c-1.4-.2-2.5-1.3-2.7-2.7h-.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h.4c.2-1.4 1.3-2.5 2.7-2.7v-.4c0-.3.2-.5.5-.5s.5.2.5.5v.4c1.4.2 2.5 1.3 2.7 2.7h.4c.3 0 .5.2.5.5 0 .2-.2.5-.5.5z" })] })));
}
exports.default = SolidWebTrackerCircle;
