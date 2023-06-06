"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidThemes(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidThemes" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.587 0H1.386a.697.697 0 00-.698.696v12.606a.697.697 0 00.696.698h4.203a.697.697 0 00.698-.696V.702A.7.7 0 005.587 0zm-.68 11.18a1.422 1.422 0 01-1.422 1.423 1.423 1.423 0 111.422-1.422zm8.403-6.844a.528.528 0 00-.196-.36l-3.269-2.64a.534.534 0 00-.712.036v.006l-.043.043-2.162 2.678v1.699l.462-.573 2.437 1.968-1.528 1.891-1.37-1.106V9.35l.698.566-.699.867v1.7l6.265-7.756a.526.526 0 00.116-.39zm-2.812 2.026L8.063 4.394l1.526-1.895 2.437 1.968zm2.233 1.987h-1.367l-.86 1.066h1.694v3.135H9.765v-2.217l-1.067 1.32v.897h-.725l-.862 1.066h5.623a.528.528 0 00.53-.529V8.88a.534.534 0 00-.533-.531z" }, void 0) }), void 0));
}
exports.default = SolidThemes;
