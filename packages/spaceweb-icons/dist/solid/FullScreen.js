"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFullScreen(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFullScreen" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M0 13.36a.63.63 0 00.522.616.367.367 0 00.082.017c.012 0 .023.007.035.007l.015-.003c.011 0 .023.003.035.003h2.755a.673.673 0 00.689-.689.716.716 0 00-.058-.281.595.595 0 00-.135-.212l-.89-.884 2.952-2.952a.657.657 0 000-.984.657.657 0 00-.984 0l-2.954 2.954-.864-.858a.636.636 0 00-.05-.05l-.003-.003a.597.597 0 00-.423-.174c-.006 0-.012.003-.019.004L.69 9.867a.673.673 0 00-.689.69v2.754c0 .006.006.013.006.019 0 .01-.006.02-.006.03zM14 .68a.63.63 0 00-.522-.616.367.367 0 00-.082-.017c-.012 0-.023-.007-.035-.007l-.015.003c-.011 0-.023-.003-.035-.003h-2.755a.673.673 0 00-.689.689.716.716 0 00.058.281.595.595 0 00.135.212l.89.885-2.952 2.951a.657.657 0 000 .984.657.657 0 00.984 0l2.954-2.954.864.859a.636.636 0 00.05.049l.003.004a.597.597 0 00.423.173c.006 0 .012-.003.019-.003.006 0 .01.003.016.003A.673.673 0 0014 3.484V.73c0-.006-.006-.013-.006-.019 0-.01.006-.02.006-.03z" }) })));
}
exports.default = SolidFullScreen;
