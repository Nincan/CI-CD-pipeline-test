"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineTextHeightOne(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 20 20", "data-icon-name": "LineTextHeightOne" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M19.37 4.369a1.07 1.07 0 00-.884-.438.903.903 0 00-.706.24 8.706 8.706 0 00-.57.768 5.946 5.946 0 01-.91 1.026 5.988 5.988 0 01-1.37.87 5.485 5.485 0 00-.897.512.98.98 0 00-.363.828 1.158 1.158 0 00.328.816 1.047 1.047 0 00.784.354 4.725 4.725 0 002.236-1.171v6.336a1.673 1.673 0 00.353 1.138 1.222 1.222 0 00.966.421c.5 0 1.335-.24 1.335-1.858v-8.78a1.724 1.724 0 00-.302-1.062zM8.987 3.898a1.242 1.242 0 00-.966.412 1.71 1.71 0 00-.361 1.172v3.106H3.005V5.482a1.682 1.682 0 00-.372-1.18 1.284 1.284 0 00-.98-.404 1.234 1.234 0 00-.972.412 1.735 1.735 0 00-.353 1.172v9.029a1.748 1.748 0 00.356 1.178 1.238 1.238 0 00.97.413 1.281 1.281 0 00.974-.406 1.687 1.687 0 00.377-1.185v-3.676H7.66v3.676a1.748 1.748 0 00.356 1.178 1.239 1.239 0 00.971.413 1.282 1.282 0 00.974-.406 1.686 1.686 0 00.374-1.185V5.482a1.679 1.679 0 00-.37-1.18 1.282 1.282 0 00-.978-.404z" }) })));
}
exports.default = LineTextHeightOne;
