<template>
  <div>
    <div class="wrapper">
      <div class="content-wrapper">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark"></h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Add New Employee</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="content" style="margin-bottom:20px;">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <router-link class="btn btn-success"
                  :to="{ name: 'admin.employee.employee-list'}"
                  >Employee List</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="card card-primary card-outline">
                  <div class="card-header">
                    <h5 class="m-0">Add New Employee</h5>
                  </div>
                  <div class="card-body">
                    <form
                      id="employeeForm"
                      role="form"
                      :action="empployeeCreateFormAction"
                      v-on:submit.prevent="submitForm"
                    >
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="first_name">First Name</label>
                            <input
                              type="text"
                              name="first_name"
                              class="form-control"
                              id="first_name"
                              placeholder="First Name"
                              v-model="employee.first_name"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="last_name">Last Name</label>
                            <input
                              type="text"
                              name="last_name"
                              class="form-control"
                              id="last_name"
                              placeholder="Last Name"
                              v-model="employee.last_name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="email">Email address</label>
                            <input
                              type="email"
                              name="email_address"
                              id="email_address"
                              class="form-control"
                              placeholder="Enter email"
                              v-model="employee.email"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="mobile">Mobile</label>
                            <input
                              type="text"
                              name="mobile"
                              id="mobile"
                              class="form-control"
                              placeholder="Enter Mobile"
                              v-model="employee.mobile"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <label for="password">Password</label>
                            <input
                              type="password"
                              name="password"
                              class="form-control"
                              id="exampleInputPassword1"
                              placeholder="Password"
                              v-model="employee.password"
                            />
                          </div>
                        </div>
                      </div>

                      <!-- /.card-body -->
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: "Dashboard",
  components: {

  },
  props: {},
  data() {
    return {
      empployeeCreateFormAction: `${this.$serverUrl}employee/create`,
      employee: {
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm: function() {
      //var FormDataRes =  new FormData(document.getElementById('employeeForm'))
      this.$axios
        .post(this.empployeeCreateFormAction, this.employee)
        .then((response) => {
          if (response.data.status == 200) {
            this.$router.push("list");
          } else {
            console.log(response);
            console.log(response.data);
            console.log(response.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("loading false");
        });
    },
  },
  beforeMount() {
    // this.empployeeCreateFormAction = `${this.$appName}`;
  },
  beforeCreate: function() {
    //console.log(this.empployeeCreateFormAction); Note Working because this funation will be intialize after mounter

    console.log(this.$appName);
    console.log(this.$serverUrl);
  },
};
</script>
