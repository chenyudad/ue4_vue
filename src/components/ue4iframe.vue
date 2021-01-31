<template>
  <div>
    <div
      id="cameraInfo"
      style="color: white; position: absolute; bottom: 20px; left: 20px"
    ></div>
    <!--指针底图-->
    <div style="position: absolute; right: 20px; top: 20px">
      <img v-bind:src="commapssBg" alt="" />
    </div>
    <!--指针-->
    <div style="position: absolute; right: 93px; top: 50px">
      <img
        id="pointer"
        v-bind:src="commapss"
        style="width: 50px; height: 148px"
        alt=""
      />
    </div>
    <iframe id="uePage" v-bind:src="iframeSrc" />
  </div>
</template>
<script>
import Config from "../Config.js";
export default {
  name: "UE4iframe",
  data() {
    // eslint-disable-next-line no-unused-labels
    return {
      iframeSrc: Config.iframeSrc,
      commapss: require("@/assets/pointer.png"),
      commapssBg: require("@/assets/compass_200.png"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
} 
iframe {
  margin: 0;
  border-style: none;
  width: 100%;
  height: 100%;
}
</style>
