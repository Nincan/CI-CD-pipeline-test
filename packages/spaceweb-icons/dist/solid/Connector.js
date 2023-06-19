"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidConnector(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidConnector" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.84 12.607v-.002a.538.538 0 0 0-.71-.245 5.015 5.015 0 0 1-5.034-.44c.272-.382.42-.835.42-1.308a2.26 2.26 0 0 0-2.259-2.257A2.26 2.26 0 0 0 0 10.612a2.26 2.26 0 0 0 3.27 2.017 6.02 6.02 0 0 0 6.324.688.532.532 0 0 0 .246-.71zm3.11-3.905a5.999 5.999 0 0 0-2.681-5.876.532.532 0 0 0-.577.893 4.936 4.936 0 0 1 2.23 4.64c-1.307-.117-2.437.945-2.437 2.25a2.26 2.26 0 0 0 2.258 2.257A2.26 2.26 0 0 0 14 10.61c0-.782-.398-1.495-1.05-1.907zM6.91.086a2.26 2.26 0 0 0-2.257 2.212 6.07 6.07 0 0 0-.757.386A5.991 5.991 0 0 0 .989 7.632a.53.53 0 0 0 .533.552.533.533 0 0 0 .533-.515 4.938 4.938 0 0 1 2.84-4.313A2.257 2.257 0 0 0 6.91 4.6a2.26 2.26 0 0 0 2.257-2.257A2.26 2.26 0 0 0 6.91.086z" }) })));
}
exports.default = SolidConnector;
