<template>
  <div class="hello">
    <iframe id="uePage" v-bind:src="Config.iframeSrc"/>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
