"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTextCursor(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTextCursor" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.24924,13.24861a.73644.73644,0,0,1-.74983.74982H9.1495A3.22639,3.22639,0,0,1,7,13.24861a3.18208,3.18208,0,0,1-2.1495.74982H4.50059a.74983.74983,0,1,1,0-1.49965H4.8505c.79982,0,1.39968-.4249,1.39968-.8248V10.24931H5.50035a.74983.74983,0,0,1,0-1.49965h.74983V2.326c0-.37491-.59986-.8248-1.39968-.8248H4.50059A.73644.73644,0,0,1,3.75076.75139.73644.73644,0,0,1,4.50059.00157H4.8505A3.22639,3.22639,0,0,1,7,.75139,3.18208,3.18208,0,0,1,9.1495.00157h.34991a.73644.73644,0,0,1,.74983.74982.73644.73644,0,0,1-.74983.74983H9.1495c-.79982,0-1.39968.4249-1.39968.8248V8.74966h.74983a.74983.74983,0,0,1,0,1.49965H7.74982V11.699c0,.37491.59986.82481,1.39968.82481h.34991A.7019.7019,0,0,1,10.24924,13.24861Z" }, void 0) }), void 0));
}
exports.default = SolidTextCursor;
