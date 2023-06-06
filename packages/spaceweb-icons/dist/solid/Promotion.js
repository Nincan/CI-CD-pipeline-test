"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPromotion(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPromotion" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M13.069 6.819a.41.41 0 000 .362l.522 1.068a1.215 1.215 0 01-.524 1.614l-1.05.558a.41.41 0 00-.214.293l-.205 1.171a1.215 1.215 0 01-1.373.998l-1.177-.167a.41.41 0 00-.345.112l-.855.827a1.215 1.215 0 01-1.696 0l-.855-.827a.41.41 0 00-.345-.112l-1.177.167a1.242 1.242 0 01-.175.012 1.215 1.215 0 01-1.198-1.01l-.205-1.171a.41.41 0 00-.214-.293l-1.05-.558A1.215 1.215 0 01.41 8.25l.52-1.07a.41.41 0 000-.362L.409 5.75a1.215 1.215 0 01.524-1.614l1.05-.558a.41.41 0 00.214-.293l.205-1.171a1.215 1.215 0 011.373-.997l1.177.166a.41.41 0 00.345-.112l.855-.827a1.215 1.215 0 011.696 0l.855.827a.41.41 0 00.345.112l1.177-.167a1.215 1.215 0 011.373.998l.205 1.171a.41.41 0 00.213.293l1.05.558a1.215 1.215 0 01.525 1.614zM5.385 3.366a1.48 1.48 0 101.48 1.48 1.482 1.482 0 00-1.48-1.48zm0 2.154a.673.673 0 11.673-.673.674.674 0 01-.673.673zm3.994-1.47a.404.404 0 01.57.571L4.622 9.95a.404.404 0 01-.571-.571zM7.135 9.153a1.48 1.48 0 111.48 1.48 1.482 1.482 0 01-1.48-1.48zm.807 0a.673.673 0 10.673-.673.674.674 0 00-.673.673z" }, void 0) }), void 0));
}
exports.default = SolidPromotion;
