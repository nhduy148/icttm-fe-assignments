import {
  baseIteratee_default
} from "./chunk-I4GUQYME.js";
import {
  isSymbol_default
} from "./chunk-5N254ZLX.js";
import "./chunk-HV5CDQQZ.js";
import "./chunk-GXVXUIYB.js";
import "./chunk-5WWUZCGV.js";

// node_modules/lodash-es/_baseExtremum.js
function baseExtremum(array, iteratee, comparator) {
  var index = -1, length = array.length;
  while (++index < length) {
    var value = array[index], current = iteratee(value);
    if (current != null && (computed === void 0 ? current === current && !isSymbol_default(current) : comparator(current, computed))) {
      var computed = current, result = value;
    }
  }
  return result;
}
var baseExtremum_default = baseExtremum;

// node_modules/lodash-es/_baseGt.js
function baseGt(value, other) {
  return value > other;
}
var baseGt_default = baseGt;

// node_modules/lodash-es/maxBy.js
function maxBy(array, iteratee) {
  return array && array.length ? baseExtremum_default(array, baseIteratee_default(iteratee, 2), baseGt_default) : void 0;
}
var maxBy_default = maxBy;
export {
  maxBy_default as default
};
//# sourceMappingURL=lodash-es_maxBy.js.map
