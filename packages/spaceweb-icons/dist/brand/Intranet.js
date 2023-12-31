"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandIntranet(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandIntranet" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.22 12.987a2.262 2.262 0 0 1-2.714-1.91 2.223 2.223 0 0 1 .333-1.507c.037-.06.023-.09-.02-.133l-.696-.725-1.174-1.175-.01-.01a1.708 1.708 0 0 1-1.82.032L4.142 9.533a2.241 2.241 0 0 1 .283 1.866 2.197 2.197 0 0 1-.956 1.283 2.26 2.26 0 1 1 .173-3.69l1.94-1.94A1.71 1.71 0 0 1 5.57 5.16L3.814 3.402a1.332 1.332 0 0 1-1.072.24 1.31 1.31 0 0 1-.805-.498 1.355 1.355 0 1 1 2.33-.33l1.832 1.833a1.703 1.703 0 0 1 1.856.034l1.804-1.805a1.355 1.355 0 1 1 1.437.775 1.328 1.328 0 0 1-.958-.213L8.46 5.215a1.703 1.703 0 0 1-.01 1.783l1.957 1.959a2.381 2.381 0 0 1 .719-.352 2.26 2.26 0 1 1 1.094 4.382Z" }) })));
}
exports.default = BrandIntranet;
