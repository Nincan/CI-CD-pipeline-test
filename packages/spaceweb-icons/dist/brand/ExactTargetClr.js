"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandExactTargetClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandExactTargetClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#E98300", d: "M2.121 13.995c-.304 0-.609.002-.913-.001-.27-.002-.39-.173-.279-.423.063-.141.16-.268.25-.394 1.425-1.98 2.849-3.96 4.28-5.935.126-.173.13-.286-.001-.467A1223.507 1223.507 0 011.026.647a.765.765 0 01-.134-.31C.86.14.962.011 1.162.009 1.795.002 2.43-.012 3.061.021c.159.008.357.144.456.281 1.59 2.175 3.165 4.36 4.75 6.538.096.131.099.211.005.34-1.061 1.451-2.117 2.907-3.174 4.363-.526.724-1.055 1.446-1.577 2.173-.141.196-.312.296-.561.283-.279-.015-.559-.003-.839-.003v-.001zM9.25 5.817L7.868 3.912 9.46 1.709c.337-.465.678-.928 1.01-1.397a.673.673 0 01.603-.311c.56.008 1.118-.006 1.676.009.115.003.297.063.326.141a.524.524 0 01-.047.411c-.238.373-.508.726-.767 1.086A10401.312 10401.312 0 009.25 5.817zm-.002 2.391l1.18 1.631c.825 1.146 1.652 2.292 2.473 3.44.088.124.168.266.203.41.043.184-.059.304-.257.305-.64.002-1.283.012-1.924-.011a.586.586 0 01-.387-.218c-.87-1.175-1.725-2.36-2.58-3.546-.033-.046-.041-.15-.011-.193.42-.596.849-1.187 1.303-1.818z" }) })));
}
exports.default = BrandExactTargetClr;
