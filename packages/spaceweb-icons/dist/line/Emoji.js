"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/SentimentHappy.svg instead.
 */
function LineEmoji(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineEmoji" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.6 4.9a.7.7 0 11-1.399.001A.7.7 0 015.6 4.9m4.199 0a.7.7 0 11-1.399.001.7.7 0 011.399-.001M3.546 8.473C3.582 8.555 4.473 10.5 7 10.5c2.547 0 3.418-1.944 3.454-2.027a.552.552 0 00-.283-.726.547.547 0 00-.72.283C9.422 8.088 8.8 9.396 7 9.396c-1.82 0-2.426-1.314-2.451-1.37a.549.549 0 10-1.003.447M7 1.2c3.198 0 5.8 2.602 5.8 5.8s-2.602 5.8-5.8 5.8A5.807 5.807 0 011.2 7c0-3.198 2.602-5.8 5.8-5.8M7 0a7 7 0 100 14A7 7 0 007 0" }) })));
}
exports.default = LineEmoji;
