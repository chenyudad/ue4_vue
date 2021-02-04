import Config from "../../Config.js";
import XzCartesian3 from "./Cartesian3.js";
import XzMatrix4 from "./Matrix4.js";
import XzTransforms from "./Transforms.js";

/**
 * 相对坐标系与世界坐标系转换
 *
 * @param {Number} longitude 世界坐标系中的经度
 * @param {Number} latitude 世界坐标系中的纬度
 * @param {Number} height 世界坐标系中的高度
 */

// const engineOrigin = {x:117.038112825, y:39.382696649};


const engineOrigin = Config.engineOrigin; // {x:120.480743, y:41.597932};//朝阳
// const engineOrigin = {x:118.96911, y:28.979356};

//var LocalAndWorldTransform = function (longitude, latitude, height) {
var LocalAndWorldTransform = function () {

    //经纬度转笛卡尔
    var RCSorigincenter = XzCartesian3.fromDegrees(engineOrigin.x, engineOrigin.y, 0);
    //坐标轴转换 X， Y
    this.RCSMatrix = XzTransforms.eastSouthUpToFixedFrame(RCSorigincenter);
    //反向转换矩阵
    this.RCSmatrixInverse = XzMatrix4.inverseTransformation(this.RCSMatrix, new XzMatrix4());

    /**
     * 相对坐标转换成对应的世界坐标
     *
     * @param {Object} localCoordinates 相对坐标系中的坐标，如 {x:1,y:1,z:1}
     * @param {Object} result 世界坐标系中的对应坐标，XYZ格式
     * @returns
     */

    this.localToWorldCoordinates = function (localCoordinates, result) {
        if (!result) {
            result = new XzCartesian3();
        }
        XzMatrix4.multiplyByPoint(this.RCSMatrix, localCoordinates, result);
        return result;

    };



    /**
     * 世界坐标转换成对应的相对坐标
     *
     * @param {Object} WorldCoordinates 世界坐标系中的坐标，XYZ格式
     * @param {Object} result 相对坐标系中的坐标，XYZ格式
     * @returns
     */

    this.WorldCoordinatesTolocal = function (WorldCoordinates, result) {
        if (!result) {
            result = new XzCartesian3();
        }
        XzMatrix4.multiplyByPoint(this.RCSmatrixInverse, WorldCoordinates, result);
        return result;

    };

    this.WGS84CoordinatesTolocal = function (longitude, latitude, height = 0) {
        var Temp = XzCartesian3.fromDegrees(longitude, latitude, height);
        let localPos = this.WorldCoordinatesTolocal(Temp);
        //console.info(localPos); 
        return XzCartesian3.multiplyComponents(localPos, new XzCartesian3(100, 100, 0), new XzCartesian3());
    }
    this.WGS84CoordinatesTolocalMetre = function (longitude, latitude, height = 0) {
        var Temp = XzCartesian3.fromDegrees(longitude, latitude, height);
        let localPos = this.WorldCoordinatesTolocal(Temp);

        return XzCartesian3.multiplyComponents(localPos, new XzCartesian3(1, 1, 0), new XzCartesian3());
    }; 


};

export default LocalAndWorldTransform;