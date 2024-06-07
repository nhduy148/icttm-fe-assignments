import {
  arrayMap_default,
  getTag_default,
  keys_default,
  mapToArray_default
} from "./chunk-HV5CDQQZ.js";
import "./chunk-GXVXUIYB.js";
import "./chunk-5WWUZCGV.js";

// node_modules/lodash-es/_baseToPairs.js
function baseToPairs(object, props) {
  return arrayMap_default(props, function(key) {
    return [key, object[key]];
  });
}
var baseToPairs_default = baseToPairs;

// node_modules/lodash-es/_setToPairs.js
function setToPairs(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = [value, value];
  });
  return result;
}
var setToPairs_default = setToPairs;

// node_modules/lodash-es/_createToPairs.js
var mapTag = "[object Map]";
var setTag = "[object Set]";
function createToPairs(keysFunc) {
  return function(object) {
    var tag = getTag_default(object);
    if (tag == mapTag) {
      return mapToArray_default(object);
    }
    if (tag == setTag) {
      return setToPairs_default(object);
    }
    return baseToPairs_default(object, keysFunc(object));
  };
}
var createToPairs_default = createToPairs;

// node_modules/lodash-es/toPairs.js
var toPairs = createToPairs_default(keys_default);
var toPairs_default = toPairs;
export {
  toPairs_default as default
};
//# sourceMappingURL=lodash-es_toPairs.js.map
