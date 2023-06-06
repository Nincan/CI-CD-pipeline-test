"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineUnmappedArrows(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineUnmappedArrows" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.58 9.256H6.06l-1.2 1.199h7.72a.6.6 0 000-1.199zm-9.17 2.649l-.846.847.292.304a.599.599 0 10.864-.83zM12.912.798a.582.582 0 00-.822 0l-.654.653-.292-.305a.599.599 0 00-.864.83l.31.322-1.45 1.45H1.42a.6.6 0 000 1.198h6.52l-4.31 4.31H1.995l1.76-1.876a.599.599 0 10-.874-.82L.176 9.446c-.01.01-.009.024-.017.034a.582.582 0 00-.117.235.548.548 0 00-.015.07.588.588 0 00.035.298v.01c.006.012.018.017.023.027a.585.585 0 00.096.15l1.193 1.243-.604.604a.581.581 0 00.822.822L12.912 1.62a.582.582 0 000-.822zm1.026 3.322v-.011c-.006-.011-.018-.016-.023-.027a.584.584 0 00-.096-.15L12.626 2.69l-.847.847-.21.21-1.2 1.2h1.635l-1.76 1.876a.6.6 0 00.874.82l2.706-2.886c.01-.01.009-.024.017-.034a.582.582 0 00.117-.236.559.559 0 00.016-.07.588.588 0 00-.036-.297z" }, void 0) }), void 0));
}
exports.default = LineUnmappedArrows;
