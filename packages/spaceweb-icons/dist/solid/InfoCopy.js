"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidInfoCopy(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidInfoCopy" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.6 3.41H.99A.992.992 0 000 4.4v8.61a.986.986 0 00.99.99H9.6a.984.984 0 00.98-.99V4.4a.99.99 0 00-.98-.99zm-3.81 7.97a.542.542 0 01-.542.543.542.542 0 01-.543-.542V7.973a.542.542 0 111.085 0zm-.5-4.595a.594.594 0 11.594-.593.594.594 0 01-.594.593z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.02 0H4.41a.992.992 0 00-.99.99v1.507h7.048a.99.99 0 01.98.99v7.103h1.572A.984.984 0 0014 9.6V.99a.99.99 0 00-.98-.99z" })] })));
}
exports.default = SolidInfoCopy;
