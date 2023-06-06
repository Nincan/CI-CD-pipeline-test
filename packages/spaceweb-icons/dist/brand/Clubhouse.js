"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandClubhouse(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandClubhouse" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.82 5.03a1 1 0 0 0-.884-.46 1.771 1.771 0 0 0-1.56 1.082l-.09.18a10.396 10.396 0 0 1-.307-.478 6.666 6.666 0 0 1-.577-1.226 9.272 9.272 0 0 1-.262-1.01c-.171-.974-.442-1.29-.901-1.407a1.31 1.31 0 0 0-1.02.171.994.994 0 0 0-.982-.649 1.133 1.133 0 0 0-1.209 1.118c0 .09.01.18.018.289a1.222 1.222 0 0 0-.261-.027 1.125 1.125 0 0 0-1.19 1.118 1.942 1.942 0 0 0 .072.514 1.177 1.177 0 0 0-1.047.406 1.315 1.315 0 0 0-.117 1.208 15.384 15.384 0 0 0 .668 1.777 15.118 15.118 0 0 0 1.109 2.21 6.801 6.801 0 0 0 1.903 2.28 4.048 4.048 0 0 0 2.182.64 3.834 3.834 0 0 0 2.56-1.01 4.577 4.577 0 0 0 1.317-3.58 4.12 4.12 0 0 1 .533-1.767.395.395 0 0 1 .027-.072A1.816 1.816 0 0 0 14 5.625a1.087 1.087 0 0 0-.18-.595ZM7.255 1.828c.306 0 .414.145.496.47a4.349 4.349 0 0 1 .126.775c.036.28.18.91.216 1.073a14.403 14.403 0 0 0 .803 1.966 5.637 5.637 0 0 0-.676.288c-.235.127-.289.127-.388-.063a8.44 8.44 0 0 1-.487-1.01 7.659 7.659 0 0 1-.307-.965 8.03 8.03 0 0 0-.288-1.09 6.203 6.203 0 0 1-.127-.92.565.565 0 0 1 .632-.524Zm5.997 4.356a4.749 4.749 0 0 0-.578 2.002 3.978 3.978 0 0 1-1.136 3.147 3.183 3.183 0 0 1-2.155.857 3.415 3.415 0 0 1-1.858-.55 6.102 6.102 0 0 1-1.722-2.092A14.596 14.596 0 0 1 4.73 7.41 15.927 15.927 0 0 1 4.07 5.68a.712.712 0 0 1 .027-.65.594.594 0 0 1 .433-.198c.307-.009.424.208.604.776a10.094 10.094 0 0 0 .46 1.163c.172.352.406.812.514.974.09.135.172.18.262.18a.25.25 0 0 0 .28-.252.997.997 0 0 0-.136-.325c-.09-.171-.28-.505-.406-.793a17.767 17.767 0 0 1-.424-1.074 12.213 12.213 0 0 1-.261-.802 3.764 3.764 0 0 1-.207-.947.528.528 0 0 1 .595-.523c.261 0 .424.126.532.595a10.507 10.507 0 0 0 .478 1.668c.144.361.37.83.496 1.074a1.437 1.437 0 0 1 .171.306c0 .072-.126.18-.234.325a.33.33 0 0 0-.1.216.34.34 0 0 0 .1.199c.063.08.117.162.189.162a.118.118 0 0 0 .108-.063 3.348 3.348 0 0 1 1.028-.875 4.523 4.523 0 0 1 1.29-.469c.18-.036.225-.081.225-.18a.202.202 0 0 0-.207-.199 1.86 1.86 0 0 0-.307.01c-.099.008-.153-.037-.207-.172a9.233 9.233 0 0 1-.73-1.821 7.26 7.26 0 0 1-.217-1.19.376.376 0 0 1 .117-.398.68.68 0 0 1 .577-.117c.226.063.352.235.47.938a9.867 9.867 0 0 0 .279 1.1 6.754 6.754 0 0 0 .622 1.344 9.279 9.279 0 0 0 .568.847c-.036.118-.108.199-.333.388a2.563 2.563 0 0 0-.668.758 1.778 1.778 0 0 0-.216.766c0 .19.036.226.162.226.208 0 .379-.036.388-.127a1.69 1.69 0 0 1 .306-.856 5.102 5.102 0 0 1 .496-.487 1.313 1.313 0 0 0 .532-.776 2.778 2.778 0 0 1 .19-.478 1.23 1.23 0 0 1 1.055-.74.421.421 0 0 1 .397.19.51.51 0 0 1 .072.27 1.374 1.374 0 0 1-.19.542ZM3.07 8.997c-.207.127-1.325.713-1.578.803-.18.063-.378.054-.487-.289-.144-.414.054-.523.343-.63.252-.1 1.28-.47 1.524-.533.171-.045.289.01.37.217.08.225.018.315-.172.432M2.15 6.635a30.742 30.742 0 0 1-1.83-.072c-.243-.027-.343-.136-.316-.487.027-.388.18-.406.424-.388.28.027 1.587.234 1.795.306.216.064.243.163.216.352-.036.235-.144.28-.288.289M2.304 4.119A13.2 13.2 0 0 1 .68 3.235c-.244-.144-.27-.27-.109-.586.145-.28.316-.325.56-.199.28.145 1.28.92 1.47 1.074.18.144.162.225.063.414-.1.18-.19.235-.361.18" }, void 0) }), void 0));
}
exports.default = BrandClubhouse;
