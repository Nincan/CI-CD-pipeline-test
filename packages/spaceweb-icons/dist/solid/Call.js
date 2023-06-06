"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidCall(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidCall" }, props, { children: (0, jsx_runtime_1.jsx)("path", { clipRule: "evenodd", d: "M2.98.352c.992 1.104 1.829 2.31 1.829 2.31s.69.947.08 1.56c-.402.405-.95 1.368-.667 1.778C4.506 6.41 8 9.78 8 9.78s.4.35.667.222c.267-.127 1.556-.89 1.556-.89s.532-.179 1.111.223c.584.406 2.385 1.6 2.385 1.6s.512.645.153 1.215c-.36.57-1.482 1.696-1.482 1.696s-.447.302-1.458.063c-1.01-.24-3.373-.804-6.611-4.04C1.326 6.874.01 2.845.01 2.845s-.096-.701.33-1.326C.769.894 2.03-.705 2.98.352z", fillRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidCall;
