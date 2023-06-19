"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineTwitterFeature(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 13.162", "data-icon-name": "LineTwitterFeature" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.628 3.721V2.485h1.237a.464.464 0 0 0 0-.928H2.628V.321a.464.464 0 1 0-.927 0v1.236H.464a.464.464 0 1 0 0 .928h1.237V3.72a.464.464 0 1 0 .927 0ZM13.662 5.57l-3.507-1.168L8.977.296a.495.495 0 0 0-.95 0l-1.18 4.106L3.343 5.57a.495.495 0 0 0 0 .938l3.506 1.169 1.178 4.106a.495.495 0 0 0 .951 0l1.178-4.106 3.507-1.169a.495.495 0 0 0 0-.938Zm-4.016 1.3a.494.494 0 0 0-.319.333l-.825 2.875-.825-2.875a.494.494 0 0 0-.319-.333l-2.49-.83 2.49-.83a.494.494 0 0 0 .319-.333l.825-2.875.825 2.875a.494.494 0 0 0 .319.333l2.49.83ZM5.41 11.14h-.772v-.772a.464.464 0 0 0-.928 0v.773h-.773a.464.464 0 0 0 0 .927h.773v.773a.464.464 0 0 0 .928 0v-.773h.772a.464.464 0 1 0 0-.927Z" }) })));
}
exports.default = LineTwitterFeature;
