"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidFolderFavourite(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidFolderFavourite" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.445 2.722H7L5.903 1.626a1.56 1.56 0 0 0-1.104-.46H1.556A1.553 1.553 0 0 0 .008 2.723L0 11.278a1.56 1.56 0 0 0 1.556 1.555h10.888A1.56 1.56 0 0 0 14 11.278v-7a1.56 1.56 0 0 0-1.555-1.556ZM10.26 7.28 8.781 8.72l.35 2.036a.208.208 0 0 1-.303.22L7 10.015l-1.828.962a.208.208 0 0 1-.302-.22l.349-2.036-1.48-1.441a.208.208 0 0 1 .116-.356L5.9 6.627l.914-1.852a.208.208 0 0 1 .374 0L8.1 6.627l2.044.297a.208.208 0 0 1 .115.356Z" }) })));
}
exports.default = SolidFolderFavourite;
