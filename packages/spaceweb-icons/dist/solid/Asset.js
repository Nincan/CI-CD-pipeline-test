"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAsset" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.49 5.606H4.405a.55.55 0 1 1 0-1.1H9.49a.55.55 0 1 1 0 1.1z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.582 7.17c0-.09-.023-.18-.066-.26l-2.611-4.869a.55.55 0 0 0-.485-.29l-6.85-.003a.55.55 0 0 0-.485.29L.476 6.911a.552.552 0 0 0-.065.26v4.53c0 .305.246.55.55.55h12.078a.55.55 0 0 0 .55-.55l-.007-4.531zM3.899 2.848l6.193.003 2.02 3.77H9.75l.04.587c.008.122-.012.631-.264.9-.128.138-.315.205-.571.205H4.957c-.168-.007-.713-.11-.713-1.142v-.55H1.879l2.02-3.773z" })] })));
}
exports.default = SolidAsset;
