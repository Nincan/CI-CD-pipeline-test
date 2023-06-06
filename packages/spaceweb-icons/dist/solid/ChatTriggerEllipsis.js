"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidChatTriggerEllipsis(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 32 32", "data-icon-name": "SolidChatTriggerEllipsis" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M28.284 3.518A3.716 3.716 0 0132 7.234v14.458a3.716 3.716 0 01-3.716 3.716h-1.295l.61 3.886a.929.929 0 01-.046.467l-.048.108a.93.93 0 01-1.148.44l-.106-.048-9.261-4.853H3.716A3.716 3.716 0 010 21.692V7.234a3.716 3.716 0 013.716-3.716h24.568zM16 11.366a3.097 3.097 0 100 6.194 3.097 3.097 0 000-6.194zM7.53 12.64c-1.04 0-1.883.817-1.883 1.824s.843 1.824 1.882 1.824 1.883-.816 1.883-1.824-.843-1.824-1.883-1.824zm16.94 0c-1.039 0-1.882.817-1.882 1.824s.843 1.824 1.883 1.824 1.882-.816 1.882-1.824-.843-1.824-1.882-1.824z", clipRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidChatTriggerEllipsis;
