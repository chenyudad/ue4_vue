<template>
  <div>
    <UE4iframe class="ue4iframe" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import UE4iframe from "./components/UE4iframe.vue";

export default {
  name: "App",
  components: {
    UE4iframe,
  },
};
</script>

<style>
html,
body,
.ue4iframe {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
