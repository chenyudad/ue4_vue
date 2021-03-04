/*
 * 注意：传UE4的参数，单位都是厘米
 *
 */
//镜头属性
let _camera = {
    location: {}, //镜头坐标
    rotation: {}, //镜头角度
    distance: '', //镜头到屏幕中心点地面的距离
    FlyTo: '', //平移到定点
    setView: '', //设置镜头到定点
    rotate: '', //按屏幕中心的地面为中心，旋转
    cancelFlight: '', //取消平移
    focusOn: {} //屏幕中心聚焦到定点，需传入镜头到中心点距离
}
var objectXZ = function (_id) {
    this.id = _id;
    this.category = '';
    this.removeFromMap = function () {}
    // eslint-disable-next-line no-unused-vars
    this.show = function (_param) {}
    this.deleteObject = '';
    this.beginPatrol = '';
    this.stopPatrol = '';
}
//回调临时变量
let callBackTemp = '';
let callBackPick = '';
// let callBackPickID = '';
//api 类
// eslint-disable-next-line no-unused-vars
var ue4api_xz = function (ue4frameId) {
    let xz = document.getElementById(ue4frameId).contentWindow;

    this.camera = _camera;
    let sendJson;
    //callBackTemp = '';
    this.camera = {
        FlyTo: function (_x, _y, _z, _roll, _pitch, _yaw, _callBack, _time = 2) {
            sendJson = {
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
            callBackTemp = _callBack;
            xz.postMessage(sendJson, '*');
        },
        setView: function (_options) {
            sendJson = {
                namespace: 'camera',
                type: 'setView',
                param: {
                    location: _options.destination,
                    rotation: _options.orientation
                }
            };
            xz.postMessage(sendJson, '*');
        },
        rotate: function (_time, _degrees, _callBack) {
            sendJson = {
                namespace: 'camera',
                type: 'rotate',
                param: {
                    time: _time,
                    degrees: _degrees
                }
            };
            callBackTemp = _callBack;
            xz.postMessage(sendJson, '*');
        },
        cancelFlight: function () {
            sendJson = {
                namespace: 'camera',
                type: 'cancelFlight',
                param: ''
            };
            xz.postMessage(sendJson, '*');
        },
        focusOn: function (_location, _rotation, _distance, _callBack, _time = 1) {
            sendJson = {
                namespace: 'camera',
                type: 'focusOn',
                param: {
                    location: _location,
                    rotation: _rotation,
                    distance: _distance,
                    time: _time
                }
            };
            callBackTemp = _callBack;
            console.log(sendJson);
            xz.postMessage(sendJson, '*');
        }
    };

    //
    this.environment = {
        ShowEffect: function (_param) {
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
            xz.postMessage(sendJson, '*');
        },
        DisableEffect: function (_param) {
            //取消夜晚就是中午
            //为了把暴露接口和cesium一致
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
            xz.postMessage(sendJson, '*');
        },
        SpecificTime: function (_param) {
            sendJson = {
                namespace: 'environment',
                type: 'SpecificTime',
                param: {
                    time: _param
                }
            };
            xz.postMessage(sendJson, '*');
        },
        CycleDayTime: function (_duration = 15) {
            sendJson = {
                namespace: 'environment',
                type: 'CycleDayTime',
                param: {
                    duration: _duration
                }
            };
            xz.postMessage(sendJson, '*');
        },
        setTime: function (_param) {
            sendJson = {
                namespace: 'environment',
                type: 'SetTime',
                param: _param
            };

            xz.postMessage(sendJson, '*');
        },
        setWeather: function (_param) {
            sendJson = {
                namespace: 'environment',
                type: 'setWeather',
                param: _param
            };

            xz.postMessage(sendJson, '*');
        },
        SetTimeInit: function (_param) {
            sendJson = {
                namespace: 'environment',
                type: 'SetTimeInit',
                param: _param
            };

            xz.postMessage(sendJson, '*');
        },
        SetWeatherInit: function (_param) {
            sendJson = {
                namespace: 'environment',
                type: 'SetWeatherInit',
                param: _param
            };

            xz.postMessage(sendJson, '*');
        }

    };
    //
    this.measure = {
        PickPosition: function (_callBack) {
            let sendJson = {
                namespace: 'measure',
                type: 'PickPosition'
            };
            callBackPick = _callBack;
            xz.postMessage(sendJson, '*');
        },
        PickObject: function (_callBack) {
            let sendJson = {
                namespace: 'measure',
                type: 'PickObject'
            };
            callBackPick = _callBack;
            xz.postMessage(sendJson, '*');
        },
        PickComponent: function (_callBack) {
            let sendJson = {
                namespace: 'measure',
                type: 'PickComponent'
            };
            callBackPick = _callBack;
            xz.postMessage(sendJson, '*');
        }
    };
    this.scene = {
        pointEffect: function (_param) {
            let sendJson = {
                namespace: 'scene',
                type: 'pointEffect',
                param: _param
            };
            xz.postMessage(sendJson, '*');
        }

    };
    //
    this.ObjectFactory = {
        CreateBillboard: function (_param) {
            _param.category = 'billboard';
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateBillboard',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.category = 'billboard';
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveBillboard',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
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
                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
            return obj;
        },
        CreateLabel: function (_param) {
            _param.category = 'label';
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateLabel',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.category = 'label';
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveLabel',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
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
                xz.postMessage(sendJson, '*');
            }
            //
            xz.postMessage(sendJson, '*');
            return obj;
        },
        //
        createHeatmap: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'createHeatmap',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveHeatmap',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
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
                xz.postMessage(sendJson, '*');
            }
            obj.update = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'updateHeatmap',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
            return obj;
        },
        //
        CreateGrid: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateGrid',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveGrid',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
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
                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
            return obj;
        },
        CreatePolyline: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'AddPath',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemovePath',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
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
                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
            return obj;
        },
        CreateMigrationMap: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'AddMigrationMap',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveMigrationMap',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
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
                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
            return obj;
        },
        createFeatureLayer: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateCluster',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveCluster',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
            return obj;
        },
        CreateAreaData: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateAreaData',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveAreaData',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
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
                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
            return obj;
        },
        CreateCircleArea: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateCircleArea',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveAreaData',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
            return obj;
        },
        CreateCluster: function (_param = "") {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateCluster',
                param: _param
            };

            xz.postMessage(sendJson, '*');
        },
        RemoveCluster: function () {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'RemoveCluster',
                param: ""
            }
            xz.postMessage(sendJson, '*');
        },
        CreateEffectPoint: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'CreateEffectPoint',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveEffectPoint',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
            return obj;
        },
        createAreaBoundary: function (_param) {
            let sendJson = {
                namespace: 'ObjectFactory',
                type: 'createAreaBoundary',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'ObjectFactory',
                    type: 'RemoveAreaBoundary',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
            return obj;
        }

    };
    ////
    this.factory = {
        //
        CallEvent: function (_eventName, _param = "") {
            let sendJson = {
                namespace: 'factory',
                type: 'callEvent',
                eventName: _eventName,
                param: _param
            };
            xz.postMessage(sendJson, '*');
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
            xz.postMessage(sendJson, '*');
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
            xz.postMessage(sendJson, '*');
        },
        //
        ReStartWorld: function () {
            let sendJson = {
                namespace: 'factory',
                type: 'ReStartWorld'
            };
            xz.postMessage(sendJson, '*');
        },
        //
        CreatePatrolLine: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'CreatePatrolLine',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'factory',
                    type: 'RemovePatrol',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
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

                xz.postMessage(sendJson, '*');
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

                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
            return obj;
        },
        //
        CreateGroupBar: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'CreateGroupBar',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'factory',
                    type: 'RemoveGroupBar',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
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
            //     xz.postMessage(sendJson,'*');
            // }
            xz.postMessage(sendJson, '*');
            return obj;
        },
        CreateTextTwoImg: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'CreateTextTwoImg',
                param: _param
            };
            var obj = new objectXZ(_param.id);
            obj.removeFromMap = function () {
                let sendJson = {
                    namespace: 'factory',
                    type: 'RemoveTextTwoImg',
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
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
            xz.postMessage(sendJson, '*');
        },
        setAudioSwitch: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'SetAudioSwitch',
                param: {
                    soundSwitch: _param
                }
            };
            xz.postMessage(sendJson, '*');
        },
        setAudioVolume: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'setAudioVolume',
                param: {
                    soundVolume: _param
                }
            };
            xz.postMessage(sendJson, '*');
        },
        DoubleRendering: function (_param) {
            let sendJson = {
                namespace: 'factory',
                type: 'DoubleRendering',
                param: _param
            };
            xz.postMessage(sendJson, '*');
        }
        // ,ScreenShot : function (_param = 1) {
        //     let sendJson = {
        //         namespace : 'factory',
        //         type : 'ScreenShot',
        //         param: {
        //             Multiplier : _param
        //         }
        //     };
        //     xz.postMessage(sendJson,'*');
        // }
    };
    //
    this.View = {
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
                    param: this.id
                }
                xz.postMessage(sendJson, '*');
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
                xz.postMessage(sendJson, '*');
            }
            xz.postMessage(sendJson, '*');
            return obj;
        }
    };
    //
    this.SelectTool = {
        select: function (_callBack) {
            let sendJson = {
                namespace: 'SelectTool',
                type: 'select',
                param: true
            };
            callBackTemp = _callBack;
            xz.postMessage(sendJson, '*');
        },
        disSelect: function () {
            let sendJson = {
                namespace: 'SelectTool',
                type: 'select',
                param: false
            };
            xz.postMessage(sendJson, '*');
        }
    };
    //
    this.analysis = {
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
                xz.postMessage(sendJson, '*');
            }
            callBackTemp = _callBack;
            xz.postMessage(sendJson, '*');
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
                xz.postMessage(sendJson, '*');
            }
            callBackTemp = _callBack;
            xz.postMessage(sendJson, '*');
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
                xz.postMessage(sendJson, '*');
            }
            callBackTemp = _callBack;
            xz.postMessage(sendJson, '*');
            return obj;
        }


    };
    this.Command = {
        Exec: function (namespace, type, value) {
            let sendJson = {
                namespace: namespace,
                type: type,
                value: value
            };
            xz.postMessage(sendJson, '*');
        }
    };
};

// eslint-disable-next-line no-unused-vars
var Vector3 = function (_x = 0, _y = 0, _z = 0) {
    return {
        x: _x,
        y: _y,
        z: _z
    };
}

// eslint-disable-next-line no-unused-vars
var Vector2 = function (_x = 0, _y = 0) {
    return {
        x: _x,
        y: _y
    };
}

// Pitch：沿着Y轴旋转；
// Roll：沿着X轴旋转；
// Yaw：沿着Z轴旋转；
var Rotator = function (_roll = 0, _pitch = 0, _yaw = 0) {
    return {
        roll: _roll,
        pitch: _pitch,
        yaw: _yaw
    };
}

// eslint-disable-next-line no-unused-vars
var Color = function (_R = 1, _G = 1, _B = 1, _A = 1) {
    return {
        r: _R,
        g: _G,
        b: _B,
        a: _A
    }
}

// eslint-disable-next-line no-unused-vars
var DefaultColor = {
    red: {
        r: 1,
        g: 0,
        b: 0,
        a: 1
    },
    green: {
        r: 0,
        g: 1,
        b: 0,
        a: 1
    },
    blue: {
        r: 0,
        g: 0,
        b: 1,
        a: 1
    },
    yellow: {
        r: 1,
        g: 1,
        b: 0,
        a: 1
    },
    purple: {
        r: 1,
        g: 0,
        b: 1,
        a: 1
    },
    cyan: {
        r: 0,
        g: 1,
        b: 1,
        a: 1
    },
    black: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    },
    white: {
        r: 1,
        g: 1,
        b: 1,
        a: 1
    },
    gray: {
        r: 0.5,
        g: 0.5,
        b: 0.5,
        a: 1
    }
}
/*
        n
*       |
*       |
* w—————|————→e
*       |
*       ↓
*       s
* 单位：厘米
*/
// eslint-disable-next-line no-unused-vars
var bounds = function (w = -10000, e = 10000, s = 10000, n = -10000) {
    return {
        west: w,
        east: e,
        south: s,
        north: n
    };
}
function    mainPage(){

    console.log("===========>>>>><<<<<===========");
}
//监听事件
addEventListener('message', e => { 
    console.info(e.data);
    //镜头位置，实时更新
    if (e.data.callBack === "CameraInfo") {
        _camera.location = e.data.camera.location;
        _camera.rotation = e.data.camera.rotation;
        _camera.distance = e.data.camera.distance;
        //显示到页面
        if (document.getElementById('cameraInfo') !== null) {
            document.getElementById('cameraInfo').innerHTML = JSON.stringify(e.data.camera.location);
        }
        if (document.getElementById('pointer') !== null) {
            document.getElementById('pointer').style.transform = "rotate(" + _camera.rotation.yaw + "deg)";
        }
    }
    //回调函数
    if (e.data.callBack === "CallBackOneParam") {
        //鼠标拾取回调，带参
        if (e.data.customStr === 'pickWidget' && callBackPick !== '') {
            callBackPick(e.data.info);
        }
        // else if(e.data.customStr === 'pickID' && callBackPickID !== '') {
        //     callBackPickID(e.data.info);
        // }
        else if (callBackTemp !== '') {
            //其他带参回调
            callBackTemp(e.data.info);
        }
    } else if (e.data.callBack === "CallBackNoParam") {
        if (e.data.customStr === "connected" && typeof mainPage === 'function') {
            // eslint-disable-next-line no-undef
            mainPage();
        } else if (e.data.customStr === "wsDisConnect" && typeof closedPage === 'function') {
            // eslint-disable-next-line no-undef
            closedPage();
        } else if (e.data.customStr === "WorldBegin" && typeof beginWorld === 'function') {
            // eslint-disable-next-line no-undef
            beginWorld();
        } else if (callBackTemp !== '') {
            //无参回调
            callBackTemp();
        }
    }
    else if (e.data.data == undefined) {
         mainPage();

    }
});