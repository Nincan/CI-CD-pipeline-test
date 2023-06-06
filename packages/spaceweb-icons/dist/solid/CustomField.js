"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCustomField(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCustomField" }, props, { children: (0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.25 11.394v.856H1.75V1.75h1.668c.45 0 .816-.365.816-.816V.82a.82.82 0 0 0-.82-.82h-2.9A.514.514 0 0 0 0 .514v12.973c0 .283.23.513.513.513h12.974c.283 0 .513-.23.513-.513v-2.13a.856.856 0 0 0-.856-.857c-.494 0-.894.4-.894.894zm0-.894" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M6.67 7a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-2.662.247c.007.361.001.722.001 1.083.003.441-.002.882.01 1.322.003.112.05.199.133.27.09.077.198.084.307.085h3.344c.221 0 .442-.005.663-.008a.3.3 0 0 0 .067-.008c.21-.05.392-.146.54-.31.158-.178.328-.345.492-.516l.765-.794.487-.506.758-.787.504-.524c.254-.264.508-.527.76-.791l.488-.506.566-.586a.362.362 0 0 0 .068-.419c-.037-.078-.101-.13-.16-.188-.252-.247-.5-.499-.753-.744-.286-.277-.564-.563-.851-.84-.242-.234-.477-.476-.72-.71-.292-.284-.58-.573-.871-.86L9.79.104A.374.374 0 0 0 9.289.09c-.141.125-.277.256-.414.385l-.511.482-.904.855-.521.492-.751.711-.5.472-.918.868c-.157.15-.312.3-.47.447a.883.883 0 0 0-.299.67c.001.592-.006 1.184.007 1.776" }, void 0)] }, void 0) }), void 0));
}
exports.default = SolidCustomField;
