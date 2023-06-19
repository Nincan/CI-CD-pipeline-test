"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineCard(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineCard" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.402 2.08H1.598A1.545 1.545 0 00.054 3.624v6.752a1.545 1.545 0 001.544 1.544h10.804a1.545 1.545 0 001.544-1.544V3.624a1.545 1.545 0 00-1.544-1.544zm.143 8.296a.144.144 0 01-.143.144H1.598a.144.144 0 01-.143-.144V3.624a.144.144 0 01.143-.144h10.804a.144.144 0 01.143.144z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.545 4.974H5.48a.506.506 0 000 1.013h5.064a.506.506 0 100-1.013zm0 1.688h-7.09a.506.506 0 100 1.013h7.09a.506.506 0 100-1.013zm0 1.688h-7.09a.506.506 0 100 1.013h7.09a.506.506 0 100-1.013z" })] })));
}
exports.default = LineCard;
