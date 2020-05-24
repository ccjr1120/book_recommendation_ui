<template>
  <div class="fillcontain" style="background: #2d3a4b;">
    <div class="login-container">
      <div class="title-container">
        <h3>Login</h3>
      </div>
      <el-form label-width="80px" status-icon :model="loginForm" ref="loginForm">
        <el-form-item
          prop="username"
          :rules="[{ required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 4, max: 32, message: '用户名长度不符合要求' }]"
        >
          <el-input
            placeholder="Username"
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="password"
          :rules="[{ required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 8, max: 16, message: '密码长度不符合要求' }]"
        >
          <el-input
            placeholder="Password"
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm('loginForm')" style="width:100%;" type="primary">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "../api/index";
export default {
  data() {
    return {
      labelPosition: "right",
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          login(this.loginForm).then(resp => {
            var data = resp.data;
            if (data.success) {
              if (!this.$store.state.isLogin) {
                this.$store.commit("updateLoginState");
              }
              this.$router.push("/home");
              this.$message({
                message: "登陆成功",
                type: "success"
              });
            } else {
              this.$message.error("登录失败，用户或密码错误");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.login-container {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}
.title-container {
  position: relative;
  font-size: 26px;
  color: #eee;
  margin: 0 auto 40px auto;
  text-align: center;
  font-weight: 700;
}
</style>