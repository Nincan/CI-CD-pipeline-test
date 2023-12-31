"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMention(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMention" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.888 9.014a4.26 4.26 0 0 0 .9-3.055 6.094 6.094 0 0 0-6.5-5.945A6.965 6.965 0 0 0 .192 7.126a6.742 6.742 0 0 0 7.261 6.854 6.835 6.835 0 0 0 4.186-1.445.722.722 0 0 0 .334-.593.76.76 0 0 0-.778-.74.777.777 0 0 0-.408.13 5.483 5.483 0 0 1-3.334 1.055 5.075 5.075 0 0 1-5.446-5.28 5.168 5.168 0 0 1 5.298-5.445 4.353 4.353 0 0 1 4.797 4.316c0 1.76-.889 3.056-1.778 3.056a.556.556 0 0 1-.574-.592 1.612 1.612 0 0 1 .037-.334l.796-3.723c.075-.426-.463-.685-.852-.685a.833.833 0 0 0-.833.555l-.037.223A1.852 1.852 0 0 0 7.12 3.44a3.797 3.797 0 0 0-3.407 2.584 3.705 3.705 0 0 0-.252 1.482 3.91 3.91 0 0 0 .19 1.165 2.853 2.853 0 0 0 2.635 1.975A2.464 2.464 0 0 0 8.38 9.497a1.667 1.667 0 0 0 1.76 1.112 3.973 3.973 0 0 0 2.748-1.595Zm-6.194.002c-.926 0-1.296-.704-1.296-1.667A2.056 2.056 0 0 1 7.213 5.07c.796 0 1.24.575 1.24 1.427-.036 1.463-.777 2.519-1.759 2.519Z" }) })));
}
exports.default = SolidMention;
