<template>
  <div class="hello">
    <iframe id="uePage" v-bind:src="form.iframeSrc" />
  </div>
</template>

<script>
import Config from "../Config";
export default {
  name: "UE4iframe",
  data: function () {
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
</style>
