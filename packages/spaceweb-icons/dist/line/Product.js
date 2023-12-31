"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineProduct(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineProduct" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.14 2.79c-.01-.03-.04-.05-.06-.07-.03-.04-.06-.08-.1-.1l-.06-.03c-.02-.01-.02-.03-.04-.03L6.98.12a.56.56 0 00-.43 0L.65 2.56c-.02 0-.03.02-.05.03-.02 0-.04 0-.06.02l-.1.1-.06.08a.55.55 0 00-.09.29v7.85a.56.56 0 00.35.52l5.9 2.42a.56.56 0 00.44 0l5.9-2.42a.56.56 0 00.35-.52V3.08c0-.1-.04-.2-.09-.3zM6.76 1.25l4.4 1.81-1.25.49-4.45-1.76 1.3-.54zM3.98 2.4l.08.05 4.31 1.7-.68.27-.93.36-1-.39-3.4-1.33 1.62-.67zM1.42 3.9L4.24 5l1.96.77v6.74l-4.78-1.96V3.9zm10.68 6.65l-1.72.7V9.62a.56.56 0 00-1.13 0v2.06l.02.05-1.94.8V5.76L9.26 5v1.62a.56.56 0 001.12 0V4.57l1.72-.67v6.66z" }) })));
}
exports.default = LineProduct;
