"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/Presentation.svg instead.
 */
function LinePresentation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 18.431 12.55", "data-icon-name": "LinePresentation" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.865 6.958c.24 0 .438.171.48.399l.007.087-.001.934.936.001c.209 0 .387.132.456.316l.023.083.007.087a.488.488 0 01-.398.48l-.088.008-.936-.001.001.935a.486.486 0 01-.317.456l-.082.022-.088.008a.486.486 0 01-.478-.398l-.008-.088-.001-.935-.934.001a.486.486 0 01-.455-.318l-.023-.082-.008-.088c0-.239.172-.437.399-.478l.087-.008.934-.001.001-.934c0-.21.132-.387.317-.455l.082-.023.087-.008zm0-.648a2.556 2.556 0 100 5.112 2.556 2.556 0 000-5.112zm0-1.01a3.566 3.566 0 110 7.132 3.566 3.566 0 010-7.132zM15.05 0c.541 0 .987.41 1.044.936l.006.114V4.3a.55.55 0 01-1.093.09L15 4.3V1.1H1.1V8h9.2c.273 0 .5.2.543.46l.007.09c0 .273-.2.5-.46.543l-.09.007H8.549v2.449l2.633.001c.203 0 .368.165.368.368v.264a.368.368 0 01-.368.368H4.919a.369.369 0 01-.37-.368v-.264a.37.37 0 01.37-.368l2.63-.001V9.1H1.05a1.05 1.05 0 01-1.044-.936L0 8.05v-7C0 .509.41.063.936.006L1.05 0h14z" }) })));
}
exports.default = LinePresentation;
