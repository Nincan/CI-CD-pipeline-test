"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandNexmo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandNexmo" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7.005", cy: "6.828", r: "1.468" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.022 6.284h-.817l1.925 1.834L14 6.284h-.926A6.145 6.145 0 007.227.782a6.25 6.25 0 00-5.956 3.831l1.925.747a4.055 4.055 0 014.031-2.49 4.006 4.006 0 013.795 3.414zM2.978 7.716h.817L1.87 5.882 0 7.716h.926a6.145 6.145 0 005.847 5.502 6.25 6.25 0 005.956-3.831l-1.925-.747a4.055 4.055 0 01-4.031 2.49 4.006 4.006 0 01-3.795-3.414z" })] })));
}
exports.default = BrandNexmo;
