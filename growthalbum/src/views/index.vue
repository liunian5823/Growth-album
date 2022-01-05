<template>
  <div class="tac">
    <el-row class="tac">
      <el-col :span="6" class="tac">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleOpen"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <span slot="title">2021</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">2022</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">2023</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">2024</span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">2025</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18" class="tacs">
        <!-- <div>
          <el-select
            class="sousuo"
            v-model="value"
            filterable
            placeholder="请选择"
            @change="xuanze"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            
            >
            </el-option>
          </el-select>
        </div> -->
        <div class="zhuti">
          <el-col :span="12" v-for="(item, index) in item" :key="index"
            ><el-image
              :src="item.url"
              alt=""
              style="margin: 10px"
              @click="xiangqing(item.month)"
            ></el-image
            ><span class="mingcheng">{{ item.month }}月</span></el-col
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import json from "../components/ceshi.json";
export default {
  name: "index",
  data() {
    return {
      index: 1,
      item: [],
    };
  },
  mounted() {
    console.log(json);
    this.item = json.item[1];
  },
  methods: {
    handleOpen(key) {
      console.log(json.item[key]);
      if(json.item[key] == undefined){
          this.$message({
          message: '还没有信息',
          center: true
        });
      }else{
          this.item = json.item[key];
      }
      this.index = key;
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    xiangqing(e) {
      console.log(e);
      this.$router.push({ path: "/xiangqing", query: { id: e } });
    },
  },
};
</script>

<style scoped>
.tac {
  height: 100%;
}
.el-menu {
  height: 100%;
}
.tacs {
  height: 100%;
}
.mingcheng {
  display: block;
  width: 100%;
  text-align: center;
}
.sousuo {
  margin: 10px 20px 0px 30px;
}
.zhuti {
  height: 100%;
  overflow: scroll;
}
</style>