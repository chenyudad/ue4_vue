import defaultValue from "./defaultValue.js";
import CesiumMath from "./Math.js";
import defined from './defined.js';

function XzCartesian3(x = 0.0, y = 0.0, z = 0.0) {
    this.x = x;
    this.y = y;
    this.z = z;
}

XzCartesian3.unpack = function(array, startingIndex = 0, result) {

    result.x = array[startingIndex++];
    result.y = array[startingIndex++];
    result.z = array[startingIndex];
    return result;
};

XzCartesian3.pack = function(value, array, startingIndex) {
    //>>includeStart('debug', pragmas.debug);
    // Check.typeOf.object('value', value);
    // Check.defined('array', array);
    //>>includeEnd('debug');

    startingIndex = defaultValue(startingIndex, 0);

    array[startingIndex++] = value.x;
    array[startingIndex++] = value.y;
    array[startingIndex] = value.z;

    return array;
};

XzCartesian3.packedLength = 3;

//角度转弧度
function toRadians(degrees) {
    return degrees / 180 * Math.PI;
}
XzCartesian3.fromDegrees = function(longitude, latitude, height, result) {

    longitude = toRadians(longitude);
    latitude = toRadians(latitude);
    return XzCartesian3.fromRadians(longitude, latitude, height, result);
};

var scratchN = new XzCartesian3();
var scratchK = new XzCartesian3();
var wgs84RadiiSquared = new XzCartesian3(6378137.0 * 6378137.0, 6378137.0 * 6378137.0, 6356752.3142451793 * 6356752.3142451793);

XzCartesian3.fromRadians = function(longitude, latitude, height, result) {


    //height = defaultValue(height, 0.0);
    var radiiSquared = wgs84RadiiSquared;

    var cosLatitude = Math.cos(latitude);
    scratchN.x = cosLatitude * Math.cos(longitude);
    scratchN.y = cosLatitude * Math.sin(longitude);
    scratchN.z = Math.sin(latitude);
    scratchN = XzCartesian3.normalize(scratchN, scratchN);

    XzCartesian3.multiplyComponents(radiiSquared, scratchN, scratchK);
    var gamma = Math.sqrt(XzCartesian3.dot(scratchN, scratchK));
    scratchK = XzCartesian3.divideByScalar(scratchK, gamma, scratchK);
    scratchN = XzCartesian3.multiplyByScalar(scratchN, height, scratchN);

    //if (!defined(result)) {
        result = new XzCartesian3();
    //}
    return XzCartesian3.add(scratchK, scratchN, result);
};

XzCartesian3.normalize = function(cartesian, result) {

    var magnitude = XzCartesian3.magnitude(cartesian);

    result.x = cartesian.x / magnitude;
    result.y = cartesian.y / magnitude;
    result.z = cartesian.z / magnitude;

    //>>includeStart('debug', pragmas.debug);
    if (isNaN(result.x) || isNaN(result.y) || isNaN(result.z)) {
        throw new Error('normalized result is not a number');
    }
    //>>includeEnd('debug');

    return result;
};

XzCartesian3.magnitude = function(cartesian) {
    return Math.sqrt(XzCartesian3.magnitudeSquared(cartesian));
};

XzCartesian3.magnitudeSquared = function(cartesian) {
    return cartesian.x * cartesian.x + cartesian.y * cartesian.y + cartesian.z * cartesian.z;
};

XzCartesian3.multiplyComponents = function(left, right, result) {

    result.x = left.x * right.x;
    result.y = left.y * right.y;
    result.z = left.z * right.z;
    return result;
};

XzCartesian3.dot = function(left, right) {

    return left.x * right.x + left.y * right.y + left.z * right.z;
};

XzCartesian3.divideByScalar = function(cartesian, scalar, result) {

    result.x = cartesian.x / scalar;
    result.y = cartesian.y / scalar;
    result.z = cartesian.z / scalar;
    return result;
};

XzCartesian3.multiplyByScalar = function(cartesian, scalar, result) {

    result.x = cartesian.x * scalar;
    result.y = cartesian.y * scalar;
    result.z = cartesian.z * scalar;
    return result;
};

XzCartesian3.add = function(left, right, result) {

    result.x = left.x + right.x;
    result.y = left.y + right.y;
    result.z = left.z + right.z;
    return result;
};

XzCartesian3.cross = function(left, right, result) {

    var leftX = left.x;
    var leftY = left.y;
    var leftZ = left.z;
    var rightX = right.x;
    var rightY = right.y;
    var rightZ = right.z;

    var x = leftY * rightZ - leftZ * rightY;
    var y = leftZ * rightX - leftX * rightZ;
    var z = leftX * rightY - leftY * rightX;

    result.x = x;
    result.y = y;
    result.z = z;
    return result;
};

XzCartesian3.clone = function(cartesian, result) {

    result.x = cartesian.x;
    result.y = cartesian.y;
    result.z = cartesian.z;
    return result;
};

XzCartesian3.equalsEpsilon = function(left, right, relativeEpsilon, absoluteEpsilon) {
    return (left === right) ||
        (defined(left) &&
            defined(right) &&
            CesiumMath.equalsEpsilon(left.x, right.x, relativeEpsilon, absoluteEpsilon) &&
            CesiumMath.equalsEpsilon(left.y, right.y, relativeEpsilon, absoluteEpsilon) &&
            CesiumMath.equalsEpsilon(left.z, right.z, relativeEpsilon, absoluteEpsilon));
};

XzCartesian3.ZERO = Object.freeze(new XzCartesian3(0.0, 0.0, 0.0));

export default XzCartesian3;