"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandVisaClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandVisaClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0 0h14v14H0Z", fill: "#00579f", fillRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.048 8.696h-.886l.554-3.385H6.6Zm3.208-3.302a2.204 2.204 0 0 0-.793-.144c-.875 0-1.49.46-1.494 1.12-.007.486.44.756.776.918.342.166.459.274.459.421-.004.227-.277.331-.532.331a1.78 1.78 0 0 1-.83-.18l-.117-.054-.124.76a2.728 2.728 0 0 0 .987.18c.93 0 1.534-.454 1.54-1.155.004-.386-.232-.681-.742-.922-.31-.155-.5-.26-.5-.418.004-.144.16-.292.51-.292a1.519 1.519 0 0 1 .66.13l.08.036Zm1.177 2.103.353-.947c-.003.007.073-.198.116-.324l.063.291s.167.81.203.98h-.735Zm1.092-2.186h-.684a.437.437 0 0 0-.463.281L9.063 8.696h.93l.185-.508h1.136c.026.119.106.508.106.508h.82Zm-7.102 0L3.556 7.62l-.095-.468a2.598 2.598 0 0 0-1.223-1.418l.794 2.96h.936L5.36 5.31Z", fill: "#fff" }), (0, jsx_runtime_1.jsx)("path", { d: "M2.751 5.311H1.327l-.014.069A2.95 2.95 0 0 1 3.462 7.15l-.31-1.555a.366.366 0 0 0-.4-.285Z", fill: "#fff" })] })));
}
exports.default = BrandVisaClr;
