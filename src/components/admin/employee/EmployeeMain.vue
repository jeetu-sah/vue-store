<template>
  <div>
    <div class="wrapper">
      <Sidebar />
         <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>
<script>
import Sidebar from "../../admin/layout/Sidebar.vue";
import Footer from "../../admin/layout/Footer.vue";

export default {
  name: "EmployeeMain",
  components: {
    Sidebar,
    Footer,
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
