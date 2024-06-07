import {
  baseMap_default
} from "./chunk-KZ6Q2P26.js";
import "./chunk-7QLA4KQN.js";
import {
  arrayPush_default,
  baseIteratee_default
} from "./chunk-I4GUQYME.js";
import "./chunk-5N254ZLX.js";
import {
  arrayMap_default,
  isArguments_default,
  isArray_default
} from "./chunk-HV5CDQQZ.js";
import {
  Symbol_default
} from "./chunk-GXVXUIYB.js";
import "./chunk-5WWUZCGV.js";

// node_modules/lodash-es/_isFlattenable.js
var spreadableSymbol = Symbol_default ? Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var isFlattenable_default = isFlattenable;

// node_modules/lodash-es/_baseFlatten.js
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable_default);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush_default(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var baseFlatten_default = baseFlatten;

// node_modules/lodash-es/map.js
function map(collection, iteratee) {
  var func = isArray_default(collection) ? arrayMap_default : baseMap_default;
  return func(collection, baseIteratee_default(iteratee, 3));
}
var map_default = map;

// node_modules/lodash-es/flatMap.js
function flatMap(collection, iteratee) {
  return baseFlatten_default(map_default(collection, iteratee), 1);
}
var flatMap_default = flatMap;
export {
  flatMap_default as default
};
//# sourceMappingURL=lodash-es_flatMap.js.map
