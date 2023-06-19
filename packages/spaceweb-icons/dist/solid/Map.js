"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMap(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMap" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.471 11.352l-3.787 2.273a.557.557 0 01-.568 0l-2.77-1.654a4.092 4.092 0 00.466-1.463L9.4 12.06V4.283L5.07 1.685v5.093a3.787 3.787 0 00-1.824-.585c-.081 0-.163-.007-.247-.007s-.168 0-.249.007a3.773 3.773 0 00-2.003.712V2.84a.524.524 0 01.255-.45L4.79.117a.557.557 0 01.568 0l4.04 2.426L13.269.22a.303.303 0 01.458.26v10.422a.524.524 0 01-.255.45z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.474 8.88a2.68 2.68 0 00-2.291-1.562h-.366A2.68 2.68 0 00.525 8.881a2.868 2.868 0 00.541 3.152l1.698 1.825.016.016a.321.321 0 00.454-.016l1.698-1.826a2.868 2.868 0 00.542-3.151zM3 11.305a1.25 1.25 0 111.25-1.25A1.25 1.25 0 013 11.304z" })] })));
}
exports.default = SolidMap;
