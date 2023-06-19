"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandStackExchangeLine(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandStackExchangeLine" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.098 6.603v1.321H1.826v-1.32h10.272m.5-.5H1.326v2.32h11.272v-2.32ZM12.098 3.604v1.321H1.826v-1.32h10.272m.5-.5H1.326v2.32h11.272v-2.32ZM10.835.5a1.312 1.312 0 0 1 1.263 1.354v.102H1.826v-.102A1.333 1.333 0 0 1 3.135.5h7.7m0-.5h-7.7a1.833 1.833 0 0 0-1.809 1.854v.602h11.272v-.602A1.806 1.806 0 0 0 10.835 0ZM12.174 9.587v.103a1.333 1.333 0 0 1-1.309 1.354h-.527a.5.5 0 0 0-.359.152l-1.522 1.57v-1.222a.5.5 0 0 0-.5-.5H3.135A1.333 1.333 0 0 1 1.826 9.69v-.103h10.348m.5-.5H1.326v.603a1.833 1.833 0 0 0 1.809 1.854h4.822V14l2.381-2.456h.527a1.833 1.833 0 0 0 1.809-1.854v-.603Z" }) })));
}
exports.default = BrandStackExchangeLine;
