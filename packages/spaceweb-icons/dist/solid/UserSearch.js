"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidUserSearch(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidUserSearch" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.032 5.31a2.643 2.643 0 10-2.643-2.644 2.645 2.645 0 002.643 2.643zM8.908 13.311a3.506 3.506 0 01-.821-6.915 4.796 4.796 0 00-.577-.18c-.08-.02-.156-.049-.238-.065a4.638 4.638 0 00-.9-.093h-.7a4.638 4.638 0 00-.9.093c-.082.016-.158.045-.239.065a4.722 4.722 0 00-.6.188c-.106.042-.205.095-.307.144a4.806 4.806 0 00-.462.251c-.1.064-.196.131-.29.202-.07.05-.146.092-.212.145l.024.01a4.745 4.745 0 00-1.768 3.673v2.433a.715.715 0 00.715.715h8.778a.71.71 0 00.285-.06l-.76-.759a3.516 3.516 0 01-1.028.153z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.938 12.7l-1.623-1.623a2.636 2.636 0 10-.959.96l1.623 1.622a.462.462 0 00.455.128.961.961 0 00.632-.632.462.462 0 00-.128-.455zm-3.58-1.299a1.68 1.68 0 111.322-1.975A1.68 1.68 0 019.358 11.4z" }, void 0)] }), void 0));
}
exports.default = SolidUserSearch;
