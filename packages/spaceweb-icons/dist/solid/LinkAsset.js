"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidLinkAsset(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidLinkAsset" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M12.062 0H1.936a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h10.126a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zM7.03 9.46q-.048.055-.1.106l-.62.622a1.641 1.641 0 01-.954.486 1.661 1.661 0 01-1.485-.51 1.693 1.693 0 01-.03-2.302c.24-.262.495-.51.754-.756a1.596 1.596 0 01.914-.425 1.634 1.634 0 01.616.03l.013.017a.29.29 0 00-.044.026L4.487 8.359a.884.884 0 001.254 1.246l1.601-1.603a.203.203 0 01.034-.038 1.53 1.53 0 01.05.518 1.69 1.69 0 01-.396.977zm.937-3.983a.465.465 0 01.343-.155.46.46 0 01.343.765l-.037.039-2.397 2.398a.475.475 0 01-.342.155.465.465 0 01-.46-.483.451.451 0 01.118-.281q.019-.022.04-.042zM10.463 6a1.592 1.592 0 01-.165.196c-.205.208-.415.413-.62.622a1.695 1.695 0 01-1.61.47l-.008-.013a.49.49 0 00.04-.032l1.591-1.59a.926.926 0 00.268-.495.88.88 0 00-.662-1.012.863.863 0 00-.842.245q-.805.802-1.606 1.606c-.012.011-.017.03-.032.04a1.408 1.408 0 01-.054-.516 1.695 1.695 0 01.489-1.079c.219-.22.435-.44.658-.657a1.627 1.627 0 01.897-.453 1.65 1.65 0 011.396.392 1.63 1.63 0 01.568 1.056A1.655 1.655 0 0110.463 6z" }) })));
}
exports.default = SolidLinkAsset;
