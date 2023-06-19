"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandForumsCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandForumsCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40A3F5", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFF", d: "M4.505 11.183c.073-.376.243-.714.154-.957-.09-.247-.457-.38-.665-.599-1.072-1.129-1.454-2.462-.972-3.95.504-1.558 1.625-2.5 3.236-2.79 1.941-.35 3.836.645 4.588 2.355 1.031 2.347-.395 5.074-2.945 5.538-1.102.2-2.228.269-3.396.403zm4.073-1.878c-.105-.305-.2-.533-.257-.769-.022-.089.005-.233.067-.293.613-.59.804-1.293.507-2.084-.29-.776-.907-1.16-1.72-1.247-.91-.097-1.867.564-2.081 1.44-.228.93.25 1.916 1.141 2.235.746.268 1.516.468 2.343.718z" })] })));
}
exports.default = BrandForumsCircleClr;
