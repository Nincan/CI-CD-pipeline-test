"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidEndCall(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidEndCall" }, props, { children: (0, jsx_runtime_1.jsx)("path", { clipRule: "evenodd", d: "M13.072 9.288c-1.196-.064-2.362-.274-2.362-.274s-.934-.147-.936-.845c-.002-.46-.238-1.323-.634-1.396-.397-.072-4.314 0-4.314 0s-.428.029-.507.254c-.08.225-.38 1.396-.38 1.396s-.202.406-.762.507c-.565.102-2.274.448-2.274.448s-.661-.076-.781-.606S0 6.958 0 6.958s.082-.428.796-.868c.714-.44 2.384-1.467 6.08-1.468 3.418 0 6.469 1.547 6.469 1.547s.455.346.568.947c.113.6.305 2.233-.84 2.172z", fillRule: "evenodd" }) })));
}
exports.default = SolidEndCall;
