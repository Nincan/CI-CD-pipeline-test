"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSavedQuery(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSavedQuery" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.29 3.766V1.468A1.4 1.4 0 0010.93.033H1.794V1.34H1.12a.653.653 0 00-.635.67.653.653 0 00.635.67h.673v1.815H1.12a.671.671 0 000 1.34h.673V7.6H1.12a.67.67 0 000 1.34h.673v1.799H1.12a.67.67 0 000 1.34h.673v1.31h3.564l.004-7.602A2.022 2.022 0 017.38 3.766z" }), (0, jsx_runtime_1.jsx)("path", { d: "M12.492 4.765H7.38a1.021 1.021 0 00-1.018 1.023l-.005 8.18 3.579-1.534 3.578 1.533v-8.18a1.025 1.025 0 00-1.022-1.022z" })] })));
}
exports.default = SolidSavedQuery;
