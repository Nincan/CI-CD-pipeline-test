"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineHashtag(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineHashtag" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.177 8.497h-2.89l.483-3.861h2.407a.772.772 0 000-1.544h-2.214L11.241.87A.772.772 0 009.709.679l-.302 2.413H5.558L5.836.87A.772.772 0 004.304.679l-.302 2.413H.822a.772.772 0 000 1.544H3.81l-.483 3.86H.823a.772.772 0 000 1.545h2.31l-.374 2.993a.772.772 0 00.67.862.841.841 0 00.098.006.772.772 0 00.765-.677l.398-3.184h3.848l-.374 2.993a.772.772 0 00.67.862.841.841 0 00.097.006.772.772 0 00.765-.677l.398-3.184h3.083a.772.772 0 000-1.545zm-8.294 0l.482-3.861h3.849l-.483 3.86z" }, void 0) }), void 0));
}
exports.default = LineHashtag;
