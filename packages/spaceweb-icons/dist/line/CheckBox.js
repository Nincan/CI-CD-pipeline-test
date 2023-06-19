"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/CheckBox.svg instead.
 */
function LineCheckBox(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineCheckBox" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.25 1.2a.55.55 0 01.55.55v10.5a.55.55 0 01-.55.55H1.75a.55.55 0 01-.55-.55V1.75a.55.55 0 01.55-.55h10.5m0-1.2H1.75A1.75 1.75 0 000 1.75v10.5A1.75 1.75 0 001.75 14h10.5A1.75 1.75 0 0014 12.25V1.75A1.75 1.75 0 0012.25 0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.583 10.231a.597.597 0 01-.42-.172L2.692 7.63a.6.6 0 11.842-.856l2.048 2.015 4.88-4.843a.6.6 0 11.85.847l-.005.005-5.3 5.26a.597.597 0 01-.423.174z" })] })));
}
exports.default = LineCheckBox;
