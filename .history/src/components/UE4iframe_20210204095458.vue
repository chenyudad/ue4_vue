<template>
  <div id="app">
    <iframe id="uePage" v-bind:src="form.iframeSrc" />
  </div>
</template>

<script>
import Config from "../Config";
export default {
  name: "UE4iframe",
  data() {
    return {
      form: {
        iframeSrc: Config.iframeSrc,
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body,
#app,
#uePage {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
