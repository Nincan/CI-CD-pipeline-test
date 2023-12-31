"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLockUser(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLockUser" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.436 5.31a2.643 2.643 0 1 0-2.644-2.644 2.645 2.645 0 0 0 2.644 2.643zm3.325 1.845.024-.008c-.066-.054-.142-.095-.21-.146a4.743 4.743 0 0 0-.292-.202 4.801 4.801 0 0 0-.461-.25c-.102-.05-.202-.103-.308-.145a4.7 4.7 0 0 0-.6-.188c-.08-.02-.157-.049-.238-.065a4.64 4.64 0 0 0-.9-.093h-.7a4.638 4.638 0 0 0-.9.093c-.082.016-.159.045-.239.065a4.711 4.711 0 0 0-.6.188c-.106.042-.206.095-.308.144a4.803 4.803 0 0 0-.46.251 4.77 4.77 0 0 0-.292.202c-.07.05-.145.092-.211.146l.024.008A4.746 4.746 0 0 0 .32 10.83v2.433a.715.715 0 0 0 .716.715h6.948a1.589 1.589 0 0 1-.12-.601v-3.009a1.604 1.604 0 0 1 .915-1.446 2.492 2.492 0 0 1 .497-1.268 4.97 4.97 0 0 0-.516-.498zm4.316 2.611h-.3v-.602a1.504 1.504 0 1 0-3.01 0v.602h-.3a.603.603 0 0 0-.602.601v3.009a.603.603 0 0 0 .602.601h3.61a.603.603 0 0 0 .602-.601v-3.009a.603.603 0 0 0-.602-.601zm-1.805 2.707a.602.602 0 1 1 .602-.601.603.603 0 0 1-.602.601zm.902-2.707H10.37v-.602a.903.903 0 1 1 1.805 0z" }) })));
}
exports.default = SolidLockUser;
