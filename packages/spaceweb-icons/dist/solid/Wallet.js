"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidWallet(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidWallet" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M11.038 4.467H14A3.481 3.481 0 0010.16.7H3.84A3.473 3.473 0 000 4.437v5.126A3.473 3.473 0 003.84 13.3h6.32A3.473 3.473 0 0014 9.563v-.218h-2.962a2.44 2.44 0 110-4.878zm0 1.044h2.44a.516.516 0 01.522.51v1.77a.522.522 0 01-.523.51h-2.383a1.474 1.474 0 01-1.462-1.116 1.388 1.388 0 01.303-1.156 1.464 1.464 0 011.103-.518zm.106 1.862h.23a.522.522 0 100-1.043h-.23a.536.536 0 00-.378.149.51.51 0 00-.157.366.535.535 0 00.535.528zM3.316 4.467h3.952a.522.522 0 100-1.043H3.316a.529.529 0 00-.535.515.534.534 0 00.535.528z" }, void 0) }), void 0));
}
exports.default = SolidWallet;
