import WGSConvert from "./TransformAxis/WGSConvert.js";
import axios from 'axios';
let ue4se = {
    // CreateLabel
    LoadLabelByJSON: function (JSONPath) {
        let objMap = new Map();
        // eslint-disable-next-line no-undef
        let ue4api = new ue4api_xz('uePage');
        let vector3Tmp = null;
        let _id = null;
        // eslint-disable-next-line no-undef
        axios.get(JSONPath, {}).then(function (response) {
            // console.info(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
            if (response.statusText == "OK") {
                let _pois = response.data.pois;
                _pois.forEach(function (element, index) {
                    // console.info(element.address);
                    // console.info(element.phone);
                    // console.info(element.name);
                    // console.info(element.lonlat ); ///"lonlat": "120.457968,41.58348"
                    // console.info(element.lonlat.split(',')[0] + "        " + element.lonlat.split(',')[1]);

                    _id = new Date().getTime() + index;
                    vector3Tmp = WGSConvert.WGS84ToVector3(element.lonlat.split(',')[0], element.lonlat.split(',')[1], 16000);
                    let param = {
                        id: _id, //唯一标识，不可重复, 
                        ue4x: vector3Tmp.x, //x轴ue4坐标
                        ue4y: vector3Tmp.y, //y轴ue4坐标
                        ue4z: vector3Tmp.z, //z轴ue4坐标   
                        // location: WGSConvert.WGS84ToVector3(element.lonlat.split(',')[0], element.lonlat.split(',')[1], 300),

                        // eslint-disable-next-line no-undef
                        size: new Vector2(380, 180), //label的大小
                        text: element.name, //显示的文字
                        scale: 1, //缩放
                        type: 'Default', //可选字符串参数：Default,Type1,Type2
                        // eslint-disable-next-line no-undef
                        backgroundColor: new Color(0.266356, 0.467784, 0.021219, 1), //文字框背景色
                        // eslint-disable-next-line no-undef
                        fillColor: DefaultColor.yellow, //文字颜色
                        // eslint-disable-next-line no-undef
                        distanceDisplayCondition: new Vector2(), //预留字段
                        visibility: true //默认是否显示
                    }
                    console.table(param.location);
                    let obj = ue4api.ObjectFactory.CreateLabel(param);
                    objMap.set(_id, obj);
                });
                return objMap;
            }
        }).catch(function (error) {
            alert(error);
        });
    },
    ///Billboard图层接口
    LoadImagesByJSON: function (JSONPath, imageSrc) {

        // eslint-disable-next-line no-undef
        let ue4api = new ue4api_xz('uePage');
        let objMap = new Map();
        let vector3Tmp = null;
        let _id = null;
        // eslint-disable-next-line no-undef
        axios.get(JSONPath, {}).then(function (response) {
            // console.info(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
            if (response.statusText == "OK") {
                var _pois = response.data.pois;
                _pois.forEach(function (element, index) {
                    console.info(element.address);
                    console.info(element.phone);
                    console.info(element.name);
                    console.info(element.lonlat.split(',')); ///"lonlat": "120.457968,41.58348"
                    _id = new Date().getTime() + index;
                    vector3Tmp = WGSConvert.WGS84ToVector3(element.lonlat.split(',')[0], element.lonlat.split(',')[1], 200);
                    console.table(vector3Tmp);
                    console.info(_id);
                    let param = {
                        id: _id, //唯一标识，不可重复, 
                        ue4x: vector3Tmp.x, //x轴ue4坐标
                        ue4y: vector3Tmp.y, //y轴ue4坐标
                        ue4z: vector3Tmp.z, //z轴ue4坐标    
                        image: imageSrc, //图片地址
                        scale: 0.2, //缩放
                        clickedScale: 0.7,
                        visibility: true, //默认是否显示
                        alertWindow: { //可选，点击弹窗 
                            url: "http://192.168.1.106:5500/item2.html?_id=" + element.name, //弹窗地址
                            // eslint-disable-next-line no-undef
                            size: new Vector2(580, 190), //弹窗大小
                            // eslint-disable-next-line no-undef
                            offset: new Vector2(50, -100) //弹窗位置，右：x正，下：y正
                        }
                    }
                    let obj = ue4api.ObjectFactory.CreateBillboard(param);
                    objMap.set(_id, obj);
                });
                return objMap;
            }
        }).catch(function (error) {
            alert(error);
        });
    },
    ///Billboard图层接口
    LoadPOIByJSON: function (JSONPath, imageSrc) {

        // eslint-disable-next-line no-undef
        let ue4api = new ue4api_xz('uePage');
        let objMap = new Map();
        let vector3Tmp = null;
        let _id = null;
        // eslint-disable-next-line no-undef
        axios.get(JSONPath, {}).then(function (response) {
            // console.info(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
            if (response.statusText == "OK") { 
                var _pois = response.data.RECORDS;
                _pois.forEach(function (element, index) {
                    console.info(element.名称);
                    console.info(element.问题总数);
                    console.info(element.解决办理率);
                    console.info(element.答复满意得分);
                    console.info(element.解决满意得分);
                    console.info(element.x);
                    console.info(element.y);

                    _id = new Date().getTime() + index;
                    vector3Tmp = WGSConvert.WGS84ToVector3ForM(element.x, element.y, 10);
                    console.table(vector3Tmp);
                    let param = {
                        id: _id, //唯一标识，不可重复, 
                        ue4x: vector3Tmp.x, //x轴ue4坐标
                        ue4y: vector3Tmp.y, //y轴ue4坐标
                        ue4z: vector3Tmp.z, //z轴ue4坐标    
                        image: imageSrc, //图片地址
                        scale: 0.5, //缩放
                        clickedScale: 0.7,
                        visibility: true ///, //默认是否显示
                        // alertWindow: { //可选，点击弹窗 
                        //     url: "http://192.168.1.106:5500/item2.html?_id=" + element.name, //弹窗地址
                        //     size: new Vector2(580, 190), //弹窗大小
                        //     offset: new Vector2(50, -100) //弹窗位置，右：x正，下：y正
                        // }
                    }
                    let obj = ue4api.ObjectFactory.CreateBillboard(param);
                    objMap.set(_id, obj);
                });
                return objMap;
            }
        }).catch(function (error) {
            alert(error);
        });
    }
}
export default ue4se;