"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAddReply(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAddReply" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.75816,8.4868A1.68554,1.68554,0,0,1,9.019,8.46042h.43959V8.02084a1.701,1.701,0,0,1,1.31785-1.65346A6.29853,6.29853,0,0,0,7.10555,3.61214,8.01946,8.01946,0,0,0,5.15049,3.2717L5.137,3.27091V1.53655a.5072.5072,0,0,0-.41969-.52915.48107.48107,0,0,0-.39941.10025.74087.74087,0,0,0-.07754.07168Q2.21935,3.18852.19957,5.199H.19878a.51353.51353,0,0,0,0,.81153L1.54367,7.36726,4.226,10.07567a.56151.56151,0,0,0,.39606.19384.47778.47778,0,0,0,.059-.00421A.50524.50524,0,0,0,5.137,9.73608l.00079-1.3568V7.86106l.14164-.00336c.1795-.00671.34887-.01435.53343-.01264a6.71858,6.71858,0,0,1,2.625.48367C8.55149,8.37605,8.65132,8.43423,8.75816,8.4868Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.29959,9.46073H11.8597V8.02084a.70041.70041,0,0,0-1.40082,0V9.46073H9.019a.70041.70041,0,1,0,0,1.40082h1.4399v1.43989a.70041.70041,0,0,0,1.40082,0V10.86155h1.43989a.70041.70041,0,1,0,0-1.40082Z" })] })));
}
exports.default = SolidAddReply;
