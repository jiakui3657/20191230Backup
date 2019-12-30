<template>
  <div class="login">
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-button type="info" size="large" @click="login">登录</van-button>
  </div>
</template>

<style lang="less"></style>

<script>
import https from "../http/http.js";
export default {
  name: "login",
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  mounted: function() {
    let login = this.$cookies.get("login");
    if (login && login != null) {
      window.console.log(login);
      this.username = login.user;
      this.password = login.pass;
    }
  },
  methods: {
    login() {
      let _this = this;
      window.console.log(this.username, this.password);
      let params = { username: _this.username, password: _this.password };
      https
        .fetchPost("/rest/saas_user/login.htm", params)
        .then(data => {
          if (data.code == 0) {
            window.console.log(data);
            window.console.log(this.$cookies.get("login"));
            let obj = {
              user: _this.username,
              pass: _this.password,
              userToken: data.userToken
            };
            this.$cookies.set("login", obj, 2 * 60 * 60);
            this.$toast.success("登录成功");
            this.$router.push("/home");
          } else {
            this.$toast(data.msg);
          }
          return Promise.resolve();
        })
        .then(_this.getUserInfo)
        .catch(err => {
          window.console.log(err);
        });
    },
    getUserInfo() {
      // eslint-disable-next-line no-unused-vars
      let _this = this;
      let params = {};
      https
        .fetchPost("/rest/agent/info.htm", params)
        .then(data => {
          if (data.code == 0) {
            window.console.log(data);
            this.$cookies.set("userInfo", data);
            this.$store.state.userInfo = data;
            window.console.log(
              this.$cookies.get("userInfo"),
              this.$store.state.userInfo
            );
          } else {
            this.$toast(data.msg);
          }
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  }
};
</script>
