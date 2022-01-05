<template>
  <div class="tac">
    <el-row class="tac">
      <el-col :span="6" class="tac">
        <el-menu
          :default-active="index"
          class="el-menu-vertical-demo"
          @select="handleOpen"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item
            :index="item.Year"
            v-for="item in Yearlist"
            :key="item.Year"
          >
            <span slot="title">{{ item.Year }}</span>
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
              class="imageurl"
              @click="xiangqing(item.MONTH)"
            ></el-image
            ><span class="mingcheng">{{ item.MONTH }}月</span></el-col
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
      index: "2021",
      item: [],
      Yearlist: [],
    };
  },
  mounted() {
    console.log(json);
    this.huoquYear();
  },
  methods: {
    huoquYear() {
      var url = "http://localhost:3000/Year";
      var obj = {};
      this.$baseAPI
        .POST(url, obj)
        .then((response) => {
          console.log(response);
          this.Yearlist = response.data;
          console.log(response.data);
          this.handleOpen(response.data[0].Year)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleOpen(key) {
      var url = "http://localhost:3000/Mouth";
      var obj = {
        Year: key,
      };
      this.$baseAPI
        .POST(url, obj)
        .then((response) => {
          console.log(response);
          for (let i = 0; i < response.data.length; i++) {
            var ss = response.data[i].url.split(",");
            response.data[i].url= "http://gz.chuangxiangit.cn/ertong" +  ss[0]
            // response.data[i].url =
            //   "http://gz.chuangxiangit.cn/ertong" + response.data[i].url;
          }
          console.log(response.data)
          this.item = response.data;
        })
        .catch((err) => {
          console.log(err);
        });
      this.index = key;
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    xiangqing(e) {
      console.log(e);
      this.$router.push({ path: "/xiangqing", query: { id: e ,year:this.index} });
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
.imageurl {
  width: 80%;
}
</style>