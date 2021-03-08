import {
    Vector2,
    Vector3,
    Rotator,
    Color,
    DefaultColor,
    bounds,
}
from "./ueObj";
import objectXZ from "./objectXZ";
class ue4apixz {
    constructor() {
        //api 类  
        window.iframeCw = document.getElementById("uePage").contentWindow;
    };
    /*
     * 注意：传UE4的参数，单位都是厘米
     *
     */
    //镜头属性  
    _camera = {
        location: {}, //镜头坐标
        rotation: {}, //镜头角度
        distance: '', //镜头到屏幕中心点地面的距离
        FlyTo: '', //平移到定点
        setView: '', //设置镜头到定点
        rotate: '', //按屏幕中心的地面为中心，旋转
        cancelFlight: '', //取消平移
        focusOn: {} //屏幕中心聚焦到定点，需传入镜头到中心点距离
    };

    callBackTemp = ''; //回调临时变量
    callBackPick = '';
    mainPage() {
        console.info("===========<<<<<<<<场景已连接>>>>>>>>===========");
    };
    init() {
        let isfirstload = true;
        //监听事件
        window.addEventListener('message', e => {
            //镜头位置，实时更新
            if (e.data.callBack === "CameraInfo") {
                this._camera.location = e.data.camera.location;
                this._camera.rotation = e.data.camera.rotation;
                this._camera.distance = e.data.camera.distance;
                //显示到页面
                if (document.getElementById('cameraInfo') !== null) {
                    document.getElementById('cameraInfo').innerHTML = JSON.stringify(e.data.camera.location);
                }
                if (document.getElementById('pointer') !== null) {
                    document.getElementById('pointer').style.transform = "rotate(" + this._camera.rotation.yaw + "deg)";
                }
            }
            //回调函数
            if (e.data.callBack === "CallBackOneParam") {
                //鼠标拾取回调，带参
                if (e.data.customStr === 'pickWidget' && this.callBackPick !== '') {
                    this.callBackPick(e.data.info);
                } else if (this.callBackTemp !== '') {
                    //其他带参回调
                    this.callBackTemp(e.data.info);
                }
            } else if (e.data.callBack === "CallBackNoParam") {

                if (e.data.customStr === "connected" && typeof mainPage === 'function') {

                } 
                else if (e.data.customStr === "wsDisConnect" && typeof closedPage === 'function') {
                    closedPage();
                } else if (e.data.customStr === "WorldBegin" && typeof beginWorld === 'function') {
                    beginWorld();
                } else if (isfirstload && (e.data.customStr === "StartLoadLevelYes" || e.data.customStr === "Restart")) {
                    isfirstload = !isfirstload;
                    this.mainPage();
                }

            }
        });
    };

    measure = {
        PickPosition: function (_callBack) {
            let sendJson = {
                namespace: 'measure',
                type: 'PickPosition'
            };
            this.callBackPick = _callBack;
            iframeCw.postMessage(sendJson, '*');
        },
        PickObject: function (_callBack) {
            let sendJson = {
                namespace: 'measure',
                type: 'PickObject'
            };
            this.callBackPick = _callBack;
            iframeCw.postMessage(sendJson, '*');
        },
        PickComponent: function (_callBack) {
            let sendJson = {
                namespace: 'measure',
                type: 'PickComponent'
            };
            this.callBackPick = _callBack;
            iframeCw.postMessage(sendJson, '*');
        }
    };
    camera = {
        FlyTo: function (_x, _y, _z, _roll, _pitch, _yaw, _callBack, _time = 2) {

            let sendJson = {
                namespace: 'camera',
                type: 'FlyTo',
                x: _x,
                y: _y,
                z: _z,
                roll: _roll,
                pitch: _pitch,
                yaw: _yaw,
                time: _time
            };
            this.callBackTemp = _callBack;
            iframeCw.postMessage(sendJson, '*');
        },
        setView: function (_options) {
            let sendJson = {
                namespace: 'camera',
                type: 'setView',
                param: {
                    location: _options.destination,
                    rotation: _options.orientation
                }
            };
            iframeCw.postMessage(sendJson, '*');
        },
        rotate: function (_time, _degrees, _callBack) {
            let sendJson = {
                namespace: 'camera',
                type: 'rotate',
                param: {
                    time: _time,
                    degrees: _degrees
                }
            };
            this.callBackTemp = _callBack;
            iframeCw.postMessage(sendJson, '*');
        },
        cancelFlight: function () {
            let sendJson = {
                namespace: 'camera',
                type: 'cancelFlight',
                param: ''
            };
            iframeCw.postMessage(sendJson, '*');
        },
        focusOn: function (_location, _rotation, _distance, _callBack, _time = 1) {
            let sendJson = {
                namespace: 'camera',
                type: 'focusOn',
                param: {
                    location: _location,
                    rotation: _rotation,
                    distance: _distance,
                    time: _time
                }
            };
            this.callBackTemp = _callBack;
            iframeCw.postMessage(sendJson, '*');
        }
    };
    environment = {
        ShowEffect: function (_param) {
            let sendJson = "";
            //夜晚
            if (_param === 'morning' || _param === 'noon' ||
                _param === 'evening' || _param === 'night') {
                sendJson = {
                    namespace: 'environment',
                    type: 'SetTime',
                    param: _param
                };
            } else if (_param === 'rain' || _param === 'snow' ||
                _param === 'cloud' || _param === 'sun') {
                sendJson = {
                    namespace: 'environment',
                    type: 'SetWeather',
                    param: _param
                };
            } else {
                sendJson = {
                    namespace: 'environment',
                    type: 'ShowEffect',
                    effectName: _param,
                    param: true
                };
            }
            iframeCw.postMessage(sendJson, '*');
        },
        DisableEffect: function (_param) {
            //取消夜晚就是中午
            //为了把暴露接口和cesium一致
            let sendJson = "";
            if (_param === 'night' || _param === 'morning' ||
                _param === 'evening') {
                sendJson = {
                    namespace: 'environment',
                    type: 'SetTime',
                    param: 'noon'
                };
            }
            //取消雨雪天气就是晴天
            else if (_param === 'rain' || _param === 'snow' ||
                _param === 'cloud') {
                sendJson = {
                    namespace: 'environment',
                    type: 'SetWeather',
                    param: 'sun'
                };
            } else {
                sendJson = {
                    namespace: 'environment',
                    type: 'ShowEffect',
                    effectName: _param,
                    param: false
                };
            }
            iframeCw.postMessage(sendJson, '*');
        },
        SpecificTime: function (_param) {
            let sendJson = {
                namespace: 'environment',
                type: 'SpecificTime',
                param: {
                    time: _param
                }
            };
            iframeCw.postMessage(sendJson, '*');
        },
        CycleDayTime: function (_duration = 15) {
            let sendJson = {
                namespace: 'environment',
                type: 'CycleDayTime',
                param: {
                    duration: _duration
                }
            };
            iframeCw.postMessage(sendJson, '*');
        },
        setTime: function (_param) {
            let sendJson = {
                namespace: 'environment',
                type: 'SetTime',
                param: _param
            };

            iframeCw.postMessage(sendJson, '*');
        },
        setWeather: function (_param) {
            let sendJson = {
                namespace: 'environment',
                type: 'setWeather',
                param: _param
            };

            iframeCw.postMessage(sendJson, '*');
        },
        SetTimeInit: function (_param) {
            let sendJson = {
                namespace: 'environment',
                type: 'SetTimeInit',
                param: _param
            };

            iframeCw.postMessage(sendJson, '*');
        },
        SetWeatherInit: function (_param) {
            let sendJson = {
                namespace: 'environment',
                type: 'SetWeatherInit',
                param: _param
            };

            iframeCw.postMessage(sendJson, '*');
        }

    };

    scene = {
        pointEffect: function (_param) {
            let sendJson = {
                namespace: 'scene',
                type: 'pointEffect',
                param: _param
            };
            iframeCw.postMessage(sendJson, '*');
        }

    };
    ObjectFactory = {
        CreateBillboard: function (_param) {
            _param.category = 'billboard';
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateBillboard',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.category = 'billboard';
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveBillboard',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            obj.show = function (_param) {
                let sendJson;
                if (_param) {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'ShowBillboard',
                        param: obj.id
                    };
                } else {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'HideBillboard',
                        param: obj.id
                    };

                }
                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        CreateLabel: function (_param) {
            _param.category = 'label';
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateLabel',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.category = 'label';
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveLabel',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            obj.show = function (_param) {
                let sendJson;
                if (_param) {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'ShowLabel',
                        param: obj.id
                    };
                } else {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'HideLabel',
                        param: obj.id
                    };

                }
                iframeCw.postMessage(sendJson, '*');
            }
            //
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        //
        createHeatmap: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'createHeatmap',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveHeatmap',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            obj.show = function (_param) {
                let sendJson;
                if (_param) {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'ShowHeatmap',
                        param: obj.id
                    };
                } else {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'HideHeatmap',
                        param: obj.id
                    };

                }
                iframeCw.postMessage(sendJson, '*');
            }
            obj.update = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'updateHeatmap',
                    param: this.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        //
        CreateGrid: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateGrid',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveGrid',
                    param: id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            obj.show = function (_param) {
                let sendJson;
                if (_param) {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'ShowGrid',
                        param: obj.id
                    };
                } else {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'HideGrid',
                        param: obj.id
                    };

                }
                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        CreatePolyline: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'AddPath',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemovePath',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            obj.show = function (_param) {
                let sendJson;
                if (_param) {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'ShowPath',
                        param: obj.id
                    };
                } else {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'HidePath',
                        param: obj.id
                    };

                }
                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        CreateMigrationMap: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'AddMigrationMap',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveMigrationMap',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            obj.show = function (_param) {
                let sendJson;
                if (_param) {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'ShowMigration',
                        param: obj.id
                    };
                } else {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'HideMigration',
                        param: obj.id
                    };

                }
                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        createFeatureLayer: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateCluster',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveCluster',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        CreateAreaData: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateAreaData',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveAreaData',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            obj.show = function (_param) {
                let sendJson;
                if (_param) {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'ShowAreaData',
                        param: obj.id
                    };
                } else {
                    sendJson = {
                        namespace: 'ObjectFactory',
                        type: 'HideAreaData',
                        param: obj.id
                    };

                }
                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        CreateCircleArea: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateCircleArea',
                param: _param
            };


            var obj = new objectXZ(_param._id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveAreaData',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        CreateCluster: function (_param = "") {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateCluster',
                param: _param
            };

            iframeCw.postMessage(sendJson, '*');
        },
        RemoveCluster: function () {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'RemoveCluster',
                param: ""
            }
            iframeCw.postMessage(sendJson, '*');
        },
        CreateEffectPoint: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateEffectPoint',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveEffectPoint',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        createAreaBoundary: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'createAreaBoundary',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveAreaBoundary',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        }

    }
    factory = {
        //
        CallEvent: function (_eventName, _param = "") {
            let sendJson = {
                namespace: 'factory',
                type: 'callEvent',
                eventName: _eventName,
                param: _param
            };
            iframeCw.postMessage(sendJson, '*');
        },
        setRes: function (_width, _height) {
            let sendJson = {
                namespace: 'factory',
                type: 'setResolution',
                param: {
                    width: parseInt(_width),
                    height: parseInt(_height)
                }
            };
            iframeCw.postMessage(sendJson, '*');
        },
        //
        FlyToCity: function () {
            let sendJson = {
                namespace: 'factory',
                type: 'FlyToCity',
                param: {
                    rotation: new Rotator(0, -25, 155)
                }
            };
            iframeCw.postMessage(sendJson, '*');
        },
        //
        ReStartWorld: function () {
            let sendJson = {
                namespace: 'factory',
                type: 'ReStartWorld'
            };
            iframeCw.postMessage(sendJson, '*');
        },
        //
        CreatePatrolLine: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'CreatePatrolLine',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'factory',
                    type: 'RemovePatrol',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            obj.beginPatrol = function (_param) {
                let sendJson = {
                    namespace: 'factory',
                    type: 'BeginPatrol',
                    param: {
                        id: obj.id,
                        obj: _param.id,
                        category: _param.category
                    }
                };

                iframeCw.postMessage(sendJson, '*');
            }
            obj.stopPatrol = function (_param) {
                let sendJson = {
                    namespace: 'factory',
                    type: 'StopPatrol',
                    param: {
                        id: obj.id,
                        obj: _param.id,
                        category: _param.category
                    }
                };

                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        //
        CreateGroupBar: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'CreateGroupBar',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'factory',
                    type: 'RemoveGroupBar',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            // obj.show = function(_param) {
            //     let sendJson;
            //     if(_param) {
            //         sendJson = {
            //             namespace : 'factory',
            //             type : 'ShowGroupBar',
            //             param : obj.id
            //         };
            //     } else {
            //         sendJson = {
            //             namespace : 'factory',
            //             type : 'HideGroupBar',
            //             param : obj.id
            //         };
            //
            //     }
            //    iframeCw.postMessage(sendJson,'*');
            // }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        CreateTextTwoImg: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'CreateTextTwoImg',
                param: _param
            };

            var obj = new objectXZ(_param._id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'factory',
                    type: 'RemoveTextTwoImg',
                    param: _param.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        //音频
        setAudioFile: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'SetAudioFile',
                param: {
                    soundFileName: _param
                }
            };
            iframeCw.postMessage(sendJson, '*');
        },
        setAudioSwitch: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'SetAudioSwitch',
                param: {
                    soundSwitch: _param
                }
            };
            iframeCw.postMessage(sendJson, '*');
        },
        setAudioVolume: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'setAudioVolume',
                param: {
                    soundVolume: _param
                }
            };
            iframeCw.postMessage(sendJson, '*');
        },
        DoubleRendering: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'DoubleRendering',
                param: _param
            };
            iframeCw.postMessage(sendJson, '*');
        }

    };
    View = {
        //三维柱状图
        CreateStatisticCylinder: function (option) {
            let sendJson = {
                namespace: 'View',
                type: 'Create3DBar',
                param: option
            };

            var obj = new objectXZ(option.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'View',
                    type: 'Remove3DBar',
                    param: option.id
                }
                iframeCw.postMessage(sendJson, '*');
            }
            obj.show = function (_param) {
                let sendJson;
                if (_param) {
                    sendJson = {
                        namespace: 'View',
                        type: 'Show3DBar',
                        param: obj.id
                    };
                } else {
                    sendJson = {
                        namespace: 'View',
                        type: 'Hide3DBar',
                        param: obj.id
                    };

                }
                iframeCw.postMessage(sendJson, '*');
            }
            iframeCw.postMessage(sendJson, '*');
            return obj;
        }
    };
    SelectTool = {
        select: function (_callBack) {
            let sendJson = {
                namespace: 'SelectTool',
                type: 'select',
                param: true
            };
            this.callBackTemp = _callBack;
            iframeCw.postMessage(sendJson, '*');
        },
        disSelect: function () {
            let sendJson = {
                namespace: 'SelectTool',
                type: 'select',
                param: false
            };
            iframeCw.postMessage(sendJson, '*');
        }
    };
    analysis = {
        getDistanceHorizontal: function (_callBack) {
            var randomId = new Date().getTime().toString();
            let sendJson = {
                namespace: 'analysis',
                type: 'AddMeasure',
                param: randomId
            };


            var obj = new objectXZ(randomId);
            obj.deleteObject = function () {
                sendJson = {
                    namespace: 'analysis',
                    type: 'RemoveMeasure',
                    param: obj.id
                };
                iframeCw.postMessage(sendJson, '*');
            }
            this.callBackTemp = _callBack;
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        getPlaneArea: function (_callBack) {
            var randomId = new Date().getTime().toString();
            let sendJson = {
                namespace: 'analysis',
                type: 'AddPlaneArea',
                param: randomId
            };

            var obj = new objectXZ(randomId);
            obj.deleteObject = function () {
                sendJson = {
                    namespace: 'analysis',
                    type: 'RemovePlaneArea',
                    param: obj.id
                };
                iframeCw.postMessage(sendJson, '*');
            }
            this.callBackTemp = _callBack;
            iframeCw.postMessage(sendJson, '*');
            return obj;
        },
        getMeasureHeight: function (_callBack) {
            var randomId = new Date().getTime().toString();
            let sendJson = {
                namespace: 'analysis',
                type: 'AddMeasureHeight',
                param: randomId
            };

            var obj = new objectXZ(randomId);
            obj.deleteObject = function () {
                sendJson = {
                    namespace: 'analysis',
                    type: 'RemoveMeasureHeight',
                    param: obj.id
                };
                iframeCw.postMessage(sendJson, '*');
            }
            this.callBackTemp = _callBack;
            iframeCw.postMessage(sendJson, '*');
            return obj;
        }


    };
    Command = {
        Exec: function (namespace, type, value) {
            let sendJson = {
                namespace: namespace,
                type: type,
                value: value
            };
            iframeCw.postMessage(sendJson, '*');
        }
    };

}

export default ue4apixz;