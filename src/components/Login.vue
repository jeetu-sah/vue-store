<template>
  <div>
    <div class="login-box">
      <div class="login-logo">
        <a href="../../index2.html"><b>Admin</b>LTE</a>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>
          <form
            :action="loginUrl"
            id="userLoginForm"
            v-on:submit.prevent="userLogin"
            method="post"
          >
            <div class="form-group has-feedback">
              <input
                type="email"
                v-model="user.email"
                class="form-control"
                placeholder="Email"
              />
              <span class="fa fa-envelope form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
              <input
                v-model="user.password"
                type="password"
                class="form-control"
                placeholder="Password"
              />
              <span class="fa fa-lock form-control-feedback"></span>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="checkbox icheck">
                  <label>
                    <input type="checkbox" v-model="user.remember" /> Remember
                    Me
                  </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button
                  type="submit"
                  class="btn btn-primary btn-block btn-flat"
                >
                  Sign In
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>
          <p class="mb-1">
            <a href="#">I forgot my password</a>
          </p>
          <p class="mb-0">
            <router-link class="text-center" to="/admin/signup">
              Register a new membership
            </router-link>
          </p>
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginUrl: `${this.$serverUrl}login`,
      user: {
        email: 'adella.dach@example.com',
        password: 'password',
        remember: null,
      },
    };
  },
  methods: {
    userLogin: function() {
      this.$axios
        .post(this.loginUrl, this.user)
        .then((response) => {
          if(response.data.status == 200){
            localStorage.setItem('usertoken', response.data.token);
            this.user.email = this.user.password = '';
              //this.$router.go("/admin/dashboard");
              //this.$router.push("/admin/dashboard");
              this.$root.successMsg("Login Successfully !!!");
              this.$router.push({ name: 'admin.dashboard'});
          }else{
             this.$root.warningMsg(response.data.error);
          }
        })
        .catch(() => {
            this.$root.errorMsg();
        })
        .finally(() => {
          console.log("loading false");
        });
    },
  },
  components: {},
  props: {},
};
</script>
