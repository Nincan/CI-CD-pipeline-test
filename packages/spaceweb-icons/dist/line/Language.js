"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Language.svg instead.
 */
function LineLanguage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 12 8.232", "data-icon-name": "LineLanguage" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.04 1.152C3.87.454 3.4.002 2.844 0H2.84c-.441 0-.986.299-1.197 1.139L.015 7.608a.502.502 0 00.973.245l.457-1.818h2.757l.444 1.815a.501.501 0 10.975-.24L4.04 1.153zm-2.343 3.88l.918-3.648c.073-.29.196-.38.224-.38.03 0 .155.092.227.386l.89 3.642H1.698zm8.119-1.925h1.682a.501.501 0 100-1.003h-1.88A11.45 11.45 0 019.515.57a.501.501 0 10-1.003 0c0 .545-.038 1.055-.102 1.534H6.53a.501.501 0 100 1.003h1.682c-.62 2.634-2.009 4.01-2.027 4.028a.502.502 0 00.687.73c.078-.072 1.398-1.347 2.142-3.813.744 2.466 2.064 3.741 2.141 3.813a.501.501 0 00.687-.73c-.017-.017-1.407-1.394-2.026-4.028z" }) })));
}
exports.default = LineLanguage;
