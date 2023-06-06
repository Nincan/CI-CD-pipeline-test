"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidManager(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidManager" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.763 7c0 .338-.03.67-.087.99a.52.52 0 0 0 .18.5l.639.519c.197.16.25.44.122.66l-.96 1.662a.517.517 0 0 1-.632.224l-.775-.296a.514.514 0 0 0-.516.094 5.69 5.69 0 0 1-1.719.994.515.515 0 0 0-.34.4l-.13.818a.518.518 0 0 1-.511.435H6.116a.516.516 0 0 1-.51-.435l-.131-.818a.515.515 0 0 0-.341-.4 5.69 5.69 0 0 1-1.719-.994.514.514 0 0 0-.516-.094l-.774.296a.517.517 0 0 1-.632-.224L.313 9.288l.987-.803a.505.505 0 0 0 .174-.487 5.752 5.752 0 0 1 0-1.998.502.502 0 0 0-.174-.485l-.986-.803L1.493 2.67a.517.517 0 0 1 .632-.225l.774.296a.51.51 0 0 0 .516-.094 5.69 5.69 0 0 1 1.719-.994.515.515 0 0 0 .34-.4l.132-.817A.516.516 0 0 1 6.116 0h1.918c.254 0 .47.184.51.435l.13.817a.516.516 0 0 0 .341.4 5.667 5.667 0 0 1 1.72.994.51.51 0 0 0 .515.094l.775-.296a.515.515 0 0 1 .632.225l.96 1.662a.516.516 0 0 1-.122.66l-.646.524a.502.502 0 0 0-.174.485c.057.326.088.66.088 1zM7 6.72c-.768 0-1.393-.625-1.393-1.393S6.232 3.934 7 3.934s1.393.625 1.393 1.393S7.768 6.72 7 6.72zm2.806 3.092C9.71 8.396 8.493 7.276 7 7.276s-2.71 1.12-2.806 2.536h5.612z" }, void 0) }), void 0));
}
exports.default = SolidManager;
