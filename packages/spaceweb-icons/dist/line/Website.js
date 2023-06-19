"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineWebsite(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineWebsite" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.788.5H1.212C.542.5 0 1.043 0 1.712v10.576c0 .67.543 1.212 1.212 1.212h11.576c.67 0 1.212-.543 1.212-1.212V1.712C14 1.042 13.457.5 12.788.5zm0 1.2l.012.012-.003 2.324H1.21L1.212 1.7h11.576zM1.2 12.288l.008-7.052h11.588l-.008 7.064L1.2 12.288z" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.75 3.222h.044c.21 0 .379-.18.379-.4s-.17-.4-.379-.4H3.75c-.209 0-.378.18-.378.4s.17.4.378.4zm1.43 0h.045c.21 0 .379-.18.379-.4s-.17-.4-.379-.4H5.18c-.209 0-.378.18-.378.4s.17.4.378.4zm-2.835 0h.045c.209 0 .378-.18.378-.4s-.17-.4-.378-.4h-.045c-.209 0-.378.18-.378.4s.17.4.378.4z" })] })));
}
exports.default = LineWebsite;
