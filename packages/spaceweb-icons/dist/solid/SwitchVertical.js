"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSwitchVertical(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSwitchVertical" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.797 1.848L5.15.196a.675.675 0 00-.954.001l-1.65 1.65a.676.676 0 00.476 1.154h.002l.012.002h.96V8.3a.674.674 0 001.349 0V3.003h.9c.012 0 .021-.006.032-.007.018.001.033.01.051.01a.667.667 0 00.468-.188.68.68 0 00.001-.97zm.505 10.324l1.647 1.652a.675.675 0 00.953-.001l1.651-1.65a.676.676 0 00-.477-1.153h-.002l-.011-.002h-.961V5.72a.674.674 0 10-1.348 0v5.297h-.9c-.012 0-.021.006-.033.006-.017-.001-.033-.01-.05-.01a.667.667 0 00-.469.189.68.68 0 000 .97z" }) })));
}
exports.default = SolidSwitchVertical;
