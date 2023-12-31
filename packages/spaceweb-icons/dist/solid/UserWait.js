"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidUserWait(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidUserWait" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.362 5.305a2.65 2.65 0 1 0-2.65-2.65 2.651 2.651 0 0 0 2.65 2.65ZM6.623 11.717a.88.88 0 1 0 .88.88.88.88 0 0 0-.88-.88ZM9.754 11.717a.88.88 0 1 0 .88.88.88.88 0 0 0-.88-.88Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.623 10.527a2.057 2.057 0 0 1 1.566.732 2.057 2.057 0 0 1 1.565-.732 1.994 1.994 0 0 1 .704.14 4.76 4.76 0 0 0-1.763-3.511A1.11 1.11 0 0 0 8.508 7a4.738 4.738 0 0 0-.292-.202 4.783 4.783 0 0 0-.462-.252c-.103-.05-.202-.102-.309-.145a4.714 4.714 0 0 0-.602-.187c-.08-.02-.156-.05-.238-.066a4.65 4.65 0 0 0-.903-.093h-.7a4.649 4.649 0 0 0-.903.093c-.082.016-.158.045-.239.066a4.723 4.723 0 0 0-.601.187c-.107.043-.206.096-.309.145a4.804 4.804 0 0 0-.462.252A4.78 4.78 0 0 0 2.196 7a1.096 1.096 0 0 0-.188.155 4.756 4.756 0 0 0-1.772 3.682v2.439a.717.717 0 0 0 .717.716h4.154a2.06 2.06 0 0 1 1.516-3.466ZM12.885 11.717a.88.88 0 1 0 .879.88.88.88 0 0 0-.88-.88Z" })] })));
}
exports.default = SolidUserWait;
