"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidEvent(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidEvent" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.449 3.842L3.414.048h-.001V.046H3.41A.598.598 0 0 0 3.18 0c-.012 0-.021.006-.032.006-.03.002-.055.012-.084.017a.58.58 0 0 0-.176.063c-.013.007-.029.006-.041.015-.014.009-.019.024-.031.034a.588.588 0 0 0-.13.142c-.014.022-.03.04-.042.063a.59.59 0 0 0-.066.262v12.194h-.794a.601.601 0 0 0 0 1.204h2.79a.601.601 0 0 0 0-1.203h-.793V8.51l8.663-3.557a.601.601 0 0 0 .005-1.111z" }) })));
}
exports.default = SolidEvent;
