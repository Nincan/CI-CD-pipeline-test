"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDynamicTemplateAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDynamicTemplateAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.176 0H2.05a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h10.126a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zm-1.771 1.87v-.001a.756.756 0 100 .001zM5.23 4.122a.601.601 0 011.07-.003l2.478 4.618H2.72zm6.255 7.573a.436.436 0 01-.435.436H3.175a.436.436 0 01-.435-.436v-.713a.435.435 0 01.435-.436h7.876a.436.436 0 01.435.436zm-2.291-2.96v.002L8.08 6.669l.873-1.32c.068-.111.186-.196.228-.17a.29.29 0 01.222.16l2.102 3.396z" }) })));
}
exports.default = SolidDynamicTemplateAsset;
