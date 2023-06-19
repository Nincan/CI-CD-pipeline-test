"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidArrowReturned(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidArrowReturned" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.77 3.657l-1.73-1.706a.703.703 0 00-1.196.503v.002l-.002.012.006 1-5.513.035a.702.702 0 10.004 1.403h.005l5.513-.035.006.937c0 .012.006.022.007.034-.001.018-.01.034-.01.053a.694.694 0 00.2.485.707.707 0 001 .004l.009-.009 1.707-1.725a.703.703 0 00-.007-.993zM12.682 7.604a.7.7 0 00-.7.7 1.005 1.005 0 01-.141.728c-.128.153-.437.067-.733.095-.007 0-.014.003-.02.004H8.623l-.015.003h-5.46v-.938c0-.012-.007-.021-.007-.033.001-.018.01-.035.01-.053a.694.694 0 00-.196-.487.707.707 0 00-1-.01l-.01.009L.228 9.336a.703.703 0 000 .992l1.718 1.718a.703.703 0 001.2-.496v-.002l.002-.012v-1l5.513.001c.01 0 .019-.005.029-.006h2.419l.014-.003.103.003a1.859 1.859 0 001.605-.434 2.36 2.36 0 00.552-1.792.7.7 0 00-.7-.7z" }) })));
}
exports.default = SolidArrowReturned;
