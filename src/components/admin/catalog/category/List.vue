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
                  <li class="breadcrumb-item active">Employee List</li>
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
                  :to="{ name: 'admin.catalog.category.create' }"
                
                  >Create New Category</router-link
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
                    <h5 class="m-0">Category List</h5>
                  </div>
                  <div class="card-body">
                    <ag-grid-vue
                      style="height: 500px; width:100%"
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
      categoryListPath: `${this.$serverUrl}api/categoty/list`,
      columnDefs: null,
      rowData: null,
      responseData:'Jitendra sahu',
    };
  },
  methods: {
    loadCategoryList: function() {
      console.log(this.$helper.authHeader);
      this.$axios
        .get(this.categoryListPath,{
            headers: this.$helper.authHeader()
        })
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
    this.loadCategoryList();
    //load category.
    console.log("List category page")
    console.log(this.$store.state.a.categories);
   
  },
   beforeMount() {
    this.columnDefs = [
      { field: "name",sortable: true, filter: true,checkboxSelection: true   },
      { field: "description",sortable: true, filter: true },
      { field: "status",sortable: true, filter: true },
    ];
    //load employee data.
    this.loadCategoryList();
  },
};
</script>
