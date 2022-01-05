<template>
  <div class="login">
    <img class="image" src="../assets/header-1.png" alt="" />

    <!-- 表单 -->

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="60px"
      class="demo-ruleForm biandan"
    >
      <el-form-item label="账号:" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="chuangjian"
          @click="submitForm('ruleForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 32, message: "长度在 6 到 32 个字符", trigger: "blur" },
        ],
      },
    };
  },
  mounted(){
      sessionStorage.removeItem('id')
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var url = "http://localhost:3000/login";
          var obj = {
            name: this.ruleForm.name,
            password: this.ruleForm.password,
          };
          this.$baseAPI
            .POST(url, obj)
            .then((response) => {
              console.log(response)
              if(response.code == '200' && response.data){
                  sessionStorage.setItem('id',response.data);
                //   sessionStorage.getItem('key'); 获取
                  this.$router.push({ path: "/" });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  overflow: hidden;
  height: 100%;
}
.image {
  width: 100%;
  position: relative;
}
.denglu {
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin: 100px 30px;
}
.biandan {
  position: absolute;
  top: 300px;
  left: 16%;
  width: 66%;
}
.biandan /deep/ .el-form-item__content {
  margin-left: 0px !important;
}
.chuangjian {
  width: 100%;
  background: rgba(93, 185, 255, 1); /* Old Browsers */
  background: -moz-linear-gradient(
    top,
    rgba(93, 185, 255, 1) 0%,
    rgba(80, 221, 241, 1) 100%
  ); /* FF3.6+ */
}
</style>