"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidForm(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidForm" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.182 3.797L8.804.419a1.397 1.397 0 00-.986-.406H2.804a1.397 1.397 0 00-1.392 1.399l-.007 11.19A1.397 1.397 0 002.797 14h8.399a1.403 1.403 0 001.399-1.399V4.79a1.403 1.403 0 00-.413-.993zm-2.685 7.386H4.503a.7.7 0 110-1.4h4.994a.7.7 0 110 1.4zm0-2.501H4.503a.7.7 0 110-1.4h4.994a.7.7 0 110 1.4zM8.4 4.909a.701.701 0 01-.7-.7V1.062l3.847 3.847z" }) })));
}
exports.default = SolidForm;
