"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandFoursquare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 9.89 14", "data-icon-name": "BrandFoursquare" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M.098 7.293L.001 1.688C-.018.592.418.142 1.53.121 3.839.079 6.147.038 8.456 0c1.167-.019 1.584.421 1.388 1.56a433.22 433.22 0 01-1.242 6.791c-.152.804-.494 1.056-1.33 1.072-.561.011-1.124.044-1.685.022-.394-.016-.645.141-.885.435-1.009 1.235-2.038 2.453-3.058 3.679-.244.294-.511.546-.929.396-.427-.153-.511-.518-.517-.922-.032-1.913-.066-3.827-.1-5.74zm1.57 4.103c.195-.221.299-.329.392-.445.677-.84 1.357-1.677 2.023-2.524.235-.3.509-.446.896-.437.561.013 1.124-.028 1.686-.019.411.006.619-.187.685-.572.074-.433.154-.865.219-1.299.072-.481-.1-.685-.581-.682-.699.004-1.398.025-2.097.033-.545.007-.726-.165-.734-.682-.008-.509.168-.681.724-.693.851-.018 1.701-.034 2.552-.045.354-.004.573-.151.634-.515.073-.433.17-.862.236-1.296.09-.598-.042-.748-.634-.738-1.823.03-3.646.062-5.469.095-.63.012-.73.119-.719.763.048 2.826.098 5.651.149 8.476.001.147.018.292.038.58z" }) })));
}
exports.default = BrandFoursquare;
