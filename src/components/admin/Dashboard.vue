<template>
  <div>
    <div class="wrapper">
      <Sidebar />
        <div class="content-wrapper">
          <div class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1 class="m-0 text-dark">{{this.$config.BASE_URL}}</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Starter Page</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card card-primary card-outline">
                    <div class="card-header">
                      <h5 class="m-0">Featured</h5>
                    </div>
                    <div class="card-body">
                      <h6 class="card-title">Special title treatment</h6>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" class="btn btn-primary" @click="showMsg">Go somewhere</a>
                          <v-main>
                            Hello World
                          </v-main>
                          <v-alert
                              border="bottom"
                              color="indigo"
                              dark
                            >
                              I'm an alert with a bottom border and pink color
                          </v-alert>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import Sidebar from '../admin/layout/Sidebar.vue';
import Footer from '../admin/layout/Footer.vue';

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Footer
  },
  methods: {
    showMsg:function(){
      this.$root.successMsg("Something went wrong, please try again")
    }
  },
  beforeCreate: function() {
    console.log(this.$appName)
    console.log(this.$serverUrl)
  },
  props: {},
};
</script>
