"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMoveToFolder(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMoveToFolder" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.74 2.148H7.786l-.873-.907a1.219 1.219 0 00-.88-.38h-3.2a1.267 1.267 0 00-1.238 1.287v4.75a5.836 5.836 0 011.22-.55 5.994 5.994 0 01.597-.152V5.93a1.33 1.33 0 011.072-1.328l.102-.021.165-.006a1.32 1.32 0 01.839.302l.122.11L8.38 7.643a1.333 1.333 0 01.005 1.95l-1.547 1.562h5.9a1.267 1.267 0 001.238-1.287V3.434a1.267 1.267 0 00-1.238-1.286zm-9.327 9.007v-.02c-.027.004-.047.016-.074.02z" }), (0, jsx_runtime_1.jsx)("path", { d: "M.607 9.236a4.095 4.095 0 00-.582 2.45.332.332 0 00.28.32.312.312 0 00.063.007.339.339 0 00.3-.202 2.684 2.684 0 01.154-.268 3.056 3.056 0 011.41-1.123 4.44 4.44 0 011.734-.32c.122 0 .234.004.353.009l.093.002v.343l.001.896a.334.334 0 00.301.35.301.301 0 00.04.003.37.37 0 00.261-.128l1.773-1.79.889-.897a.34.34 0 000-.536h-.001l-2.67-2.657a.5.5 0 00-.052-.047.318.318 0 00-.264-.066.335.335 0 00-.277.35v1.146h-.009a5.299 5.299 0 00-1.292.225A4.156 4.156 0 00.607 9.236z" })] })));
}
exports.default = SolidMoveToFolder;
