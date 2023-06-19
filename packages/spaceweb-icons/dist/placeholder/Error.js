"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderError(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 40", "data-icon-name": "PlaceholderError" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M39.852 10.2a.953.953 0 00-.007-.1c-.003-.012-.01-.022-.012-.033a1.962 1.962 0 00-.105-.259.844.844 0 00-.273-.297.974.974 0 00-.12-.082c-.011-.006-.02-.015-.03-.02a1.416 1.416 0 01-.196-.072L4.335.661a1.008 1.008 0 00-.862.185L.483 3.203a.987.987 0 00-.25.31c-.013.025-.026.046-.038.071a.989.989 0 00-.087.379c0 .009-.006.016-.006.025v25.744a1 1 0 00.758.97l34.764 8.667a1.02 1.02 0 00.242.029.706.706 0 00.442-.118.989.989 0 00.174-.094l3.001-2.346a1.001 1.001 0 00.384-.788V10.308a.963.963 0 00-.015-.108zm-4.986 26.918L2.102 28.95V12.47l32.764 8.168zm0-18.541L2.102 10.409V5.27l32.764 8.176z" }), (0, jsx_runtime_1.jsx)("path", { d: "M16.187 12.334l14.366 3.581a1.04 1.04 0 00.244.03 1 1 0 00.24-1.97l-14.365-3.582a1 1 0 00-.485 1.941zM4.486 9.459a1.407 1.407 0 00.212.067.798.798 0 001.014-.798 1.327 1.327 0 00-1.014-1.23 1.244 1.244 0 00-.212-.023.783.783 0 00-.79.824 1.326 1.326 0 00.79 1.16zm3.219.77a1.407 1.407 0 00.212.067.798.798 0 001.014-.799 1.327 1.327 0 00-1.014-1.23 1.23 1.23 0 00-.212-.022.783.783 0 00-.791.824 1.326 1.326 0 00.791 1.16zm3.219.766a1.41 1.41 0 00.212.068.798.798 0 001.014-.799 1.327 1.327 0 00-1.014-1.23 1.231 1.231 0 00-.212-.022.783.783 0 00-.791.824 1.326 1.326 0 00.791 1.16zm-.066 18.471l12.129 2.998a1.001 1.001 0 001.14-1.412l-5.893-12.043a1.001 1.001 0 00-1.724-.129l-6.237 9.045a1.001 1.001 0 00.585 1.54zm6.262-.437a1.018 1.018 0 01-.763-.939.588.588 0 01.763-.587 1.018 1.018 0 01.763.94.588.588 0 01-.763.586zm-.727-6.314a.577.577 0 01.75-.564l.012.003a.999.999 0 01.738.933l-.045 2.744a.577.577 0 01-.75.565l-.013-.003a.999.999 0 01-.737-.933z" })] })));
}
exports.default = PlaceholderError;
