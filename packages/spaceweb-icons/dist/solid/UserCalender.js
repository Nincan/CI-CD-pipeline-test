"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUserCalender(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUserCalender" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.985,1.48974h-.93v-1.49H9.565v1.49H4.335v-1.49H2.845v1.49h-.84a1.6415,1.6415,0,0,0-1.59,1.59v9.43a1.548,1.548,0,0,0,1.59,1.49h9.99a1.56126,1.56126,0,0,0,1.59-1.49v-9.43A1.65768,1.65768,0,0,0,11.985,1.48974ZM7,3.84014A1.73569,1.73569,0,1,1,5.26431,5.5758,1.73789,1.73789,0,0,1,7,3.84014ZM3.50375,11.164A3.45342,3.45342,0,0,1,7,8.00414,3.45345,3.45345,0,0,1,10.49624,11.164Z", fillRule: "evenodd" }) })));
}
exports.default = SolidUserCalender;
