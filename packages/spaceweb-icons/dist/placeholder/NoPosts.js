"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderNoPosts(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderNoPosts" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M39.866 10.185a.988.988 0 00-.007-.1c-.003-.012-.01-.022-.012-.033a1.961 1.961 0 00-.104-.259.844.844 0 00-.273-.297.973.973 0 00-.121-.082c-.01-.005-.019-.015-.03-.02a1.41 1.41 0 01-.195-.071L4.349.646a1.005 1.005 0 00-.861.185L.505 3.181l-.002.001v.001l-.006.005a.981.981 0 00-.253.313l-.03.06a.988.988 0 00-.092.395l-.003.014v25.75a1 1 0 00.758.97l3.575.89 1.666 5.888c.006.022.02.04.028.06a1.192 1.192 0 00.196.325c.016.018.022.042.04.06.014.013.032.017.046.03a.986.986 0 00.215.138.782.782 0 00.436.115h.003a.974.974 0 00.27-.038c.019-.006.032-.02.05-.026a.97.97 0 00.176-.09.971.971 0 00.169-.115c.015-.014.035-.02.05-.034l4.297-4.413 23.542 5.871a1.019 1.019 0 00.218.026c.009 0 .017.006.025.006a1 1 0 00.616-.212l3.002-2.345a.999.999 0 00.384-.788V10.293a.966.966 0 00-.015-.108zM34.878 37.1l-22.857-5.7a.95.95 0 00-.158-.007.754.754 0 00-.367.037.952.952 0 00-.164.06.973.973 0 00-.17.117.937.937 0 00-.104.07L7.57 35.258l-1.353-4.782a.932.932 0 00-.049-.095.973.973 0 00-.104-.203 1.365 1.365 0 00-.269-.258.974.974 0 00-.188-.089.934.934 0 00-.108-.051l-3.38-.841V5.254l26.91 6.717 5.85 1.46z" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.61 13.56l9 2.228a1.024 1.024 0 00.241.03 1 1 0 00.24-1.971l-9-2.228a1 1 0 10-.48 1.942zm-.73 3.828a1 1 0 00.73 1.21l23.504 5.817a1.025 1.025 0 00.241.03 1 1 0 00.24-1.971L7.09 16.657a1.002 1.002 0 00-1.21.73zm24.714 9.051L7.091 20.622a1 1 0 10-.48 1.942l23.503 5.816a1.025 1.025 0 00.241.03 1 1 0 00.24-1.971z" })] })));
}
exports.default = PlaceholderNoPosts;
