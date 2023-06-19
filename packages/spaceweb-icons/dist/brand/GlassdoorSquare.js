"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandGlassdoorSquare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandGlassdoorSquare" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.988.012H1.012a1 1 0 0 0-1 1v11.976a1 1 0 0 0 1 1h11.976a1 1 0 0 0 1-1V1.012a1 1 0 0 0-1-1zm-9.815 6.19V3.165a1.509 1.509 0 0 1 1.524-1.518h4.63a1.526 1.526 0 0 1 1.494 1.365c.012.128-.008.173-.153.173Q7.78 3.176 4.894 3.18c-.186 0-.186 0-.186.18v5.966c0 .188 0 .188-.191.188-.4 0-.8-.004-1.2.003-.119.002-.147-.037-.146-.15.004-1.055.002-2.11.002-3.164zm7.653 1.582v2.983a1.526 1.526 0 0 1-1.589 1.587h-4.56a1.533 1.533 0 0 1-1.503-1.373c-.01-.125.013-.165.149-.164 1.934.004 3.867.001 5.801.006.135 0 .167-.031.166-.166-.004-2.002-.002-4.005-.006-6.007 0-.137.04-.174.173-.172q.599.012 1.199 0c.132-.002.174.033.173.17-.006 1.046-.003 2.091-.003 3.136z" }) })));
}
exports.default = BrandGlassdoorSquare;
