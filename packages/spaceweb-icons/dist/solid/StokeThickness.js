"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidStokeThickness(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidStokeThickness" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.712 9h12.576a.735.735 0 0 0 .506-.246A2.857 2.857 0 0 0 14 7.681a2.187 2.187 0 0 0-.206-.935.735.735 0 0 0-.506-.246H.712a.735.735 0 0 0-.506.246A2.187 2.187 0 0 0 0 7.68a2.857 2.857 0 0 0 .206 1.073A.735.735 0 0 0 .712 9ZM13.794 10.662a.735.735 0 0 0-.506-.245H.712a.735.735 0 0 0-.506.245.825.825 0 0 0 0 1.092.735.735 0 0 0 .506.246h12.576a.735.735 0 0 0 .506-.246.825.825 0 0 0 0-1.092ZM.712 5.246h12.576A.734.734 0 0 0 13.794 5 5.522 5.522 0 0 0 14 3.5a3.874 3.874 0 0 0-.206-1.254.735.735 0 0 0-.506-.246H.712a.735.735 0 0 0-.506.246A3.875 3.875 0 0 0-.001 3.5 5.524 5.524 0 0 0 .206 5a.734.734 0 0 0 .506.246Z" }) })));
}
exports.default = SolidStokeThickness;
