<template>
  <div class="Login">
      <div class="page-group">
        <div class="page page-current">
            <div class="content">
                <div class="logo">
                    <img class="logo-icon" src="../assets/login/logo.png" alt=""/>
                </div>
                <div class="login">
                    <div class="login-list">
                        <div class="login-in">
                            <input type="text" placeholder="请输入登录帐号" class="code" v-model="userName" />
                        </div>
                    </div>
                    <div class="login-list">
                        <div class="login-in">
                            <input type="text" placeholder="请输入密码" class="code" v-model="passWorld" />
                        </div>
                    </div>
                </div>
                <div class="save">
                    <div class="save-btn" v-on:click="login">登&nbsp;&nbsp;录</div>
                </div>
                <div class="choice">
                    <div class="choice-unit">
                    </div>
                    <div class="choice-unit rt">
                        <a class="choice-inner" href="">新用户注册</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

// mint-ui框架组件
import {} from 'mint-ui'

export default {
  components: {
  },
  name: 'Login',
  data () {
    return {
      userName: 'ada',
      passWorld: '123456'
    }
  },
  methods: {
    login: function () {
      this.axios.post('/api/rest/user/login.htm', {no: this.userName, password: this.passWorld}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.$cookie.set('userToken', res.data.userToken, { expires: '2h' })
            this.$router.push({path: '/index'})
          } else {
            console.log('2222')
            console.log('用户名或密码错误')
          }
        }, res => {
          console.log('1111')
          console.log('用户名或密码错误')
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page, .page-group{
  background: #fff;
}
li{
  list-style: none;
}
.clear{
  clear: both;
}
.save{
  padding: .853rem 3% .533rem;
}
.save-btn{
  height: 1.06rem;
  line-height: 1.06rem;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  font-size: 0.426rem;
  background-color: #ff5a00;
}
.login{
  padding: 0 0.533rem 0 0.533rem;
  font-size: 0.346rem;
}
.login-list{
  height: 1.06rem;
  line-height: 1.06rem;
  display: flex;
  margin-bottom: 0.16rem;
}
.login-in{
  width: 100%;
  height: 100%;
  display: flex;
}
.in-icon{
  width: 3.2rem;
  height: .8rem;
  line-height: .8rem;
  text-align: center;
  overflow: hidden;
  border: 1px solid #e0e0e0;
  margin-left: 0.16rem;
  margin-top: 0.24rem;
  border-radius: 4px;
}
.code{
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid #e0e0e0;
}
.logo{
  padding: 1.06rem 0.266rem 0.533rem;
  text-align: center;
}
.logo-icon{
  width: 3.2rem;
}
.choice{
  height: .8rem;
  line-height: .8rem;
  padding: 0 3%;
  display: flex;
  font-size: 0.373rem;
}
.choice-unit{
  flex: 1;
  height: 100%;
}
.choice-inner {
  height: 100%;
  overflow: hidden;
  display: inline-block;
  text-decoration: none;
}
.rt{
  text-align: right;
}
</style>
