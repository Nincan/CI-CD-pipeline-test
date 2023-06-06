"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineTwitterMessage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineTwitterMessage" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.90526.74163H2.09665A2.0959,2.0959,0,0,0,0,2.83732v8.33493a2.09389,2.09389,0,0,0,2.09665,2.08612h9.80861A2.09224,2.09224,0,0,0,14,11.17225V2.83732A2.09426,2.09426,0,0,0,11.90526.74163Zm1.1378,10.43062a1.13252,1.13252,0,0,1-1.1378,1.12919H2.09665A1.13971,1.13971,0,0,1,.95694,11.17225V3.95694L5.99043,7.39139a1.55852,1.55852,0,0,0,.90909.27751A1.69527,1.69527,0,0,0,7.8,7.41148l5.24306-3.378Zm0-8.26794L7.2823,6.60766a.69734.69734,0,0,1-.756-.00957L.95694,2.799A1.14108,1.14108,0,0,1,2.09665,1.69856h9.80861a1.13456,1.13456,0,0,1,1.1378,1.13876Z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = LineTwitterMessage;
