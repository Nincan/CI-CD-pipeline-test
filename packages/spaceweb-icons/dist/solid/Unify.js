"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidUnify(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidUnify" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.725 9.594V6.776a1.089 1.089 0 00-1.087-1.088H7.586V2.245l1.127 1.127a.6.6 0 00.849-.85L7.41.373a.596.596 0 00-.192-.128L7.215.242a.592.592 0 00-.309-.03.553.553 0 00-.07.013.584.584 0 00-.274.147L4.41 2.523a.6.6 0 00.848.849l1.128-1.128v3.444H2.333a1.089 1.089 0 00-1.087 1.088v2.818a1.847 1.847 0 101.2 0V6.89h3.94v2.705a1.846 1.846 0 101.2 0V6.89h3.939v2.705a1.846 1.846 0 101.2 0z" }, void 0) }), void 0));
}
exports.default = SolidUnify;
