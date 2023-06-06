"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidBudget(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidBudget" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.137 2.723h3.692c.737-.958.766-1.675.777-1.718.078-.62-.488-1.109-1.097-.986-.466.111-.975.166-1.518.166S5.937.13 5.474.03c-.609-.134-1.186.366-1.109.975.009.054.126.986.772 1.718zm3.858.603H4.982C3.285 4.635 2.1 7.396 2.1 9.71 2.099 12.871 4.294 14 7 14s4.901-1.143 4.901-4.29c-.011-2.315-1.197-5.075-2.906-6.384zm-1.56 7.873v.3a.434.434 0 1 1-.87 0v-.3a1.528 1.528 0 0 1-.671-.414.434.434 0 1 1 .634-.595.65.65 0 0 0 1.123-.443.65.65 0 0 0-.648-.648 1.519 1.519 0 0 1-.435-2.973v-.3a.434.434 0 1 1 .87 0v.3c.254.078.485.218.67.415a.437.437 0 0 1-.016.614.437.437 0 0 1-.615-.017.65.65 0 0 0-1.123.443.65.65 0 0 0 .649.649c.837 0 1.517.68 1.517 1.517A1.522 1.522 0 0 1 7.434 11.2z" }, void 0) }), void 0));
}
exports.default = SolidBudget;
