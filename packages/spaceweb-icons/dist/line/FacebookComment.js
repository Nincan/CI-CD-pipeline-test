"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineFacebookComment(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineFacebookComment" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.22439.02028H2.78384A2.78262,2.78262,0,0,0,0,2.80166V8.41207a2.78784,2.78784,0,0,0,2.78384,2.7837h.6593v2.27906a.51259.51259,0,0,0,.2929.46395.49.49,0,0,0,.21163.04069.51276.51276,0,0,0,.33384-.12209l3.06027-2.66161h3.88253A2.786,2.786,0,0,0,14,8.41207V2.804A2.78077,2.78077,0,0,0,11.22439.02028Zm1.75825,8.3918a1.76818,1.76818,0,0,1-1.75825,1.76627H6.98372l-.00814-.01628-2.515,2.19766V10.17835H2.78388A1.77,1.77,0,0,1,1.01747,8.41208V2.804A1.76478,1.76478,0,0,1,2.78078,1.03772h8.44361A1.76293,1.76293,0,0,1,12.98264,2.804Z" }) })));
}
exports.default = LineFacebookComment;
