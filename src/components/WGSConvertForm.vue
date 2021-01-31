<template>
  <el-form ref="form" :model="form" label-width="80px" class="demo-form">
    <el-form-item label="经纬度：">
      <el-input
        v-model="form.name"
        @change="handlerConvert"
        class="input-lonlat"
        placeholder="x:120.48,y:41.60或120.48,41.60"
      ></el-input>
    </el-form-item>

    <el-form-item label="转换后：">
      <el-input
        type="input"
        v-model="form.desc"
        class="input-lonlat"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script> 
import WGSConvert from "../core/TransformAxis/WGSConvert.js";
export default {
  name: "WGSConvertForm",
  data() {
    return {
      form: {
        name: "",
        desc: "",
      },
    };
  },
  methods: {
    handlerConvert() {
      let _wgs = this.form.name;
      _wgs = _wgs.replace(/\s+/g, ""); //去掉是所有空格
      _wgs = _wgs.replace(/，/g, ",").replace(/：/g, ":"); //替换中文符号
      _wgs = _wgs.toLowerCase().replace(/x:/g, "").replace(/y:/g, ""); //去掉是x:,y:
      let tmpArr = _wgs.split(",");
      var _vector3 = WGSConvert.WGS84ToVector3ForM(tmpArr[0], tmpArr[1], 0);
      this.form.desc = "x:" + _vector3.x + ",y:" + _vector3.y;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.el-form-item__label {
  color: #0656f7 !important;
}
.input-lonlat {
  width: 420px;
}

.demo-form {
  position:absolute;
  left: 10px;
  top: 70px;
  margin-top: 10px;
  padding: 10px;
  background: rgba(253, 253, 253, 0.5);
}
</style>