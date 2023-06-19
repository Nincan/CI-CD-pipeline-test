"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDifference(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDifference" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.44 1.75a4.53 4.53 0 00-2.43.72l-.02-.02-.02.02a4.44 4.44 0 00-2.42-.72 4.56 4.56 0 000 9.12 4.44 4.44 0 002.42-.72l.02.02.02-.02a4.55 4.55 0 102.43-8.4zM6.97 3.76a3.38 3.38 0 01.26.26c.06.06.12.12.17.2l.03.05h-.9a3.5 3.5 0 01.44-.5zm-.9 1.52h1.86a3.6 3.6 0 01.12.52H5.94a3.6 3.6 0 01.12-.52zm1.98 1.53a3.26 3.26 0 01-.11.49H6.05a3.25 3.25 0 01-.11-.49zm-.58 1.5l-.03.04a3.4 3.4 0 01-.43.5L7 8.87a3.49 3.49 0 01-.48-.56zM1 6.3a3.55 3.55 0 013.55-3.55 3.46 3.46 0 011.61.4 4.5 4.5 0 00-.94 1.43 4.6 4.6 0 00-.34 1.72 4.31 4.31 0 00.33 1.68 4.52 4.52 0 00.95 1.48 3.47 3.47 0 01-1.61.39A3.55 3.55 0 011 6.31z" }) })));
}
exports.default = SolidDifference;
