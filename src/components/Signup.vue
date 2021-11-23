<template>
  <div>
    <div class="register-box">
      <div class="register-logo">
          <router-link 
            class="text-center" 
            to="/">
                <b>Admin</b>LTE
          </router-link>
      </div>
      <div class="card">
        <div class="card-body register-card-body">
          <p class="login-box-msg">Register a new membership</p>

          <form action="../../index.html" method="post">
            <div class="form-group has-feedback">
              <input type="text" class="form-control" placeholder="Full name" />
              <span class="fa fa-user form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
              <input type="email" class="form-control" placeholder="Email" />
              <span class="fa fa-envelope form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
              <span class="fa fa-lock form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
              <input
                type="password"
                class="form-control"
                placeholder="Retype password"
              />
              <span class="fa fa-lock form-control-feedback"></span>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="checkbox icheck">
                  <label>
                    <input type="checkbox" /> I agree to the
                    <a href="#">terms</a>
                  </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button
                  type="submit"
                  class="btn btn-primary btn-block btn-flat"
                >
                  Register
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <div class="social-auth-links text-center">
            <p>- OR -</p>
            <router-link href="#" 
                class="btn btn-block btn-primary" 
                to="/admin/login">
              <i class="fa fa-facebook mr-2"></i>
              Already have an account?
            </router-link>
          </div>
        </div>
        <!-- /.form-box -->
      </div>
      <!-- /.card -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Signup",
  data() {
    return {
      loginUrl: `${this.$serverUrl}admin/login`,
      user: {
        email: null,
        password: null,
        remember: null,
      },
    };
  },
  methods: {
    userLogin: function () {
      console.log(this.user);
    },
  },
  components: {},
  props: {},
};
</script>
