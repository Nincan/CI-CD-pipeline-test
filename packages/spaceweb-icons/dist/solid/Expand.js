"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidExpand(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidExpand" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.85 6.503l-.99-.98" }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M12.822.004l-6.6.272a1.438 1.438 0 00-.946.428 1.275 1.275 0 00-.112 1.793l6.329 6.329a1.127 1.127 0 00.9.314 1.476 1.476 0 001.321-1.372l.272-6.6A1.092 1.092 0 0012.822.004zM.002 12.824l.27-6.599a1.438 1.438 0 01.429-.946 1.275 1.275 0 011.793-.111l6.328 6.328a1.127 1.127 0 01.314.9 1.476 1.476 0 01-1.371 1.322l-6.6.27a1.092 1.092 0 01-1.164-1.163z" })] })));
}
exports.default = SolidExpand;
