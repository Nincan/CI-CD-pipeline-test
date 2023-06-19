"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTwitterFeedbackAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTwitterFeedbackAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.807.112H1.193C0 .112 0 1.196 0 1.38v8.057c0 .184 0 1.49 1.193 1.49h1.75c.175 0 .318.15.318.334v2.328c0 .227.127.3.264.3.112 0 .23-.049.294-.098l3.392-2.663a1.08 1.08 0 01.573-.202h5.023C14 10.926 14 9.643 14 9.46V1.38c0-.183 0-1.267-1.193-1.267zm-2.74 3.666s.289 1.894-1.624 3.699c-1.912 1.805-4.87.74-5.25.38 0 0 1.426.054 2.238-.722 0 0-.92-.036-1.39-1.065 0 0 .38.055.722-.072 0 0-1.172-.289-1.28-1.497 0 0 .234.144.631.072 0 0-1.029-.704-.451-2.057 0 0 1.064 1.516 3.32 1.66 0 0-.235-1.245.81-1.804 1.047-.56 1.841.342 1.841.342s.47-.036.956-.397c0 0 .09.325-.613.866 0 0 .379-.036.83-.217 0 0-.145.451-.74.812z" }) })));
}
exports.default = SolidTwitterFeedbackAsset;
