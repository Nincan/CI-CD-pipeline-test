"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandYext(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandYext" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.5 0s3.426 4.606 5.064 6.777a.307.307 0 0 1 0 .446C6.926 9.393 3.5 14 3.5 14H.044S3.49 9.377 5.146 7.178a.245.245 0 0 0 0-.356C3.926 5.206.044 0 .044 0Zm10.456 0s-3.398 4.555-4.408 5.902c-.039.052-.081.102-.135.17-.05-.055-.095-.099-.132-.148-.49-.653-.976-1.31-1.473-1.957a.245.245 0 0 1 .004-.356Q9.164 1.811 10.5 0ZM10.5 14q-1.332-1.814-2.688-3.61a.247.247 0 0 1-.004-.357c.501-.654.99-1.316 1.485-1.975.03-.04.066-.075.11-.126a1.51 1.51 0 0 1 .106.113Q11.735 11.02 13.956 14Z" }, void 0) }), void 0));
}
exports.default = BrandYext;
