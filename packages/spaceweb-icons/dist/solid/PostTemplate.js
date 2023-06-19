"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidPostTemplate(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidPostTemplate" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.741 0H1.26A1.016 1.016 0 00.244 1.015v11.97A1.016 1.016 0 001.259 14H12.74a1.016 1.016 0 001.015-1.015V1.015A1.016 1.016 0 0012.741 0zm-9.7 1.508a1.293 1.293 0 11-1.293 1.293 1.293 1.293 0 011.293-1.293zm9.211 10.476a.508.508 0 01-.508.508H2.255a.508.508 0 01-.507-.508V5.787a.508.508 0 01.508-.507h9.489a.508.508 0 01.507.507zm0-9.01a.508.508 0 01-.508.507h-5.12a.508.508 0 01-.507-.507v-.345a.508.508 0 01.508-.507h5.12a.508.508 0 01.507.507z" }) })));
}
exports.default = SolidPostTemplate;
