"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Like.svg instead.
 */
function LineLike(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineLike" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.396 5.21c-.271-.29-.762-.635-1.558-.635H9.227l-.014-2.143C9.18 1.364 8.43.258 7.102.258c-.1 0-.206.006-.318.02a1.2 1.2 0 00-1.05 1.19v2.138c-.007.092-.139 1.298-2.038 1.927-.04.013-.073.04-.111.057a1.171 1.171 0 00-.695-.248H1.238a1.2 1.2 0 00-1.2 1.2v5.788a1.2 1.2 0 001.2 1.2H2.89c.29 0 .545-.116.753-.287.347.294.8.488 1.366.488h5.635c.06.006.14.011.234.011 1.215 0 2.125-.798 2.32-2.032l.749-4.777a1 1 0 00.012-.107c.01-.159.032-.98-.563-1.616zM1.238 12.33V6.542H2.89v.027c-.003.035-.017.067-.017.103v4.924c.001.052.012.103.017.155v.58H1.238zm11.524-5.583l-.75 4.777c-.143.91-.82 1.018-1.134 1.018-.099 0-.162-.01-.162-.01H5.01c-.694 0-.873-.534-.92-.795V6.666c2.819-.942 2.846-3.06 2.846-3.06V1.469a1.22 1.22 0 01.167-.011c.881 0 .91.982.91.982l.019 2.743c0 .53.592.592.592.592h3.215c.988 0 .924.972.924.972z" }) })));
}
exports.default = LineLike;
