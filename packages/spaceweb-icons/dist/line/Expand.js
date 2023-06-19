"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Expand.svg instead.
 */
function LineExpand(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 12 12", "data-icon-name": "LineExpand" }, props, { children: [(0, jsx_runtime_1.jsx)("style", {}), (0, jsx_runtime_1.jsx)("path", { d: "M2.004 5.608a.5.5 0 01.34.133L5.999 9.14l3.655-3.4a.501.501 0 01.682.733l-3.997 3.715a.5.5 0 01-.682 0L1.663 6.474a.5.5 0 01.34-.866z" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.995 1.848a.5.5 0 01.34.866L6.34 6.428a.5.5 0 01-.682 0L1.663 2.714a.501.501 0 01.682-.732l3.653 3.397 3.656-3.397a.498.498 0 01.341-.134z" })] })));
}
exports.default = LineExpand;
