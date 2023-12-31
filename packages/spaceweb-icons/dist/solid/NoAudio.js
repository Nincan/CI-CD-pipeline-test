"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidNoAudio(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidNoAudio" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.372 12.579L10.314 9.52l-5.91-5.91L1.427.633a.554.554 0 00-.783.784L2.93 3.703h-.868A1.477 1.477 0 00.586 5.178v3.644a1.477 1.477 0 001.476 1.476h2.241l3.627 3.375.16.122a1.466 1.466 0 00.747.205 1.492 1.492 0 001.024-.412 1.458 1.458 0 00.453-1.064v-1.437l2.275 2.275a.554.554 0 00.783-.783zM12.23 7a4.616 4.616 0 01-.634 2.236l.862.862A5.852 5.852 0 0013.414 7a7.978 7.978 0 00-1.067-3.256.592.592 0 00-1.022.596A6.696 6.696 0 0112.23 7zM10.314 1.477A1.474 1.474 0 008.094.203L5.218 2.858l5.096 5.096z" }) })));
}
exports.default = SolidNoAudio;
