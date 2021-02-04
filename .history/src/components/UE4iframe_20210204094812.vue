<template>
  <div class="hello">
    <iframe id="uePage" v-bind:src="Config.iframeSrc"/>
  </div>
</template>

<script>
import Config from '../Config'
export default {
  name: "UE4iframe",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
