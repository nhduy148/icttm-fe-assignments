import {
  baseIteratee_default
} from "./chunk-I4GUQYME.js";
import "./chunk-5N254ZLX.js";
import "./chunk-HV5CDQQZ.js";
import "./chunk-GXVXUIYB.js";
import "./chunk-5WWUZCGV.js";

// node_modules/lodash-es/_baseSum.js
function baseSum(array, iteratee) {
  var result, index = -1, length = array.length;
  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== void 0) {
      result = result === void 0 ? current : result + current;
    }
  }
  return result;
}
var baseSum_default = baseSum;

// node_modules/lodash-es/sumBy.js
function sumBy(array, iteratee) {
  return array && array.length ? baseSum_default(array, baseIteratee_default(iteratee, 2)) : 0;
}
var sumBy_default = sumBy;
export {
  sumBy_default as default
};
//# sourceMappingURL=lodash-es_sumBy.js.map
