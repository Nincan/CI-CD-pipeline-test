"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Delete.svg instead.
 */
function LineDelete(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 12 12", "data-icon-name": "LineDelete" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.267 9.095l-.001.004c-.123.876-.569 1.898-1.42 1.898H4.34c-.785 0-1.363-.303-1.639-1.786-.003-.012-.01-.021-.014-.033l-.91-6.997h8.418l-.928 6.914zm2.258-7.916H6.531V.501a.5.5 0 10-1.003 0v.678H.475a.5.5 0 100 1.002h.291l.945 7.269a.514.514 0 00.06.18C2.132 11.216 2.97 12 4.342 12h3.504c1.18 0 2.091-1.001 2.372-2.56.007-.023.02-.044.023-.07l.966-7.189h.32a.5.5 0 100-1.002" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M6.019 9.541a.501.501 0 00.501-.501V3.996a.5.5 0 10-1.002 0V9.04a.5.5 0 00.5.501zm-1.963 0c.015 0 .029 0 .045-.002a.502.502 0 00.455-.543L4.117 3.97a.503.503 0 00-1 .088l.44 5.025a.5.5 0 00.499.457zm3.873-.001l.045.001a.5.5 0 00.498-.457l.44-5.024a.501.501 0 00-.456-.544.505.505 0 00-.543.455l-.44 5.025a.501.501 0 00.456.543z" }, void 0)] }), void 0));
}
exports.default = LineDelete;
