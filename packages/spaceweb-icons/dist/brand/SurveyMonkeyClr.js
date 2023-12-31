"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSurveyMonkeyClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSurveyMonkeyClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#A9BC43", d: "M12.738 7.95c-.495-.747-1.473-.522-1.473-.522-.773-2.825-3.55-3.193-3.55-3.193C7.499 3.807 8.44 3 8.44 3c-.942.285-1.449 1.068-1.449 1.068-.265-.83-.724-.747-.724-.747.422.213.35.878.35.878-3.163.25-3.84 3.194-3.84 3.194a1.482 1.482 0 00-1.34.356c-1.037 1.163.098 2.125.098 2.125.64.63 1.425.225 1.425.225.133.523.447.832.447.832l1.207-.772c-1.316-2.173 0-3.194 0-3.194 1.304-1.14 2.378.32 2.378.32l.483-.38c1.183-.89 2.089.155 2.089.155 1.012 1.386-.12 3.146-.12 3.146l1.194.725c.314-.297.507-.843.507-.843.121.154.471.166.471.166 1.123-.107 1.352-.95 1.352-.95.145-.997-.229-1.353-.229-1.353zM2.54 9.102s-.268.06-.328-.189c0 0-.06-.19 0-.273 0 0-.023-.279.328-.148v.61zm9.256-.189c-.06.25-.333.19-.333.19V8.49c.35-.13.333.148.333.148.06.083 0 .273 0 .273z" }) })));
}
exports.default = BrandSurveyMonkeyClr;
