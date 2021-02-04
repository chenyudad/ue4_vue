<template>
  <div id="appNav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template #title> 镜头操控 </template>
        <el-menu-item index="1-1">获取当前镜头信息</el-menu-item>
        <el-menu-item index="1-2">定点巡查</el-menu-item>
        <el-menu-item index="1-3">镜头切换</el-menu-item>
        <el-menu-item index="1-4">镜头围绕观察</el-menu-item>
        <el-menu-item index="1-5">镜头点位聚焦</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template #title> 特殊效果 </template>
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
        <template #title> POI点操控 </template>
        <el-menu-item index="3-1">添加文字json批量 </el-menu-item>
        <el-menu-item index="3-2">添加POI点json批量</el-menu-item>
        <el-menu-item index="3-3">点聚合</el-menu-item>
        <el-menu-item index="3-4">滨海poi点测试</el-menu-item>
        <!-- <el-menu-item index="3-3">添加巡查路径</el-menu-item> -->
      </el-submenu>

      <el-submenu index="4">
        <template #title> 线路操控 </template>
        <el-menu-item index="4-1">绘制路径 </el-menu-item>
        <!-- <el-menu-item index="4-2">轨迹回放（此功能暂不开放）</el-menu-item> -->
      </el-submenu>

      <el-submenu index="5">
        <template #title> 量测功能 </template>
        <el-menu-item index="5-1">高度量测</el-menu-item>
        <el-menu-item index="5-2">折线距离量测</el-menu-item>
        <el-menu-item index="5-3">平面面积量测</el-menu-item>
        <el-menu-item index="5-4">获取坐标</el-menu-item>
      </el-submenu>

      <el-submenu index="6">
        <template #title> 组件控件 </template>
        <el-menu-item index="6-1">柱状统计</el-menu-item>
        <el-menu-item index="6-2">创建迁徙图</el-menu-item>
        <!-- <el-menu-item index="6-3">创建光圈</el-menu-item> -->
        <!-- <el-menu-item index="6-4">创建围栏效果</el-menu-item> -->
      </el-submenu>

      <el-submenu index="7">
        <template #title> 新增测试 </template>
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
        <template #title> 场景切换 </template>
        <el-menu-item index="8-1">实景区域镜头</el-menu-item>
        <el-menu-item index="8-2">全国行政区域镜头</el-menu-item>
        <el-menu-item index="8-3">经济圈区域镜头</el-menu-item>
        <el-menu-item index="8-4">朝阳行政区划区域镜头</el-menu-item>
        <el-menu-item index="8-5">规划数据区域镜头</el-menu-item>
      </el-submenu>

      <el-submenu index="9">
        <template #title> 场景切换 </template>
        <el-menu-item index="9-1">夜景</el-menu-item>
        <el-menu-item index="9-2">雨雪</el-menu-item>
        <el-menu-item index="9-3">行政区</el-menu-item>
        <el-menu-item index="9-4">大局部</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>


<script>
let Nav = {
  name: "Nav",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      switch (key) {
        case "2-1": {
          console.log(key);
          break;
        }
        default:
          break;
      }
    },
  },
};
export default Nav;
</script>
<style scoped>
#appNav {
  position: absolute;
  left: 10px;
  top: 10px;
}
</style>