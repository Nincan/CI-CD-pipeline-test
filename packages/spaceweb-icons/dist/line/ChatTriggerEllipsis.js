"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineChatTriggerEllipsis(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineChatTriggerEllipsis" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.4 13.8c-.2-.1-.3-.2-.3-.4v-2.6h-.4C.7 10.8 0 10 0 9.1V1.9C0 .9.8.2 1.7.2h10.5c1 0 1.7.8 1.7 1.7v7.2c0 1-.8 1.7-1.7 1.7H5.7l-2.8 2.8c-.2.2-.4.3-.5.2zM.8 1.9v7.2c0 .5.4.9.9.9h.8c.3 0 .5.2.5.5v2l2.2-2.3c.1-.1.2-.2.3-.2h6.8c.5 0 .9-.4.9-.9V1.9c0-.5-.4-.9-.9-.9H1.7c-.5 0-.9.4-.9.9zm5.4 3.6c0-.5.4-.8.8-.8.5 0 .8.4.8.8 0 .5-.3.8-.8.8s-.8-.3-.8-.8zm3.1 0c0-.5.4-.8.8-.8.5 0 .8.4.8.8 0 .5-.3.8-.8.8s-.8-.3-.8-.8zM3 5.5c0-.5.4-.8.8-.8.5 0 .8.4.8.8 0 .5-.4.8-.8.8S3 6 3 5.5z" }, void 0) }), void 0));
}
exports.default = LineChatTriggerEllipsis;
