let Config = {
    //加载iframe页面 
    // 111.161.66.4:81 朝阳
    // 103.25.37.69:89 公司服务器
    // http://103.25.37.69:86/ 
    // iframeSrc: "http://103.25.37.69:86/", //克拉玛依
      iframeSrc: "http://111.161.66.4:80/",//朝阳
     // iframeSrc: "http://192.168.0.104:82/",
     //iframeSrc: "http://103.25.37.69:86/",
    engineOrigin: { //中心点坐标 
        // //朝阳
        // x: 120.480743,
        // y: 41.597932
        // 大连
        x: 121.229818,
        y: 38.807531
        //滨海
        // x: 117.6770833,
        // y: 38.9880219
        //   //克拉玛依
        //   x:84.895633,
        //  y: 45.583904
    },
    BASE_URL: function () {
        //获取项目路径
        var curRequestPath = window.document.location.href;
        // console.log("curRequestPath:" + curRequestPath);
        //获取项目请求路径 
        var pathName = window.document.location.pathname;
        // console.log("pathName:" + pathName);
        var ipAndPort = curRequestPath.indexOf(pathName);
        // console.log("ipAndPort:" + ipAndPort);
        var localhostPath = curRequestPath.substring(0, ipAndPort);
        // console.log("localhostPath:" + localhostPath);
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
        // console.log("projectName:" + projectName);
        let basePath = localhostPath + projectName;

        return basePath;
    }
}
export default Config;