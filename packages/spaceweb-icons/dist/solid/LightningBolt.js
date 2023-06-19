"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLightningBolt(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLightningBolt" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.918 13.995a.455.455 0 01-.463-.513l.73-4.928H3.347c-.714 0-.268-.583-.251-.606C4.117 6.215 5.65 3.65 7.678.23a.474.474 0 01.405-.225.455.455 0 01.462.513l-.73 4.928h2.847c.324 0 .503.147.324.513q-4.002 6.691-4.663 7.81a.464.464 0 01-.405.226z" }) })));
}
exports.default = SolidLightningBolt;
