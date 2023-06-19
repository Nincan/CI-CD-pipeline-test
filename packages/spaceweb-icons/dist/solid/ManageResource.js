"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidManageResource(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidManageResource" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.072 10.827a.295.295 0 01-.27-.128.535.535 0 01-.069-.304v-.911a2.363 2.363 0 01-.7-.203 1.885 1.885 0 01-.57-.407 1.698 1.698 0 01-.34-.512 1.384 1.384 0 01-.11-.528.546.546 0 01.165-.388.56.56 0 01.418-.172.596.596 0 01.336.093.512.512 0 01.199.271 4.508 4.508 0 00.168.453.786.786 0 00.434.401V6.985a4.368 4.368 0 01-.775-.293 1.483 1.483 0 01-.577-.511 1.515 1.515 0 01-.224-.855A1.518 1.518 0 01.59 4.212a1.867 1.867 0 011.143-.494v-.302c0-.37.231-.41.332-.41.1 0 .335.04.335.402v.312a2.3 2.3 0 01.62.16 1.442 1.442 0 01.53.397 1.635 1.635 0 01.272.412.997.997 0 01.1.406.531.531 0 01-.165.39.538.538 0 01-.397.165.553.553 0 01-.565-.465.732.732 0 00-.395-.494v1.318c.276.076.498.148.668.212a1.604 1.604 0 01.518.32 1.47 1.47 0 01.377.52 1.633 1.633 0 01.131.659 1.748 1.748 0 01-.209.837 1.676 1.676 0 01-.617.639 2.158 2.158 0 01-.868.282v.833a.926.926 0 01-.05.357.274.274 0 01-.278.16zM2.4 8.542a.855.855 0 00.406-.24.673.673 0 00.18-.46.53.53 0 00-.168-.424 1.338 1.338 0 00-.418-.233zm-.667-3.875a1.078 1.078 0 00-.322.182.483.483 0 00-.14.384.476.476 0 00.131.368 1.17 1.17 0 00.331.2zm4.799 6.326a1.356 1.356 0 01-.648-.152 1.096 1.096 0 01-.449-.435 1.35 1.35 0 01-.16-.638l-.021-.901a3.462 3.462 0 00-.032-.424.77.77 0 00-.143-.329 1.09 1.09 0 00-.262-.216 1.204 1.204 0 01-.273-.216.513.513 0 01-.098-.34.552.552 0 01.262-.494 2.128 2.128 0 00.36-.267.58.58 0 00.135-.257 1.885 1.885 0 00.051-.38l.021-1.038a1.23 1.23 0 01.354-.885 1.244 1.244 0 01.903-.333c.531 0 .642.292.642.538a.599.599 0 01-.11.376.451.451 0 01-.302.17.613.613 0 00-.254.072.242.242 0 00-.07.163 6.17 6.17 0 00-.034.647 5.398 5.398 0 01-.058.797 1.279 1.279 0 01-.54.891 1.425 1.425 0 01.314.308 1.346 1.346 0 01.224.553 4.44 4.44 0 01.06.82c0 .24.007.417.017.531a.6.6 0 00.055.226.164.164 0 00.07.074 1.002 1.002 0 00.218.048.437.437 0 01.298.175.592.592 0 01.112.37c0 .205-.083.546-.642.546zm3.993-1.498a.543.543 0 01-.356-.122 1.785 1.785 0 01-.293-.338l-.655-.96-.669.96a1.981 1.981 0 01-.293.34.52.52 0 01-.35.12.577.577 0 01-.394-.144A.462.462 0 017.347 9a1.002 1.002 0 01.225-.512l.874-1.25-.768-1.036a.908.908 0 01-.23-.53.45.45 0 01.158-.342.568.568 0 01.396-.14.536.536 0 01.358.123 2.014 2.014 0 01.288.332l.573.785.556-.784a1.756 1.756 0 01.295-.337.536.536 0 01.353-.12.59.59 0 01.396.137.446.446 0 01.166.347.575.575 0 01-.065.265 1.681 1.681 0 01-.174.265L9.98 7.237l.874 1.251a1.025 1.025 0 01.232.52.446.446 0 01-.166.349.588.588 0 01-.395.138zm1.369 1.498a.699.699 0 01-.46-.138.499.499 0 01-.174-.407.65.65 0 01.052-.263.482.482 0 01.147-.197.432.432 0 01.212-.087.996.996 0 00.225-.048.142.142 0 00.07-.077.682.682 0 00.046-.237c.01-.119.013-.29.013-.517a5.469 5.469 0 01.06-.816 1.33 1.33 0 01.214-.535 1.404 1.404 0 01.33-.328 1.524 1.524 0 01-.223-.197 1.226 1.226 0 01-.226-.36 1.893 1.893 0 01-.121-.492 5.188 5.188 0 01-.034-.642c0-.232-.005-.41-.014-.532a.664.664 0 00-.049-.235.138.138 0 00-.073-.07.848.848 0 00-.216-.042.45.45 0 01-.298-.17.574.574 0 01-.115-.377c0-.246.11-.538.634-.538a1.359 1.359 0 01.652.15 1.124 1.124 0 01.45.432 1.282 1.282 0 01.166.637c.02 1.055.039 1.286.05 1.33a.758.758 0 00.15.327 1.128 1.128 0 00.256.208 1.079 1.079 0 01.266.214.546.546 0 01.103.356.54.54 0 01-.257.492 1.844 1.844 0 00-.356.263.544.544 0 00-.138.256 2.577 2.577 0 00-.054.517l-.02.9a1.23 1.23 0 01-.356.887 1.255 1.255 0 01-.912.336z" }) })));
}
exports.default = SolidManageResource;
