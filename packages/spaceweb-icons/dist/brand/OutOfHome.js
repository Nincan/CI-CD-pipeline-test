"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandOutOfHome(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandOutOfHome" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.279.03H.72a.691.691 0 00-.69.691V7.98a.69.69 0 00.69.69H6.33v3.978h-.63a1.318 1.318 0 00-1.04.46 1.297 1.297 0 00-.328.862h5.347c-.016-.107-.024-.206-.047-.3a1.33 1.33 0 00-1.312-1.022h-.654V8.67h5.614a.69.69 0 00.69-.691V.72a.691.691 0 00-.69-.69zm-.305 7.077a.568.568 0 01-.567.567H1.593a.568.568 0 01-.567-.567V1.593a.568.568 0 01.567-.567h10.814a.568.568 0 01.567.567z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.575 6.68H2.422a.403.403 0 01-.404-.404V2.45a.403.403 0 01.404-.404h1.005v.215h-.229a.314.314 0 100 .628h1.086a.314.314 0 100-.628h-.23v-.215h2.631v.215h-.229a.314.314 0 100 .628h1.086a.314.314 0 100-.628h-.23v-.215h2.63v.215h-.229a.314.314 0 000 .628H10.8a.314.314 0 100-.628h-.23v-.215h1.006a.403.403 0 01.404.404v3.827a.403.403 0 01-.404.403z" })] })));
}
exports.default = BrandOutOfHome;
