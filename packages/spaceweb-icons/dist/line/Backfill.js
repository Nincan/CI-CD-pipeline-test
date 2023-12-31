"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineBackfill(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 12 11.6", "data-icon-name": "LineBackfill" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.503 5.305H7.694l.823-.87a.496.496 0 10-.721-.681L6.19 5.45l-.01.01c-.02.021-.028.047-.043.07-.02.028-.042.053-.055.085a.492.492 0 000 .373c.013.03.035.055.053.083.016.023.025.05.045.07l.01.01v.001l1.605 1.695a.494.494 0 00.702.02.496.496 0 00.02-.702l-.823-.868h3.808a.496.496 0 100-.992z" }), (0, jsx_runtime_1.jsx)("path", { d: "M0 2.25v7.1c0 1.193.85 2.178 1.934 2.243-.002.003.031.007.07.007h4.189a.417.417 0 00.09-.009c1.083-.03 1.957-1.016 1.957-2.242 0-.271-.207-.492-.462-.492s-.462.22-.462.492c0 .688-.48 1.242-1.093 1.262l-4.173.005C1.404 10.59.924 10.037.924 9.349V2.251c0-.689.48-1.242 1.092-1.26L6.187.986c.65.023 1.13.576 1.13 1.265 0 .271.207.493.461.493.255 0 .462-.222.462-.493 0-1.193-.848-2.178-1.932-2.243C6.311.005 6.275 0 6.238 0H2.047a.474.474 0 00-.086.008C.874.04 0 1.026 0 2.251zM2.047.18zm4.147 10.614z" })] })));
}
exports.default = LineBackfill;
