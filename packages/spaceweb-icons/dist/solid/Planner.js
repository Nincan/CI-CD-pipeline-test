"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPlanner(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPlanner" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.056 12.073c0 .73.643 1.328 1.429 1.328h9.031c.786 0 1.428-.597 1.428-1.328V5.839H1.056v6.234zM6.13 8.405h.08c.293 0 .524-.054.693-.163.17-.11.277-.285.32-.528h.65v4.292H6.99v-3.03h-.86v-.57zm5.386-6.428h-.756V.599H9.37v1.378H4.63V.599H3.24v1.378h-.756c-.785 0-1.428.656-1.428 1.458V4.48h11.888V3.435c0-.802-.642-1.458-1.428-1.458z" }, void 0) }), void 0));
}
exports.default = SolidPlanner;
