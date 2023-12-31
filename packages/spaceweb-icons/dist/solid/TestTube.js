"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTestTube(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTestTube" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.78552,5.13611,8.745.171a.59422.59422,0,1,0-.834.84662l.31378.30908L.89221,8.77075a3.097,3.097,0,0,0,4.47547,4.282l7.26983-7.37928.314.30927a.59422.59422,0,1,0,.834-.84662ZM3.52844,11.85462a.85937.85937,0,1,1,.98084-.71766A.85937.85937,0,0,1,3.52844,11.85462Zm.78174-2.64814a.57387.57387,0,1,1,.655-.47925A.57387.57387,0,0,1,4.31018,9.20648Zm4.05121-.88623a1.16375,1.16375,0,0,1-.54913-.071,1.37169,1.37169,0,0,1-.50312-.40155,1.95221,1.95221,0,0,1-.24237-.31494A2.29974,2.29974,0,0,1,6.926,7.20184a4.14843,4.14843,0,0,0-.17273-.41168A2.32612,2.32612,0,0,0,5.56854,5.71668l3.50281-3.556,2.71948,2.67871Z" }) })));
}
exports.default = SolidTestTube;
