<template>
  <div id="app">
    <UE4iframe id="mainContainer" msg="引用ue4视频流" />
    <CommandNav msg="引用菜单 " />
    <WGSConvertForm msg="坐标转换 " />
  </div>
</template>

<script>
import UE4iframe from "./components/UE4iframe.vue";
import CommandNav from "./components/CommandNav.vue";
import WGSConvertForm from "./components/WGSConvertForm.vue";

export default {
  name: "App",
  components: {
    UE4iframe,
    CommandNav,
    WGSConvertForm,
  },
};
</script>

<style>
html,
body,
#mainContainer,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
