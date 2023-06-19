"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDecimal(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDecimal" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M1.352 9.317v-3.69l-.782.33a.315.315 0 01-.47-.224L.025 5.52a.355.355 0 01.215-.476l1.411-.629a1.113 1.113 0 01.553-.1c.215 0 .338.13.338.369v4.634a.338.338 0 01-.376.369H1.72a.332.332 0 01-.368-.369zm3.776.031l-.015-.1a.484.484 0 01.176-.475l1.857-1.68a1.618 1.618 0 00.722-1.152.748.748 0 00-.845-.729.764.764 0 00-.782.414c-.1.208-.177.323-.399.323H5.42c-.246 0-.4-.146-.345-.384A1.779 1.779 0 017.046 4.23a1.751 1.751 0 011.972 1.734 2.393 2.393 0 01-.997 1.788l-1.159.982.008.03c.3-.03 1.051-.045 1.113-.045h.898a.338.338 0 01.368.376v.222a.332.332 0 01-.368.369H5.527a.37.37 0 01-.399-.338zm4.844-.038a.296.296 0 01-.054-.468l.184-.238a.323.323 0 01.46-.085 1.99 1.99 0 001.06.269c.805 0 1.196-.468 1.196-.936a.892.892 0 00-.99-.845 1.373 1.373 0 00-.46.078.357.357 0 01-.445-.131l-.084-.107a.32.32 0 01.068-.468l1.251-1.098H10.34a.307.307 0 01-.338-.338v-.299a.305.305 0 01.338-.33h3.13a.303.303 0 01.33.33v.115a.504.504 0 01-.192.407l-1.327 1.143a1.422 1.422 0 01.315.031A1.53 1.53 0 0114 7.883c0 1.05-.805 1.887-2.295 1.887a3.187 3.187 0 01-1.733-.46z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "3.789", cy: "9.189", r: ".493" })] })));
}
exports.default = SolidDecimal;
