"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAudioWave(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAudioWave" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.972.21a1.505 1.505 0 0 0-1.535 0 .626.626 0 0 0-.317.507v12.566a.626.626 0 0 0 .317.507 1.505 1.505 0 0 0 1.535 0 .626.626 0 0 0 .317-.507V.717A.626.626 0 0 0 7.972.21ZM12.516 2.745a1.509 1.509 0 0 0-1.535.001.626.626 0 0 0-.317.508v7.493a.626.626 0 0 0 .317.507 1.505 1.505 0 0 0 1.535 0 .626.626 0 0 0 .317-.507V3.253a.626.626 0 0 0-.317-.508ZM3.019 2.745a1.413 1.413 0 0 0-.767-.209 1.413 1.413 0 0 0-.768.21.626.626 0 0 0-.317.508v7.493a.626.626 0 0 0 .317.507 1.413 1.413 0 0 0 .768.21 1.413 1.413 0 0 0 .767-.21.626.626 0 0 0 .317-.507V3.253a.626.626 0 0 0-.317-.508Z" }, void 0) }), void 0));
}
exports.default = SolidAudioWave;
