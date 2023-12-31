"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCustomerProfile(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCustomerProfile" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.772 4.873a2.43 2.43 0 1 0-2.429-2.43 2.431 2.431 0 0 0 2.43 2.43zm2.908 1.57-.023-.015a4.312 4.312 0 0 0-.268-.185 4.396 4.396 0 0 0-.424-.231c-.094-.046-.185-.094-.282-.133a4.315 4.315 0 0 0-.553-.172c-.073-.019-.143-.046-.218-.06a4.264 4.264 0 0 0-.828-.086h-.642a4.264 4.264 0 0 0-.828.086c-.075.014-.145.041-.219.06a4.338 4.338 0 0 0-.551.172c-.098.039-.19.087-.283.133a4.415 4.415 0 0 0-.424.23c-.092.059-.18.121-.268.186-.063.046-.133.084-.194.134l.022.008A4.361 4.361 0 0 0 .072 9.946v2.236a.657.657 0 0 0 .657.657h5.622A4.635 4.635 0 0 1 7.68 6.443z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.263 6.656a3.665 3.665 0 1 0 3.665 3.664 3.665 3.665 0 0 0-3.665-3.664zm-.367 6.57a2.928 2.928 0 0 1-2.565-2.906 2.977 2.977 0 0 1 .077-.656l1.755 1.756v.366a.735.735 0 0 0 .733.733zm2.53-.93a.727.727 0 0 0-.697-.51h-.367v-1.1a.368.368 0 0 0-.366-.366h-2.2v-.733h.734a.368.368 0 0 0 .366-.366v-.733h.733a.735.735 0 0 0 .733-.733v-.15a2.925 2.925 0 0 1 1.063 4.69z" })] })));
}
exports.default = SolidCustomerProfile;
