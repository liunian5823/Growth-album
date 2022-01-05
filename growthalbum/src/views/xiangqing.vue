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
            style="margin: 10px; width: 100px;height:67px"
            :src="ursl"
            v-for="(ursl, indexs) in item.url"
            :key="indexs"
          ></el-image>
          <p>备注：{{ item.beizhu }}</p>
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
      index: [
        {
          time: "2021-01-01",
          url: [
            "https://img1.baidu.com/it/u=3101750090,1175257868&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
            "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
            "https://img1.baidu.com/it/u=3101750090,1175257868&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
            "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
            "https://img1.baidu.com/it/u=3101750090,1175257868&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
            "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
            "https://img1.baidu.com/it/u=3101750090,1175257868&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
            "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
          ],
          beizhu: "123453",
        },
         {
          time: "2021-01-02",
          url: [
            "https://img1.baidu.com/it/u=3101750090,1175257868&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
            "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
            "https://img1.baidu.com/it/u=3101750090,1175257868&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
            "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
            "https://img1.baidu.com/it/u=3101750090,1175257868&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
            "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
            "https://img1.baidu.com/it/u=3101750090,1175257868&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
            "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
          ],
          beizhu: "123453",
        },
         {
          time: "2021-01-10",
          url: [
            "https://img1.baidu.com/it/u=3101750090,1175257868&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
            "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
            "https://img1.baidu.com/it/u=3101750090,1175257868&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
            "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
            "https://img1.baidu.com/it/u=3101750090,1175257868&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
            "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
            "https://img1.baidu.com/it/u=3101750090,1175257868&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
            "https://img2.baidu.com/it/u=1814268193,3619863984&fm=253&fmt=auto&app=138&f=JPEG?w=632&h=500",
          ],
          beizhu: "123453",
        },
      ],
    };
  },
  methods: {},
};
</script>