"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAddAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAddAsset" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.772 3.542a.498.498 0 00-.496-.501h-4.59a.5.5 0 000 1.001h4.59a.498.498 0 00.496-.5z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.205 6.807a3.869 3.869 0 01.718.072l-.002-1.39a.5.5 0 00-.06-.235L9.506.82a.495.495 0 00-.437-.264L2.885.553a.495.495 0 00-.437.264L.094 5.254a.507.507 0 00-.059.237v4.125a.498.498 0 00.496.501h6.85a3.876 3.876 0 013.824-3.31zM8.26 6.344a.661.661 0 01-.515.186H4.138c-.152-.006-.644-.1-.644-1.04v-.5H1.36l1.823-3.435 5.588.003 1.824 3.432H8.462l.036.535a1.288 1.288 0 01-.238.819z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.204 7.926a2.76 2.76 0 102.76 2.76 2.764 2.764 0 00-2.76-2.76zm1.322 3.26h-.822v.822a.5.5 0 11-1 0v-.821h-.821a.5.5 0 010-1h.821v-.822a.5.5 0 011 0v.822h.822a.5.5 0 010 1z" })] })));
}
exports.default = SolidAddAsset;
