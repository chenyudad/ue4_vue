
import XzCartesian3 from "./Cartesian3.js";
import CesiumMath from "./Math.js";
import defaultValue from "./defaultValue.js";
import Ellipsoid from "./Ellipsoid.js";
import defined from './defined.js';
import DeveloperError from './DeveloperError.js';
import XzMatrix4 from "./Matrix4.js";

var XzTransforms = {};

var vectorProductLocalFrame = {
    up : {
        south : 'east',
        north : 'west',
        west : 'south',
        east : 'north'
    },
    down : {
        south : 'west',
        north : 'east',
        west : 'north',
        east : 'south'
    },
    south : {
        up : 'west',
        down : 'east',
        west : 'down',
        east : 'up'
    },
    north : {
        up : 'east',
        down : 'west',
        west : 'up',
        east : 'down'
    },
    west : {
        up : 'north',
        down : 'south',
        north : 'down',
        south : 'up'
    },
    east : {
        up : 'south',
        down : 'north',
        north : 'up',
        south : 'down'
    }
};

var degeneratePositionLocalFrame = {
    north : [-1, 0, 0],
    east : [0, 1, 0],
    up : [0, 0, 1],
    south : [1, 0, 0],
    west : [0, -1, 0],
    down : [0, 0, -1]
};

var localFrameToFixedFrameCache = {};

var scratchCalculateCartesian = {
    east : new XzCartesian3(),
    north : new XzCartesian3(),
    up : new XzCartesian3(),
    west : new XzCartesian3(),
    south : new XzCartesian3(),
    down : new XzCartesian3()
};

var scratchFirstCartesian = new XzCartesian3();
var scratchSecondCartesian = new XzCartesian3();
var scratchThirdCartesian = new XzCartesian3();

XzTransforms.localFrameToFixedFrameGenerator = function (firstAxis, secondAxis) {
    if (!vectorProductLocalFrame.hasOwnProperty(firstAxis) || !vectorProductLocalFrame[firstAxis].hasOwnProperty(secondAxis)) {
        throw new DeveloperError('firstAxis and secondAxis must be east, north, up, west, south or down.');
    }
    var thirdAxis = vectorProductLocalFrame[firstAxis][secondAxis];
    // debugger
    var resultat;
    var hashAxis = firstAxis + secondAxis;
    if (defined(localFrameToFixedFrameCache[hashAxis])) {
       resultat = localFrameToFixedFrameCache[hashAxis];
    } else {

        resultat = function (origin, ellipsoid, result) {
            // //>>includeStart('debug', pragmas.debug);
            if (!defined(origin)) {
                throw new DeveloperError('origin is required.');
            }
            // //>>includeEnd('debug');
            if (!defined(result)) {
                result = new XzMatrix4();
            }

            if (XzCartesian3.equalsEpsilon(origin, XzCartesian3.ZERO, CesiumMath.EPSILON14)) {
                // If x, y, and z are zero, use the degenerate local frame, which is a special case
                XzCartesian3.unpack(degeneratePositionLocalFrame[firstAxis], 0, scratchFirstCartesian);
                XzCartesian3.unpack(degeneratePositionLocalFrame[secondAxis], 0, scratchSecondCartesian);
                XzCartesian3.unpack(degeneratePositionLocalFrame[thirdAxis], 0, scratchThirdCartesian);
            } else if (CesiumMath.equalsEpsilon(origin.x, 0.0, CesiumMath.EPSILON14) && CesiumMath.equalsEpsilon(origin.y, 0.0, CesiumMath.EPSILON14)) {
                // If x and y are zero, assume origin is at a pole, which is a special case.
                var sign = CesiumMath.sign(origin.z);

                XzCartesian3.unpack(degeneratePositionLocalFrame[firstAxis], 0, scratchFirstCartesian);
                if (firstAxis !== 'east' && firstAxis !== 'west') {
                    XzCartesian3.multiplyByScalar(scratchFirstCartesian, sign, scratchFirstCartesian);
                }

                XzCartesian3.unpack(degeneratePositionLocalFrame[secondAxis], 0, scratchSecondCartesian);
                if (secondAxis !== 'east' && secondAxis !== 'west') {
                    XzCartesian3.multiplyByScalar(scratchSecondCartesian, sign, scratchSecondCartesian);
                }

                XzCartesian3.unpack(degeneratePositionLocalFrame[thirdAxis], 0, scratchThirdCartesian);
                if (thirdAxis !== 'east' && thirdAxis !== 'west') {
                    XzCartesian3.multiplyByScalar(scratchThirdCartesian, sign, scratchThirdCartesian);
                }
            } else {
                ellipsoid = defaultValue(ellipsoid, Ellipsoid.WGS84);
                ellipsoid.geodeticSurfaceNormal(origin, scratchCalculateCartesian.up);

                var up = scratchCalculateCartesian.up;
                var east = scratchCalculateCartesian.east;
                east.x = -origin.y;
                east.y = origin.x;
                east.z = 0.0;
                XzCartesian3.normalize(east, scratchCalculateCartesian.east);
                XzCartesian3.cross(up, east, scratchCalculateCartesian.north);

                XzCartesian3.multiplyByScalar(scratchCalculateCartesian.up, -1, scratchCalculateCartesian.down);
                XzCartesian3.multiplyByScalar(scratchCalculateCartesian.east, -1, scratchCalculateCartesian.west);
                XzCartesian3.multiplyByScalar(scratchCalculateCartesian.north, -1, scratchCalculateCartesian.south);

                scratchFirstCartesian = scratchCalculateCartesian[firstAxis];
                scratchSecondCartesian = scratchCalculateCartesian[secondAxis];
                scratchThirdCartesian = scratchCalculateCartesian[thirdAxis];
            }
            result[0] = scratchFirstCartesian.x;
            result[1] = scratchFirstCartesian.y;
            result[2] = scratchFirstCartesian.z;
            result[3] = 0.0;
            result[4] = scratchSecondCartesian.x;
            result[5] = scratchSecondCartesian.y;
            result[6] = scratchSecondCartesian.z;
            result[7] = 0.0;
            result[8] = scratchThirdCartesian.x;
            result[9] = scratchThirdCartesian.y;
            result[10] = scratchThirdCartesian.z;
            result[11] = 0.0;
            result[12] = origin.x;
            result[13] = origin.y;
            result[14] = origin.z;
            result[15] = 1.0;
            return result;
        };
        localFrameToFixedFrameCache[hashAxis] = resultat;
    }
    return resultat;
};

XzTransforms.eastSouthUpToFixedFrame = XzTransforms.localFrameToFixedFrameGenerator('east','south');

export default XzTransforms;