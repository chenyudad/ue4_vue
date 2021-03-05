import LocalAndWorldTransform from "./TransMatrix.js";
import  {
        Vector2,
        Vector3
    }
    from "../sdk/ueObj";

let WGSConvert = {

        WGS84ToVector3: function (lon, lat, height) {
                //初始化转换类
                var law = new LocalAndWorldTransform();
                //经纬度输入
                let temp = new Vector2(lon, lat);
                //经纬度转本地坐标  
                let out = law.WGS84CoordinatesTolocal(temp.x, temp.y);
                let axis = new Vector3(out.x, out.y, height); 
                return axis;
        },


        WGS84ToVector3ForM: function (lon, lat, height) {
                //初始化转换类
                var law = new LocalAndWorldTransform();
                //经纬度输入
                let temp = new Vector2(lon, lat);
                //经纬度转本地坐标  
                let out = law.WGS84CoordinatesTolocalMetre(temp.x, temp.y);
                let axis = new Vector3(out.x, out.y, height); 
                return axis;
        }
}
export default WGSConvert;