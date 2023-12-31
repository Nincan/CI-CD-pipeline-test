"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidNoRetry(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidNoRetry" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.9 8.84a.88.88 0 00-.38-.1.85.85 0 00-.77.47 5.22 5.22 0 01-4.6 3A1.89 1.89 0 017.16 14l.55-.03A7 7 0 0013.3 10a.88.88 0 00-.4-1.17zm.22-7.61a.88.88 0 00-.62.26l-.56.57A7 7 0 000 6.86a1.87 1.87 0 01.95-.26 1.88 1.88 0 01.81.19A5.22 5.22 0 0110.7 3.3L9.37 4.63a.87.87 0 00.61 1.5h3.14a.88.88 0 00.88-.88V2.11a.88.88 0 00-.88-.88zM6.17 7.9a.9.9 0 00-1.26 0L3.24 9.53 1.59 7.87A.89.89 0 10.32 9.1l1.65 1.68-1.68 1.65a.89.89 0 001.25 1.27l1.68-1.65 1.65 1.67a.89.89 0 001.26-1.24L4.48 10.8l1.68-1.65a.89.89 0 00.01-1.26z" }) })));
}
exports.default = SolidNoRetry;
