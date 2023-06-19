"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandEmailClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandEmailClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M7 11.948H.94a.942.942 0 01-.94-.94V2.992c0-.517.423-.94.94-.94h12.12c.517 0 .94.423.94.94v8.016c0 .517-.423.94-.94.94H6.3" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M1.743 10.251a.396.396 0 00.293.134.37.37 0 00.258-.1l3.369-2.968 1.093.847a.38.38 0 00.24.082.388.388 0 00.241-.082l1.128-.873 3.334 2.99a.392.392 0 00.55-.03.393.393 0 00-.03-.55L8.994 6.804l3.21-2.491a.387.387 0 00.068-.547.387.387 0 00-.546-.068l-4.729 3.67-1.11-.865-3.61-2.801a.386.386 0 00-.546.069.386.386 0 00.07.546L5.04 6.834l-3.257 2.87a.38.38 0 00-.039.546z" })] })));
}
exports.default = BrandEmailClr;
