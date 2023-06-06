"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTask(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTask" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.099 1.375h-3.14a1.862 1.862 0 00-3.58 0h-3.15a1.18 1.18 0 00-.42.04 1.073 1.073 0 00-.65 1v10.4a1.11 1.11 0 001.08 1.12h9.86a1.08 1.08 0 00.42-.13 1.058 1.058 0 00.66-.99v-10.4a1.048 1.048 0 00-1.08-1.04zm-4.934-.299a.69.69 0 11-.69.69.69.69 0 01.69-.69zm2.866 10.164H4.3a.462.462 0 110-.925h5.732a.462.462 0 110 .925zm0-2.696H4.3a.462.462 0 110-.925h5.732a.462.462 0 110 .925zm0-2.696H4.3a.474.474 0 01-.467-.467.465.465 0 01.467-.458h5.732a.465.465 0 01.468.458.474.474 0 01-.468.467z" }, void 0) }), void 0));
}
exports.default = SolidTask;
