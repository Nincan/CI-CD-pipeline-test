"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidInfo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidInfo" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.627 11.36a.196.196 0 0 0-.245-.067c-.962.455-2.053.936-2.267.978a.189.189 0 0 1-.025-.029.256.256 0 0 1-.043-.157c0-.544.41-2.198 1.22-4.916.682-2.284.76-2.757.76-2.914a.742.742 0 0 0-.268-.592c-.166-.138-.4-.208-.692-.208-.488 0-1.052.185-1.727.566-.653.369-1.382.993-2.166 1.857a.196.196 0 0 0 .219.312c.275-.112 1.658-.678 1.86-.805.164-.104.307-.156.424-.156a.14.14 0 0 1 .01 0c.002.008.004.02.004.037 0 .119-.025.26-.073.418-1.179 3.819-1.751 6.16-1.751 7.156 0 .352.097.635.29.842.197.211.462.318.788.318.348 0 .77-.145 1.294-.444.506-.29 1.278-.925 2.36-1.944a.195.195 0 0 0 .028-.253zM9.589.297A.985.985 0 0 0 8.857 0c-.366 0-.684.144-.946.429a1.46 1.46 0 0 0-.389 1.021c0 .314.097.575.287.774a.96.96 0 0 0 .722.305c.35 0 .667-.153.94-.453a1.49 1.49 0 0 0 .406-1.033c0-.299-.097-.55-.288-.746z", fillRule: "evenodd", clipRule: "evenodd" }) })));
}
exports.default = SolidInfo;
