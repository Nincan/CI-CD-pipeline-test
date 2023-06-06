"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderExpired(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderExpired" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M24.464 19.873h-6.38v-8.466a1.505 1.505 0 00-3.01 0v9.97a1.505 1.505 0 001.505 1.506h7.885a1.505 1.505 0 000-3.01z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M36.056 25.05a17.482 17.482 0 00-3.458-19.766A17.683 17.683 0 008.28 4.608c-.012.01-.024.026-.036.037a18.328 18.328 0 00-2.259 1.69 17.545 17.545 0 0011.683 30.673 17.721 17.721 0 007.128-1.508 7.999 7.999 0 1011.26-10.45zm-4.119 11.586a1.013 1.013 0 111.013-1.013 1.014 1.014 0 01-1.013 1.013zm-.932-3.453v-5.091a.932.932 0 011.864 0v5.091a.926.926 0 01-.925.926h-.014a.926.926 0 01-.925-.926zm1.667-9.25a8.044 8.044 0 00-.735-.037 7.991 7.991 0 00-7.818 9.714A15.731 15.731 0 0117.67 35 15.525 15.525 0 017.31 7.841 16.229 16.229 0 019.3 6.347a1.137 1.137 0 00.1-.056 15.67 15.67 0 0119.404 2.176q.55.55 1.038 1.145a15.454 15.454 0 012.83 14.32z" }, void 0)] }), void 0));
}
exports.default = PlaceholderExpired;
