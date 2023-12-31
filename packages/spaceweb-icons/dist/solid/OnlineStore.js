"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidOnlineStore(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidOnlineStore" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.984 2.74a.776.776 0 0 0-.773.774h1.547a.776.776 0 0 0-.774-.773z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.648.028H2.352A2.301 2.301 0 0 0 .028 2.352v6.042a2.302 2.302 0 0 0 2.324 2.324H6.07v.465a.44.44 0 0 1-.465.465H5.14a1.37 1.37 0 0 0-1.395 1.394v.465a.44.44 0 0 0 .465.465h5.58a.439.439 0 0 0 .464-.465v-.465a1.37 1.37 0 0 0-1.394-1.394h-.465a.44.44 0 0 1-.465-.465v-.465h3.72a2.302 2.302 0 0 0 2.323-2.324V2.352A2.301 2.301 0 0 0 11.648.028zM9.421 7.769a1.26 1.26 0 0 1-.89.387H5.477a1.12 1.12 0 0 1-.89-.387 1.104 1.104 0 0 1-.31-.89l.31-3.017a.411.411 0 0 1 .387-.348h.464a1.547 1.547 0 0 1 3.095 0h.464a.411.411 0 0 1 .387.348L9.73 6.88a1.255 1.255 0 0 1-.31.89z" })] })));
}
exports.default = SolidOnlineStore;
