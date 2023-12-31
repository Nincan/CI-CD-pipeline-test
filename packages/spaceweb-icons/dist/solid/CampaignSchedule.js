"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCampaignSchedule(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidCampaignSchedule" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M6.488 11.164a1.224 1.224 0 0 0 1.15-.842h-2.29a1.204 1.204 0 0 0 1.14.842Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.985 1.49h-.93V0h-1.49v1.49h-5.23V0h-1.49v1.49h-.84a1.641 1.641 0 0 0-1.59 1.59v9.43A1.548 1.548 0 0 0 2.005 14h9.99a1.561 1.561 0 0 0 1.59-1.49V3.08a1.658 1.658 0 0 0-1.6-1.59Zm-.841 9.253a.344.344 0 0 1-.253.355.36.36 0 0 1-.449-.252l-.15-.505H9.069v-.01h-.252v-.009h-.449a1.916 1.916 0 0 1-3.758 0h-.243a1.26 1.26 0 0 1-.71-.177 1.273 1.273 0 0 1-.59-.767c-.037-.121-.074-.243-.102-.374a1.28 1.28 0 0 1 .56-1.346c.963-.636 1.936-1.271 2.908-1.916.72-.468 1.43-.935 2.15-1.403l-.122-.411a.366.366 0 0 1 .243-.449.36.36 0 0 1 .45.253l1.58 5.497.317 1.084c.028.103.065.215.093.327a.192.192 0 0 1 0 .103Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.9 5.573 9.208 9.8c.262 0 .627-.019.926-.019L8.74 4.92c-.243.168-.626.514-.841.654Z" })] })));
}
exports.default = SolidCampaignSchedule;
