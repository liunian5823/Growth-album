<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        :timestamp="item.time"
        placement="top"
        v-for="(item, index) in index"
        :key="index"
      >
        <el-card>
          <el-image
            :preview-src-list="item.url"
            style="margin: 10px; width: 100px; height: 67px"
            :src="ursl"
            v-for="(ursl, indexs) in item.url"
            :key="indexs"
          ></el-image>
          <p>备注：{{ item.remarks }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "xiangqing",
  data() {
    return {
      index: [],
    };
  },
  mounted() {
    console.log(this.$route.query.id, this.$route.query.year);
    var url = "http://localhost:3000/xiangqing";
    var obj = {
      mouth: this.$route.query.id,
      Year: this.$route.query.year,
    };
    this.$baseAPI
      .POST(url, obj)
      .then((response) => {
        console.log(response);
        for (let i = 0; i < response.data.length; i++) {
          // console.log()
           var json_date = new Date(response.data[i].time).toJSON();
           var time = new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
           response.data[i].time = time
          var ss = response.data[i].url.split(",");
          for (let o = 0; o < ss.length; o++) {}
          response.data[i].url = ss;
          for (let o = 0; o < response.data[i].url.length; o++) {
            response.data[i].url[o] = "http://gz.chuangxiangit.cn/ertong" +  response.data[i].url[o]
          }
        }

  
        this.index = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {},
};
</script>