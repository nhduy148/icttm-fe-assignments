import {
  baseGetTag_default,
  isObjectLike_default
} from "./chunk-GXVXUIYB.js";

// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

export {
  isSymbol_default
};
//# sourceMappingURL=chunk-5N254ZLX.js.map
