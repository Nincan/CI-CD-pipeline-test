"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidChatBubble(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidChatBubble" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.892 2.54C12.055 1.47 10.507.519 9.179.25 3.695-.859.702 2.804.243 4.825c-.93 4.892 1.488 7.683 2.802 9.014.09.093.22.165.21.004-.167-2.93 1.616-3.377 5.557-3.236 1.437.048 4.46-1.192 4.956-3.622.328-1.605.392-2.82-.876-4.445zM3.32 6.826a.802.802 0 1 1 0-1.603.802.802 0 0 1 0 1.603zm3.742 0a.802.802 0 1 1 0-1.603.802.802 0 0 1 0 1.603zm3.742 0a.802.802 0 1 1 0-1.603.802.802 0 0 1 0 1.603z" }, void 0) }), void 0));
}
exports.default = SolidChatBubble;
