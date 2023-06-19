"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineGuestUser(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineGuestUser" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.904 10.97a2.859 2.859 0 001.034-2.315.599.599 0 00-.598-.601l-2.892-.01h-.002a.6.6 0 00-.6.599 2.852 2.852 0 001.027 2.327 2.055 2.055 0 00-.222.186 3.002 3.002 0 00-.804 2.127.6.6 0 00.597.602l2.892.009h.002a.6.6 0 00.6-.598 3.188 3.188 0 00-.525-1.813 2.16 2.16 0 00-.509-.514zm-.245-1.719c-.146.536-.473.876-.774.876h-.001c-.296-.002-.617-.353-.76-.88zm-1.532 3.437a1.548 1.548 0 01.37-.681.6.6 0 01.403-.195.72.72 0 01.526.353 1.728 1.728 0 01.235.526z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.277 7.287a.6.6 0 00-.398-.749c-.11-.034-.211-.055-.318-.084a3.805 3.805 0 00.957-2.509 3.84 3.84 0 10-6.424 2.82 6.573 6.573 0 00-2.442 1.796 6.953 6.953 0 00-1.588 4.178 1.099 1.099 0 001.1 1.155h6.863a.6.6 0 100-1.2H1.27a5.736 5.736 0 011.3-3.36 5.526 5.526 0 012.879-1.77 3.642 3.642 0 002.858-.155 8.178 8.178 0 011.221.276.583.583 0 00.176.027.6.6 0 00.574-.425zM4.038 3.945a2.64 2.64 0 112.64 2.64 2.643 2.643 0 01-2.64-2.64z" })] })));
}
exports.default = LineGuestUser;
