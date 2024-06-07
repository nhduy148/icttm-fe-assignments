import {
  baseEach_default
} from "./chunk-7QLA4KQN.js";
import {
  isArrayLike_default
} from "./chunk-HV5CDQQZ.js";

// node_modules/lodash-es/_baseMap.js
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike_default(collection) ? Array(collection.length) : [];
  baseEach_default(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
var baseMap_default = baseMap;

export {
  baseMap_default
};
//# sourceMappingURL=chunk-KZ6Q2P26.js.map
