"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUserHourglass(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUserHourglass" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.497 5.304a2.652 2.652 0 1 0-2.652-2.652 2.654 2.654 0 0 0 2.652 2.652ZM8.71 9.146V8.11a1.638 1.638 0 0 1 .241-.847c-.04-.035-.077-.074-.118-.107A1.114 1.114 0 0 0 8.646 7a4.756 4.756 0 0 0-.293-.202 4.797 4.797 0 0 0-.462-.252c-.103-.05-.202-.103-.309-.145a4.71 4.71 0 0 0-.603-.188c-.08-.02-.156-.05-.238-.066a4.653 4.653 0 0 0-.903-.093h-.702a4.653 4.653 0 0 0-.904.093c-.082.016-.158.046-.239.066a4.729 4.729 0 0 0-.602.188c-.106.042-.206.095-.308.145a4.814 4.814 0 0 0-.463.252c-.1.063-.197.131-.292.202a1.093 1.093 0 0 0-.188.155A4.76 4.76 0 0 0 .366 10.84v2.442a.717.717 0 0 0 .717.717H8.85a1.642 1.642 0 0 1-.14-.66v-1.033a1.653 1.653 0 0 1 .475-1.162l.42-.42-.409-.408a1.642 1.642 0 0 1-.485-1.17ZM13.634 9.15V8.11a.656.656 0 0 0-.654-.654h-2.615a.656.656 0 0 0-.654.654v1.036a.656.656 0 0 0 .193.464l1.114 1.115L9.9 11.844a.667.667 0 0 0-.19.464v1.033a.656.656 0 0 0 .655.654h2.615a.656.656 0 0 0 .654-.654v-1.033a.653.653 0 0 0-.19-.461l-1.118-1.122 1.115-1.111a.656.656 0 0 0 .193-.465Z" }) })));
}
exports.default = SolidUserHourglass;
