"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCaptionAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCaptionAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.043 0H1.917a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h10.126a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zM6.545 6.352h-.972v-.324H4.278v1.944h1.295v-.324h.972v.647a.65.65 0 01-.647.649H3.954a.65.65 0 01-.648-.649v-2.59a.65.65 0 01.648-.649h1.944a.65.65 0 01.647.648zm1.778-.324v1.944h1.295v-.324h.972v.647a.65.65 0 01-.648.649H8a.65.65 0 01-.648-.649v-2.59A.65.65 0 018 5.056h1.943a.65.65 0 01.648.648v.648h-.972v-.324z" }) })));
}
exports.default = SolidCaptionAsset;
