"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Graph.svg instead.
 */
function LineGraph(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineGraph" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.62 14h-1.14a1.4 1.4 0 01-1.38-1.44v-3.3a1.4 1.4 0 011.38-1.44h1.14A1.4 1.4 0 0114 9.25v3.31A1.4 1.4 0 0112.62 14zm-1.14-5.09a.31.31 0 00-.28.34v3.31a.31.31 0 00.28.34h1.14a.31.31 0 00.28-.34v-3.3a.31.31 0 00-.28-.35zM7.57 14H6.43a1.37 1.37 0 01-1.38-1.36V1.36A1.37 1.37 0 016.43 0h1.14a1.37 1.37 0 011.38 1.36v11.28A1.37 1.37 0 017.57 14zM6.43 1.09a.28.28 0 00-.28.27v11.28a.28.28 0 00.28.27h1.14a.28.28 0 00.28-.27V1.36a.28.28 0 00-.28-.27zM2.52 14H1.38A1.4 1.4 0 010 12.56v-8.4a1.4 1.4 0 011.38-1.43h1.14A1.4 1.4 0 013.9 4.17v8.4A1.4 1.4 0 012.52 14zM1.38 3.83a.31.31 0 00-.28.34v8.4a.32.32 0 00.28.33h1.14a.32.32 0 00.28-.34v-8.4a.31.31 0 00-.28-.33z" }) })));
}
exports.default = LineGraph;
