"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandOutOfHomeClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandOutOfHomeClr" }, props, { children: (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "#40A3F5" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.306 0H.694A.694.694 0 000 .694v7.29c0 .383.31.693.694.693h5.632v3.995h-.632c-.418-.002-.77.15-1.045.463a1.303 1.303 0 00-.33.865H9.69c-.017-.107-.025-.207-.048-.302a1.336 1.336 0 00-1.317-1.026h-.657V8.677h5.638c.383 0 .694-.31.694-.694V.694A.694.694 0 0013.306 0zM13 7.107a.57.57 0 01-.57.57H1.57a.57.57 0 01-.57-.57V1.57A.57.57 0 011.57 1h10.86a.57.57 0 01.57.57v5.537z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.595 6.678H2.402a.405.405 0 01-.405-.405V2.429c0-.224.181-.405.405-.405h1.01v.216h-.23a.315.315 0 100 .63h1.09a.315.315 0 100-.63h-.23v-.216h2.642v.216h-.23a.315.315 0 100 .63h1.09a.315.315 0 100-.63h-.23v-.216h2.641v.216h-.23a.315.315 0 100 .63h1.09a.315.315 0 100-.63h-.23v-.216h1.01c.224 0 .405.181.405.405v3.844a.405.405 0 01-.405.405z" })] })) })));
}
exports.default = BrandOutOfHomeClr;
