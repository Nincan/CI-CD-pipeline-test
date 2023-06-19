"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandVoiceCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandVoiceCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", fill: "#00ce35", r: "7" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.707 8.816a12.116 12.116 0 00-.797-.589 49.647 49.647 0 01-.138-.097c-.286-.2-.542-.298-.785-.298-.327 0-.611.18-.846.536-.104.158-.23.235-.386.235a.767.767 0 01-.311-.078c-.922-.418-1.58-1.059-1.956-1.905-.182-.408-.123-.676.197-.893.182-.123.52-.353.496-.793-.027-.5-1.129-2.002-1.593-2.173a.905.905 0 00-.615-.002c-.534.18-.917.495-1.108.912-.185.402-.177.875.024 1.367.579 1.422 1.393 2.662 2.42 3.685 1.006 1.001 2.241 1.822 3.673 2.438.129.056.264.086.363.108l.084.02a.14.14 0 00.035.005h.012c.673 0 1.481-.615 1.73-1.317.217-.614-.18-.917-.5-1.161z", fill: "#fff" })] })));
}
exports.default = BrandVoiceCircleClr;
