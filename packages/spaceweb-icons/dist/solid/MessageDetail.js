"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMessageDetail(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMessageDetail" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.55617,4.88138,12.1636,4.4888,9.80032,6.85208a1.86824,1.86824,0,0,1-2.64258-2.6416L9.521,1.84622l-.39258-.3916A1.42381,1.42381,0,0,1,8.78866.00406H2.091A2.094,2.094,0,0,0,0,2.095V13.10477a.89025.89025,0,0,0,1.55463.5935L3.87533,11.1055h7.90338a2.094,2.094,0,0,0,2.09094-2.09094V5.2692a1.4092,1.4092,0,0,1-1.31348-.38782Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M13.57607.00406H10.14919A.43515.43515,0,0,0,9.836.74722l1.0993,1.09925L7.86459,4.91721A.86854.86854,0,0,0,9.09292,6.14548L12.1636,3.07474,13.26284,4.1741a.43.43,0,0,0,.737-.30713V.44009A.42737.42737,0,0,0,13.57607.00406Z" })] })));
}
exports.default = SolidMessageDetail;
