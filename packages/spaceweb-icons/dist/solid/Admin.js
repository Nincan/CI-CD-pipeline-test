"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAdmin(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAdmin" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.9 5.311a2.64 2.64 0 1 0-2.64-2.64 2.642 2.642 0 0 0 2.64 2.64zm.533 3.259-.005-.239a1.355 1.355 0 0 1 .096-.51 1.27 1.27 0 0 1 .966-.795l1.292-.2-.04-.026a4.783 4.783 0 0 0-.46-.251c-.102-.05-.2-.102-.307-.144a4.695 4.695 0 0 0-.6-.188c-.08-.02-.156-.049-.237-.065a4.632 4.632 0 0 0-.9-.093H5.54a4.631 4.631 0 0 0-.899.093c-.082.016-.158.045-.238.065a4.717 4.717 0 0 0-.6.187c-.105.043-.204.095-.307.145a4.814 4.814 0 0 0-.46.25c-.1.064-.196.131-.291.202-.069.05-.145.091-.21.145a4.735 4.735 0 0 0-1.743 3.677v2.43a.714.714 0 0 0 .715.715h6.677c-1.696-1.376-1.73-3.56-1.751-5.399z" }), (0, jsx_runtime_1.jsx)("path", { d: "m12.988 8.106-2.56-.507a.336.336 0 0 0-.097 0L7.67 8.01a.287.287 0 0 0-.22.187.317.317 0 0 0-.022.114l.005.247c.027 2.356.054 4.579 2.898 5.4a.453.453 0 0 0 .078.01.317.317 0 0 0 .091-.014c2.452-.854 2.685-3.328 2.708-5.574a.279.279 0 0 0-.22-.274zm-1.507 2.234-.528.514.125.726a.074.074 0 0 1-.108.078l-.652-.342-.652.342a.074.074 0 0 1-.107-.078l.124-.726-.527-.514a.074.074 0 0 1 .041-.126l.729-.106.326-.66a.074.074 0 0 1 .133 0l.326.66.729.106a.074.074 0 0 1 .04.126z" })] })));
}
exports.default = SolidAdmin;
