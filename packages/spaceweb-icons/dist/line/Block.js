"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Block.svg instead.
 */
function LineBlock(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineBlock" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zM1.183 7A5.823 5.823 0 017 1.183c1.391 0 2.669.492 3.67 1.31L2.494 10.67A5.788 5.788 0 011.183 7zM7 12.817a5.788 5.788 0 01-3.67-1.31l8.177-8.178A5.788 5.788 0 0112.817 7 5.823 5.823 0 017 12.817z" }) })));
}
exports.default = LineBlock;
