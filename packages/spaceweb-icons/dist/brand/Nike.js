"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandNike(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandNike" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.085 4.503l-.017.033a3.339 3.339 0 00-.43 1.028 1.845 1.845 0 00-.061.651c.037.538.406.971.932 1.09.244.055.49.058.738.038.369-.029.724-.131 1.079-.225l4.218-1.12 4.48-1.191.845-.224a.047.047 0 01.031 0l-.038.016L5.539 8.16c-.628.269-1.256.538-1.886.802a5.462 5.462 0 01-1.257.383 2.812 2.812 0 01-.879.06c-.327-.029-.634-.118-.894-.328a1.154 1.154 0 01-.511-.909 1.991 1.991 0 01.11-.95 3.92 3.92 0 01.609-1.211c.288-.421.618-.808.958-1.187l.249-.274.042-.046.005.003z" }) })));
}
exports.default = BrandNike;
