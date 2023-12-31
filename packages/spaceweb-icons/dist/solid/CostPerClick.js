"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCostPerClick(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCostPerClick" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.345 8.282a1.225 1.225 0 01.591-.329l.112-.026.165-.005a1.204 1.204 0 01.412.071l1.537.538a5.88 5.88 0 10-2.548 2.624l-.56-1.601a1.228 1.228 0 01.291-1.272zm-1.737.598v.187a.726.726 0 01-1.45 0v-.198A1.923 1.923 0 013.75 7.774a.492.492 0 01.049-.459.5.5 0 01.416-.222h.117a.511.511 0 01.47.343c.137.352.501.53 1.08.53.949 0 1.023-.492 1.023-.643 0-.308-.14-.656-1.171-.902C4.86 6.21 3.7 5.794 3.7 4.603A1.686 1.686 0 015.157 3.02v-.195a.726.726 0 011.451 0v.209a1.746 1.746 0 011.226 1.102.48.48 0 01-.057.448.502.502 0 01-.414.215H7.24a.488.488 0 01-.46-.364c-.104-.342-.397-.509-.897-.509-.62 0-1.02.263-1.02.668 0 .303.196.542 1.172.796 1.004.26 2.03.694 2.03 1.928A1.603 1.603 0 016.609 8.88z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.955 10.61a.229.229 0 00-.108-.08L9.29 8.935a.228.228 0 00-.291.29l1.596 4.559a.228.228 0 00.423.017l.876-1.972 1.972-.876a.228.228 0 00.135-.208v-.01a.229.229 0 00-.045-.125z" })] })));
}
exports.default = SolidCostPerClick;
