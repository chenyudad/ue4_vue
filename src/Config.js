let Config = {
    //加载iframe页面
    //ue4 iframe页面
    // 111.161.66.4:81 朝阳
    // 103.25.37.69:89 公司服务器
    // http://103.25.37.69:86/
    // http://192.168.1.112:85 公司演示笔记本 
    // const iframeSrc = "http://192.168.1.112:88/";
    iframeSrc: "http://192.168.1.112:85/",
    engineOrigin: { //中心点坐标 
        // //朝阳
        x: 120.480743,
        y: 41.597932
        // // 大连
        // x: 121.229818,
        // y: 38.807531
        //滨海
        // x: 117.6770833,
        // y: 38.9880219
    },
    BASE_URL: function () {
        //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
        var curWwwPath = window.document.location.href;
        //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        //获取主机地址，如： http://localhost:8083
        var localhostPaht = curWwwPath.substring(0, pos);
        //获取带"/"的项目名，如：/uimcardprj
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
        return (localhostPaht + projectName);
    }
}
export default Config;