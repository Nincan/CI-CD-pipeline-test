"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineDropDown(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 7", "data-icon-name": "LineDropDown" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.23 2.703a.467.467 0 01.05.602l-.05.058-1.167 1.167a.467.467 0 01-.602.05l-.058-.05-1.166-1.167a.467.467 0 01.602-.709l.058.05.836.836.837-.837a.467.467 0 01.66 0zm.65-1.77H8.4v5.134h4.48a.187.187 0 00.187-.187V1.12a.187.187 0 00-.187-.187zm-5.414 0H1.12a.187.187 0 00-.187.187v4.76a.187.187 0 00.187.187h6.347zM12.88 0A1.12 1.12 0 0114 1.12v4.76A1.12 1.12 0 0112.88 7H1.12A1.12 1.12 0 010 5.88V1.12A1.12 1.12 0 011.12 0z" }) })));
}
exports.default = LineDropDown;
