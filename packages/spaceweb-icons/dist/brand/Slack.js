"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSlack(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSlack" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.137 0a1.4 1.4 0 0 0 0 2.8h1.398V1.4A1.4 1.4 0 0 0 5.137 0m0 3.733H1.41a1.4 1.4 0 0 0 0 2.8h3.726a1.4 1.4 0 0 0 0-2.8ZM13.986 5.133a1.397 1.397 0 1 0-2.795 0v1.4h1.398a1.399 1.399 0 0 0 1.397-1.4Zm-3.726 0V1.4a1.397 1.397 0 1 0-2.794 0v3.733a1.397 1.397 0 1 0 2.794 0ZM8.863 14a1.4 1.4 0 0 0 0-2.8H7.465v1.4A1.4 1.4 0 0 0 8.863 14Zm0-3.734h3.726a1.4 1.4 0 0 0 0-2.8H8.863a1.4 1.4 0 0 0 0 2.8ZM.014 8.866a1.397 1.397 0 1 0 2.795 0v-1.4H1.41a1.399 1.399 0 0 0-1.397 1.4Zm3.726 0V12.6a1.397 1.397 0 1 0 2.794 0V8.868a1.397 1.397 0 1 0-2.794-.002", fillRule: "evenodd" }) })));
}
exports.default = BrandSlack;
