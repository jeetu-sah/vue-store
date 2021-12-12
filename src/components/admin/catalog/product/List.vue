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
                  <li class="breadcrumb-item active">Product List</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="content" style="margin-bottom:20px;">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <router-link 
                  class="btn btn-success" 
                  to="/admin/employee/create"
                  >Add New Product</router-link
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
                    <h5 class="m-0">Employee List</h5>
                  </div>
                  <div class="card-body">
                    <ag-grid-vue
                      style="height: 500px;"
                      class="ag-theme-alpine"
                      :columnDefs="columnDefs"
                      :rowData="rowData"
                      :pagination='true'
                      :paginationAutoPageSize ='true'
                    >
                    </ag-grid-vue>
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
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "Dashboard",
  components: {
    AgGridVue,
  },
  props: {},
  data() {
    return {
      empployeeCreateFormAction: `${this.$serverUrl}api/employee/list`,
      columnDefs: null,
      rowData: null,
      responseData:'Jitendra sahu',
    };
  },
  methods: {
    loadEmployee: function() {
      console.log(this.empployeeCreateFormAction);
      this.$axios
        .get(this.empployeeCreateFormAction, this.employee)
        .then((response) => {
          this.rowData = response.data.response;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("loading false");
        });
    },
  },
  mounted() {
    this.loadEmployee();
  },
   beforeMount() {
    this.columnDefs = [
      { field: "name",sortable: true, filter: true,checkboxSelection: true   },
      { field: "email",sortable: true, filter: true },
      { field: "price",sortable: true, filter: true },
    ];
    //load employee data.
    this.loadEmployee();
    // this.rowData = [
    //   { make: "Toyota", model: "Celica", price: 35000 },
    //   { make: "Ford", model: "Mondeo", price: 32000 },
    //   { make: "Porsche", model: "Boxter", price: 72000 },
    // ];
  },
};
</script>
