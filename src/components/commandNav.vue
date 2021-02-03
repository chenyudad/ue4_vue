 <template>
  <div id="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title"> 镜头操控 </template>
        <el-menu-item index="1-1">获取当前镜头信息</el-menu-item>
        <el-menu-item index="1-2">定点巡查</el-menu-item>
        <el-menu-item index="1-3">镜头切换</el-menu-item>
        <el-menu-item index="1-4">镜头围绕观察</el-menu-item>
        <el-menu-item index="1-5">镜头点位聚焦</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"> 特殊效果 </template>
        <el-menu-item index="2-1">天气特效 </el-menu-item>
        <el-menu-item index="2-2">时间特效</el-menu-item>
        <el-menu-item index="2-3">水晶体特效</el-menu-item>
        <el-menu-item index="2-4">热力图特效</el-menu-item>
        <!-- <el-menu-item index="2-5">网格化特效</el-menu-item>
                <el-menu-item index="2-6">场景音效</el-menu-item>
                <el-menu-item index="2-7">调整分辨率</el-menu-item>
                <el-menu-item index="2-8">双倍渲染</el-menu-item>
                <el-menu-item index="2-9">自定义区域</el-menu-item>
                <el-menu-item index="2-10">清除所有覆盖物</el-menu-item> -->
        <!-- <el-menu-item index="2-12">创建特效点</el-menu-item> -->
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"> POI点操控 </template>
        <el-menu-item index="3-1">添加文字json批量 </el-menu-item>
        <el-menu-item index="3-2">添加POI点json批量</el-menu-item>
        <el-menu-item index="3-3">点聚合</el-menu-item>
        <el-menu-item index="3-4">滨海poi点测试</el-menu-item>
        <!-- <el-menu-item index="3-3">添加巡查路径</el-menu-item> -->
      </el-submenu>

      <el-submenu index="4">
        <template slot="title"> 线路操控 </template>
        <el-menu-item index="4-1">绘制路径 </el-menu-item>
        <!-- <el-menu-item index="4-2">轨迹回放（此功能暂不开放）</el-menu-item> -->
      </el-submenu>

      <el-submenu index="5">
        <template slot="title"> 量测功能 </template>
        <el-menu-item index="5-1">高度量测</el-menu-item>
        <el-menu-item index="5-2">折线距离量测</el-menu-item>
        <el-menu-item index="5-3">平面面积量测</el-menu-item>
        <el-menu-item index="5-4">获取坐标</el-menu-item>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title"> 组件控件 </template>
        <el-menu-item index="6-1">柱状统计</el-menu-item>
        <el-menu-item index="6-2">创建迁徙图</el-menu-item>
        <!-- <el-menu-item index="6-3">创建光圈</el-menu-item> -->
        <!-- <el-menu-item index="6-4">创建围栏效果</el-menu-item> -->
      </el-submenu>

      <el-submenu index="7">
        <template slot="title"> 新增测试 </template>
        <el-menu-item index="7-1">添加路径</el-menu-item>
        <el-menu-item index="7-2">设置时间</el-menu-item>
        <el-menu-item index="7-3">设置天气</el-menu-item>
        <el-menu-item index="7-4">热力图</el-menu-item>
        <el-menu-item index="7-5">热力图更新</el-menu-item>
        <el-menu-item index="7-6">创建迁徙图</el-menu-item>
        <el-menu-item index="7-7">绘制围栏效果</el-menu-item>
        <el-menu-item index="7-8">场景特效点</el-menu-item>
        <el-menu-item index="7-9">时间初始化</el-menu-item>
        <el-menu-item index="7-10">天气初始化</el-menu-item>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title"> 场景切换 </template>
        <el-menu-item index="8-1">实景区域镜头</el-menu-item>
        <el-menu-item index="8-2">全国行政区域镜头</el-menu-item>
        <el-menu-item index="8-3">经济圈区域镜头</el-menu-item>
        <el-menu-item index="8-4">朝阳行政区划区域镜头</el-menu-item>
        <el-menu-item index="8-5">规划数据区域镜头</el-menu-item>
      </el-submenu>

      <el-submenu index="9">
        <template slot="title"> 场景切换 </template>
        <el-menu-item index="9-1">夜景</el-menu-item>
        <el-menu-item index="9-2">雨雪</el-menu-item>
        <el-menu-item index="9-3">行政区</el-menu-item>
        <el-menu-item index="9-4">大局部</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template> 
<script>
import Config from "../Config.js";
import WGSConvert from "../core/TransformAxis/WGSConvert.js";
import ue4se from "../core/ue4se.js";
//特效是否显示
var _isshow = false;
//特效对象
let effectObj = null;
let clickIndex = 0;
export default {
  name: "CommandNav",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleSelect(key, keyPath) {
      //初始化UE4api类
      // eslint-disable-next-line no-undef
      var ue4api = new ue4api_xz("uePage");
      // console.log(key, keyPath);

      // var vector3 = WGSConvert.WGS84ToVector3(120.481194, 41.595756, 300);
      // //控制台打印结果
      // console.table(vector3);
      switch (key) {
        case "1-1": {
          //获取当前镜头信息
          console.table(ue4api.camera);
          break;
        }
        case "1-2": {
          //定点巡查
          let target = {
            destination: WGSConvert.WGS84ToVector3ForM(
              120.481194,
              41.595756,
              300
            ),
            //  destination: WGSConvert.WGS84ToVector3ForM(
            //   1000,
            //   1000,
            //   300
            // ),
            // eslint-disable-next-line no-undef
            orientation: new Rotator(0, -70, 50),
          };
          ue4api.camera.FlyTo(
            target.destination.x,
            target.destination.y,
            target.destination.z,
            target.orientation.roll,
            target.orientation.pitch,
            target.orientation.yaw,
            // eslint-disable-next-line no-unused-vars
            function (e) {},
            7
          );
          break;
        }
        case "1-3": {
          //镜头切换
          //   let options = {
          //        destination: WGSConvert.WGS84ToVector3ForM(120.480743, 41.597932, 300),
          //       orientation: new Rotator(0, -70, 50)
          //  }
          //   ue4api.camera.setView(options);

          //设置相机位置
          //镜头一
          if (clickIndex == 0) {
            let param = {
              // eslint-disable-next-line no-undef
              destination: new Vector3(0, 0, -15000),
              // eslint-disable-next-line no-undef
              orientation: new Rotator(0, -90, 0),
            };
            //镜头切换
            clickIndex++;
            ue4api.camera.setView(param);
          }
          //镜头二
          else if (clickIndex == 1) {
            let param = {
              // eslint-disable-next-line no-undef
              destination: new Vector3(0, 0, -2500),
              // eslint-disable-next-line no-undef
              orientation: new Rotator(0, -90, 0),
            };
            //镜头切换
            clickIndex++;
            ue4api.camera.setView(param);
          }

          //镜头三
          else if (clickIndex == 2) {
            let param = {
              // eslint-disable-next-line no-undef
              destination: new Vector3(0, 0, -1500),
              // eslint-disable-next-line no-undef
              orientation: new Rotator(0, -90, 0),
            };
            //镜头切换
            clickIndex++;
            ue4api.camera.setView(param);
          } else {
            let param = {
              // eslint-disable-next-line no-undef
              destination: new Vector3(0, 0, 300),
              // eslint-disable-next-line no-undef
              orientation: new Rotator(0, -90, 0),
            };
            //镜头切换
            clickIndex = 0;
            ue4api.camera.setView(param);
          }

          break;
        }
        case "1-4": {
          // 镜头围绕观察
          //旋转时间 单位秒
          //旋转角度，顺时针为正，逆时针为负 如 -30或30
          // 	旋转结束时回调，可传入空字符，可传入函数
          ue4api.camera.rotate(5, 30, function (data) {
            console.table(data);
          });
          break;
        }
        case "1-5": {
          //镜头点位聚焦
          // _location 	要聚焦点位的坐标，即屏幕中心点的地面坐标
          // _rotation    镜头的角度，以屏幕中心点的地面为中心
          // _distance   	镜头到屏幕中心点地面的距离
          // _callBack 	飞行结束时回调，可传入空字符，可传入函数
          // _time   	    飞行时间，默认2，单位秒
          let target = {
            destination: WGSConvert.WGS84ToVector3ForM(
              120.481194,
              41.595756,
              300
            ),
            // eslint-disable-next-line no-undef
            orientation: new Rotator(0, -70, 50),
          };
          ue4api.camera.focusOn(
            target.destination,
            target.orientation,
            1650,
            function (e) {},
            2
          );
          break;
        }
        case "2-1": {
          // 天气特效
          // param 	string 	是 	‘sun’：晴天
          // ‘rain’：雨天
          // ‘snow’：雪天
          if (!_isshow) {
            ue4api.environment.ShowEffect("snow");
          } else {
            // 移除特效
            ue4api.environment.DisableEffect("snow");
          }
          _isshow = !_isshow;
          break;
        }
        case "2-2": {
          // 时间特效
          // 参数名 	类型 	必填 	说明
          // param 	string 	是 	‘morning’：早晨
          // ‘noon’：中午
          // ‘evening’：傍晚
          // ‘night’：夜晚
          // ‘darkWorld’：暗色场景
          if (!_isshow) {
            ue4api.environment.ShowEffect("night");
          } else {
            // 移除特效
            ue4api.environment.DisableEffect("night");
          }
          _isshow = !_isshow;
          break;
        }
        case "2-3": {
          // 水晶体特效

          // param 	string 	是 	‘crystal’：水晶体
          if (!_isshow) {
            ue4api.environment.ShowEffect("crystal");
          } else {
            // 移除特效
            ue4api.environment.DisableEffect("crystal");
          }
          _isshow = !_isshow;
          break;
        }
        case "2-4": {
          // 热力图特效

          // effectObj.show(true);
          // effectObj.show(false);
          if (!_isshow) {
            //范围
            // eslint-disable-next-line no-undef
            let _bboxBounds = new bounds(-2300000, 2300000, 2300000, -2300000);
            // eslint-disable-next-line no-undef
            let _bbox = new bounds(-800000, 800000, 800000, -800000);
            //点半径
            let tempRadius = 50000;
            //随机生成数据点
            let dataRaw = [];
            for (let i = 0; i < 200; i++) {
              let point = {
                x: _bbox.west + Math.random() * (_bbox.east - _bbox.west),
                y: _bbox.north + Math.random() * (_bbox.south - _bbox.north),
                value: 1,
                radius: tempRadius,
              };
              dataRaw.push(point);
            }
            let param = {
              id: new Date().getTime().toString(),
              class: "mode3D", //"normal": 普通热力图，"mode3D":3D热力图， "pointCloud":点云热力图
              bbox: _bboxBounds, //热力图覆盖区域边界，ue4坐标，（西，东，南，北）
              height: 1000, //热力图整体高度
              data: dataRaw,
            };
            effectObj = ue4api.ObjectFactory.createHeatmap(param);
          } else {
            //移除热力图
            effectObj.removeFromMap();
          }
          _isshow = !_isshow;
          break;
        }
        // case "2-5": {
        //     // 网格特效
        //     if (!_isshow) {

        //         let dataRaw = [];
        //         for (let i = 0; i < 5 * 6; i++) {
        //             let point = {
        //                 index: i, //网格下标，
        //                 row1: '网格标题：网格数据', //第一行内容
        //                 row2: '占地面积：5km²', //第二行内容
        //                 row3: '总人数：200人', //第三行内容
        //                 row4: '在线人数：180人' //第四行内容
        //             }
        //             dataRaw.push(point);
        //         }
        //         let param = {
        //             id: new Date().getTime(), //唯一标识，不可重复
        //             bbox: new bounds(-250000, 250000, 250000, -250000), //边界范围
        //             columnNumber: 5, //纵向列(东西方向分割)
        //             rowNumber: 6, //横向行(南北方向分割)
        //             data: dataRaw
        //         }
        //         effectObj = ue4api.ObjectFactory.CreateGrid(param);
        //     } else {
        //         //移除网格
        //         effectObj.removeFromMap();

        //     }
        //     _isshow = !_isshow;
        //     break;
        // }
        // case "2-6": {

        //     // 场景音效
        //     ue4api.factory.setAudioFile("background.mp3");
        //     ue4api.factory.setAudioSwitch(true);
        //     break;
        // }
        // case "2-7": {
        //     // 调整分辨率
        //     ue4api.factory.setRes(920, 580);
        //     break;
        // }
        // case "2-8": {
        //     // 双倍渲染
        //     // 是 	是否开启双倍渲染
        //     ue4api.factory.DoubleRendering(true);
        //     break;
        // }
        // case "2-9": {
        //     // 自定义区域
        //     let param = {
        //         id: new Date().getTime(),
        //         data: [new Vector3(0, 0, 0),
        //             new Vector3(10000, 0, 0),
        //             new Vector3(10000, 10000, 0),
        //             new Vector3(0, 10000, 0)
        //         ]
        //     }
        //     let obj = ue4api.ObjectFactory.CreateAreaData(param);
        //     break;
        // }
        // case "2-10": {
        //     // 清除所有覆盖物
        //     ue4api.factory.CallEvent('ClearCovering');
        //     break;
        // }
        // case "2-11": {
        //     // 点聚合
        //     let param = {
        //         id: new Date().getTime()
        //     }
        //     var cluster = ue4api.ObjectFactory.createFeatureLayer(param);
        //     break;
        // }
        // case "2-12": {
        //     // 创建特效点
        //     let param = {
        //         id: new Date().getTime(),
        //         location: WGSConvert.WGS84ToVector3ForM(120.481194, 41.595756, 300)
        //     }
        //     let obj = ue4api.ObjectFactory.CreateEffectPoint(param);
        //     //镜头切换
        //     ue4api.camera.setView({
        //         destination: param.location,
        //         orientation: new Rotator(0, -15, -46)
        //     });
        //     break;
        // }
        case "3-1": {
          // 添加文字

          // var jsonPath = Config.getPath() + "/data/poi点数据-民计民生/学校/小学.json";
          // var jsonPath = Config.getPath() + "/data/poi点数据-民计民生/学校/小学.json";
          // var jsonPath = Config.getPath() + "/data/poi点数据-民计民生/学校/高等院校.json";
          var jsonPath =
            Config.BASE_URL() +
            "/data/poi点数据-民计民生/学校/职业技术学校.json";
          console.log(jsonPath);
          // eslint-disable-next-line no-unused-vars
          var objMap = ue4se.LoadLabelByJSON(jsonPath);

          break;
        }
        case "3-2": {
          // 添加POI点
          // var jsonPath = "http://192.168.1.106:5500/data/poi点数据-民计民生/学校/小学.json";
          //  var imageSrc = Config.BASE_URL() + '/images/project/camera.png';
          var imageSrc =
            "https://i.52112.com/icon/jpg/256/20201203/102093/4136590.jpg";
          // eslint-disable-next-line no-redeclare
          var jsonPath =
            Config.BASE_URL() + "/data/poi点数据-民计民生/学校/小学.json";
          // var imageSrc = Config.BASE_URL() + '/images/project/camera.png';
          console.log(imageSrc);
          ue4se.LoadImagesByJSON(jsonPath, imageSrc);
          break;
        }

        case "3-3": {
          // 点聚合
          let param = {
            exclude: [1, 2], //可以设置某些点不参与聚合
          };
          var cluster = ue4api.ObjectFactory.createFeatureLayer(param);
          break;
        }
        case "3-4": {
          // 滨海poi点测试
          var jsonPath =
            Config.BASE_URL() + "/data/poi点数据-民计民生/滨海/poi.json";
          var imageSrc = Config.BASE_URL() + "/images/project/camera.png";
          console.log(imageSrc);
          ue4se.LoadPOIByJSON(jsonPath, imageSrc);
          break;
        }
        // case "3-3": {
        //     // 添加巡查路径
        //     let data = [
        //         WGSConvert.WGS84ToVector3ForM(120.476997, 41.595280, 100),
        //         WGSConvert.WGS84ToVector3ForM(120.478529, 41.596356, 100),
        //         WGSConvert.WGS84ToVector3ForM(120.481194, 41.595756, 100),
        //         WGSConvert.WGS84ToVector3ForM(120.483364, 41.597203, 100)
        //     ];
        //     let param = {
        //         id: new Date().getTime(), //唯一标识，不可重复,
        //         points: data //路径点
        //     }
        //     var patrolLineObj = ue4api.factory.CreatePatrolLine(param);
        //     // 开始/继续巡查

        //     patrolLineObj.beginPatrol(obj);
        //     break;
        // }
        case "4-1": {
          // 绘制路径
          let param = {
            id: new Date().getTime(), //唯一标识，不可重复
            showLength: true, //是否显示总长度
            pathWidth: 5000, //路径宽度
            faceScreen: false, //始终面向相机
            pathColor: DefaultColor.green, //路径颜色
            data: [
              new Vector3(0, 0, 1300),
              new Vector3(5000, 0, 1300),
              new Vector3(10000, 12000, 1300),
              new Vector3(15000, 15000, 1300),
              new Vector3(0, 10000, 1100),
              // WGSConvert.WGS84ToVector3ForM(120.476997, 41.595280, 16500),
              // WGSConvert.WGS84ToVector3ForM(120.478529, 41.596356, 16500),
              // WGSConvert.WGS84ToVector3ForM(120.481194, 41.595756, 16500),
              // WGSConvert.WGS84ToVector3ForM(120.483364, 41.597203, 16500),
              // WGSConvert.WGS84ToVector3ForM(120.483364, 41.587203, 16500)
            ],
          };
          var obj = ue4api.ObjectFactory.CreatePolyline(param);
          break;
        }
        case "4-2": {
          // 轨迹回放
          // 此功能暂不开放
          break;
        }
        case "5-1": {
          // 高度量测
          var temp = ue4api.analysis.getMeasureHeight(function (e) {
            //回调
            alert(JSON.stringify(e));
          });
          break;
        }
        case "5-2": {
          // 折线距离量测
          var temp = ue4api.analysis.getDistanceHorizontal(function (e) {
            //回调
            alert(JSON.stringify(e));
          });
          break;
        }
        case "5-3": {
          // 平面面积量测
          var temp = ue4api.analysis.getPlaneArea(function (e) {
            //回调
            alert(JSON.stringify(e));
          });
          break;
        }
        case "5-4": {
          // 获取坐标
          ue4api.measure.PickPosition(function (e) {
            alert(JSON.stringify(e));
            //e. objectName:模型内部编号
            //e. location:点击点位的ue4坐标
          });
          break;
        }
        case "6-1": {
          // 柱状统计

          //建筑名称
          let names = ["2_SM_0054", "4_SM_136"];
          //循环添加柱
          for (let i = 0; i < names.length; i++) {
            let param = {
              id: new Date().getTime() + i,
              value: Math.random() * 500 + 50,
              // buildingName: names[i],
              location: new Vector3(0, 0, 1000), //此参数跟buildingName二选一，指定柱状位置
              uintValue: 100,
              //uintHeight: 1000, //单位高度，默认1000
              //radius: 500, //柱子半径，默认500
              //fontSize: 24, //显示数字大小，默认24
              divideValue: [150, 450], //长度可变
              divideColor: [
                new Color(0.266356, 0.467784, 0.021219, 1),
                new Color(0.8125, 0.450415, 0, 1),
                new Color(0.817708, 0.017036, 0.017036, 1),
              ],
              //长度比divideValue多一个
            };
            ue4api.View.CreateStatisticCylinder(param);
          }
          //
          // ue4api.camera.FlyTo(-154, -260, 185, 0, -20.8, 29.5, '');
          break;
        }
        case "6-2": {
          // 创建迁徙图
          let param = {
            id: new Date().getTime(), //唯一标识,不要重复
            startLocation: new Vector3(0, 0, 1600), /// WGSConvert.WGS84ToVector3(121.476997, 41.595280, 16500), //起始坐标
            endLocation: new Vector3(100000, 100000, 1600), /// WGSConvert.WGS84ToVector3(120.478529, 40.1, 16500), //结束点坐标
            lineWidth: 40, //线宽度，默认10
            type: 0, //类型：0箭头，1三角形
            lineColor: DefaultColor.red, //线颜色，默认白
          };
          let obj = ue4api.ObjectFactory.CreateMigrationMap(param);
          break;
        }
        case "6-3": {
          // 创建光圈
          let param = {
            id: new Date().getTime(), //唯一标识,不要重复
            location: new Vector3(0, 0, 20000), //中心点
            radius: 200, //半径，默认100
          };
          let obj = ue4api.ObjectFactory.CreateCircleArea(param);
          // //镜头切换
          // ue4api.camera.setView({
          //     destination: WGSConvert.WGS84ToVector3(120.476997, 41.595280, 0),
          //     orientation: new Rotator(0, -70, 50)
          // });
          break;
        }
        // case "6-4": {
        //     // 创建围栏效果
        //     let param = {
        //         id: new Date().getTime(), //唯一标识，不可重复
        //         height: 10000,
        //         color: new Color(),
        //         data: [
        //             WGSConvert.WGS84ToVector3ForM(120.476997, 41.595280, 16300),
        //             WGSConvert.WGS84ToVector3ForM(120.478529, 41.596356, 16300),
        //             WGSConvert.WGS84ToVector3ForM(120.481194, 41.595756, 16300),
        //             WGSConvert.WGS84ToVector3ForM(121.483364, 40.597203, 16300)
        //         ] //路径点位数组，ue4坐标
        //     }
        //     var obj = ue4api.ObjectFactory.CreateAreaBoundary(param);
        //     //镜头切换
        //     ue4api.camera.setView({
        //         destination: WGSConvert.WGS84ToVector3ForM(120.476997, 41.595280, 16500),
        //         orientation: new Rotator(0, -70, 50)
        //     });
        //     break;
        // }
        case "7-1": {
          //添加路径
          let param = {
            id: new Date().getTime(), //唯一标识，不可重复
            showLength: true, //是否显示总长度
            pathWidth: 5000, //路径宽度
            faceScreen: false, //始终面向相机
            pathColor: DefaultColor.green, //路径颜色
            type: 0, // 线类型，0光线、1三角形，2箭头，默认0
            brightness: 8, //亮度
            data: [
              WGSConvert.WGS84ToVector3ForM(120.476997, 41.59528, 100),
              WGSConvert.WGS84ToVector3ForM(120.478529, 41.596356, 100),
              WGSConvert.WGS84ToVector3ForM(120.481194, 41.595756, 100),
              WGSConvert.WGS84ToVector3ForM(120.483364, 41.597203, 100),
              WGSConvert.WGS84ToVector3ForM(120.483364, 41.587203, 100),
            ],
          };
          var obj = ue4api.ObjectFactory.CreatePolyline(param);
          break;
        }
        case "7-2": {
          //设置时间
          let param = {
            time: 20, // float(12:30 12.5),morning,noon, evening,night,0-24
            smoothOver: true, //平滑过渡
          };
          ue4api.environment.setTime(param);
          break;
        }
        case "7-3": {
          //设置天气
          let param = {
            weather: 1, //0：sun、1：rain、2：snow三种
            smoothOver: true, //平滑过渡
          };
          ue4api.environment.setTime(param);
          break;
        }
        case "7-4": {
          //热力图
          // effectObj.show(true);
          // effectObj.show(false);
          if (!_isshow) {
            //范围
            let _bboxBounds = new bounds(-2300000, 2300000, 2300000, -2300000);
            let _bbox = new bounds(-800000, 800000, 800000, -800000);
            //点半径
            let tempRadius = 50000;
            //随机生成数据点
            let dataRaw = [];
            for (let i = 0; i < 200; i++) {
              let point = {
                x: _bbox.west + Math.random() * (_bbox.east - _bbox.west),
                y: _bbox.north + Math.random() * (_bbox.south - _bbox.north),
                value: 1,
                radius: tempRadius,
              };
              dataRaw.push(point);
            }
            let param = {
              id: new Date().getTime().toString(),
              class: "mode3D", //"normal": 普通热力图，"mode3D":3D热力图， "pointCloud":点云热力图
              type: 0, // 默认0，0渐变颜色，1阶梯颜色，2色块矩阵
              bbox: _bboxBounds, //热力图覆盖区域边界，ue4坐标，（西，东，南，北）
              height: 1000, //热力图整体高度
              data: dataRaw,
            };
            effectObj = ue4api.ObjectFactory.createHeatmap(param);
          } else {
            //移除热力图
            effectObj.removeFromMap();
          }
          _isshow = !_isshow;
          break;
        }
        case "7-5": {
          //热力图更新
          //范围
          let _bboxBounds = new bounds(-2300000, 2300000, 2300000, -2300000);
          let _bbox = new bounds(-800000, 800000, 800000, -800000);
          //点半径
          let tempRadius = 50000;
          //随机生成数据点
          let dataRaw = [];
          for (let i = 0; i < 200; i++) {
            let point = {
              x: _bbox.west + Math.random() * (_bbox.east - _bbox.west),
              y: _bbox.north + Math.random() * (_bbox.south - _bbox.north),
              value: 1,
              radius: tempRadius,
            };
            dataRaw.push(point);
          }
          let param = {
            id: new Date().getTime().toString(),
            class: "pointCloud", //"normal": 普通热力图，"mode3D":3D热力图， "pointCloud":点云热力图
            type: 0, // 默认0，0渐变颜色，1阶梯颜色，2色块矩阵
            bbox: _bboxBounds, //热力图覆盖区域边界，ue4坐标，（西，东，南，北）
            height: 1000, //热力图整体高度
            data: dataRaw,
          };
          effectObj.update(param);
          break;
        }
        case "7-6": {
          //创建迁徙图
          let param = {
            id: new Date().getTime(), //唯一标识,不要重复
            startLocation: WGSConvert.WGS84ToVector3ForM(
              121.476997,
              41.59528,
              600
            ), //起始坐标
            endLocation: WGSConvert.WGS84ToVector3ForM(
              120.478529,
              40.596356,
              600
            ), //结束点坐标
            lineWidth: 40, //线宽度，默认10
            type: 0, // 类型：0光线，1箭头，2三角形。默认0
            lineColor: DefaultColor.red, //线颜色，默认白
            heightScale: 5, //弧点高度倍数
            brightness: 8, //亮度
          };
          let obj = ue4api.ObjectFactory.CreateMigrationMap(param);
          break;
        }
        case "7-7": {
          //绘制围栏效果
          let param = {
            id: new Date().getTime(), //唯一标识，不可重复
            height: 10000,
            color: new Color(),
            brightness: 8, //亮度，默认10，1是原色
            type: 0, //类型，0上浮横格，1实色，2箭头，3三角
            data: [
              WGSConvert.WGS84ToVector3ForM(120.476997, 41.59528, 300),
              WGSConvert.WGS84ToVector3ForM(120.478529, 41.596356, 300),
              WGSConvert.WGS84ToVector3ForM(120.481194, 41.595756, 300),
              WGSConvert.WGS84ToVector3ForM(120.483364, 41.597203, 300),
            ], //路径点位数组，ue4坐标
          };
          var obj = ue4api.ObjectFactory.createAreaBoundary(param);
          break;
        }
        case "7-8": {
          //场景特效点
          let param = {
            id: new Date().getTime(), //唯一标识，不可重复
            coord_type: 1, //坐标类型
            upperEffect: 0, //上边效果类型,默认0，0：光柱
            upperSize: 1000, //上边效果尺寸，默认1000
            upperColor: new Color(), //上边效果颜色，默认（1，1，1，1）
            upperBrightness: 8, //上边亮度，默认10
            lowerEffect: 1, //下边效果类型,默认0，0扩散圆形，1扩散渐变圆环
            lowerSize: 1000, //下边效果尺寸，默认1000
            lowerColor: new Color(0.266356, 0.467784, 0.021219, 1), //下边效果颜色，默认（1，1，1，1）
            lowerBrightness: 8, //下边亮度，默认10
            position: WGSConvert.WGS84ToVector3ForM(120.476997, 41.59528, 300), //位置 Cartographic，或者Vector3
          };
          var obj = ue4api.scene.pointEffect(param);

          break;
        }
        case "7-9": {
          //时间初始化

          ue4api.environment.SetTimeInit({});

          break;
        }
        case "7-10": {
          //天气初始化
          ue4api.environment.SetWeatherInit({});

          break;
        }

        case "8-1": {
          //实景区域镜头
          ue4api.factory.CallEvent("SetPawn", 1);
          break;
        }

        case "8-2": {
          //全国行政区域镜头
          ue4api.factory.CallEvent("SetPawn", 2);
          break;
        }
        case "8-3": {
          //经济圈区域镜头）
          ue4api.factory.CallEvent("SetPawn", 3);
          break;
        }
        case "8-4": {
          //朝阳行政区划区域镜头
          ue4api.factory.CallEvent("SetPawn", 4);
          break;
        }
        case "8-5": {
          //规划数据区域镜头
          ue4api.factory.CallEvent("SetPawn", 5);
          break;
        }
        case "9-1": {
          //夜景
          ue4api.factory.CallEvent("LevelLight_Urbang", 0);
          break;
        }

        case "9-2": {
          //雨雪
          ue4api.factory.CallEvent("Levelyuxue", 0);
          break;
        }
        case "9-3": {
          //行政区
          ue4api.factory.CallEvent("Levelxingzhengqu", 0);
          break;
        }
        case "9-4": {
          //大局部
          ue4api.factory.CallEvent("Leveldajubu", 0);
          break;
        }
        default:
          break;
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style   scoped>
#nav {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>