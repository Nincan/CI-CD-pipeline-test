"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDonutChart(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDonutChart" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6.24 0l.09.042.09.042a.468.468 0 01.065.07.468.468 0 01.047.071.47.47 0 01.033.09.433.433 0 010 .056v3.443a.54.54 0 01-.17.286 1.12 1.12 0 01-.154.094l-.136.044a2.814 2.814 0 103.64 3.46l.02-.046.027-.044a.39.39 0 01.187-.173l.085-.028a.47.47 0 01.094 0H13.6l.075.028.089.033.075.047a.427.427 0 01.155.21.468.468 0 010 .095.44.44 0 01.004.089v.065A7.036 7.036 0 116.025 0h.216zm1.797 0a7.069 7.069 0 015.953 5.957v.066a.44.44 0 010 .056.422.422 0 01-.173.305l-.07.047-.09.033H10.13a.47.47 0 01-.17-.033l-.046-.023a.469.469 0 01-.094-.061l-.042-.043a.627.627 0 01-.09-.145v-.028a2.814 2.814 0 00-1.876-1.876l-.043-.022-.041-.025a.47.47 0 01-.07-.047.939.939 0 01-.108-.141.469.469 0 01-.024-.08.469.469 0 01-.023-.098V.399a.441.441 0 01.023-.08.468.468 0 01.033-.09.469.469 0 01.047-.07.47.47 0 01.06-.07l.071-.047L7.822 0z" }) })));
}
exports.default = SolidDonutChart;
