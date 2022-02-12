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
                  <li class="breadcrumb-item active">Attribute List</li>
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
                  :to="{name: 'admin.catalog.attribute.create'}"
                  >Add New Attribute</router-link
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
                    <h5 class="m-0">Attribute List</h5>
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
      attributeListAction: `${this.$serverUrl}${this.$api.post.list_attribute}`,
      columnDefs: null,
      rowData: null,
      responseData:'Jitendra sahu',
    };
  },
  methods: {
    loatAttributesList: function() {
      this.$axios
        .post(this.attributeListAction, this.employee,{
            headers: this.$helper.authHeader()
        })
        .then((response) => {
          this.rowData = response.data.response;
        })
        .catch((error) => {
          console.log(error);
        })
    },
  },
  mounted() {
     //set title
    document.title = this.$appName + " | Attribute List"; 
    //load attributes
    this.loatAttributesList();
  },
   beforeMount() {
    
    this.columnDefs = [
      { headerName: 'Attribute Type',field: "attribute_type",sortable: true, filter: true,checkboxSelection: true   },
      { headerName: 'Attribute Name', field: "attribute_name",sortable: true, filter: true },
      { headerName: 'Attribute Desc.', field: "attribute_desc",sortable: true, filter: true },
      { headerName: 'Attribute Status', field: "attribute_status",sortable: true, filter: true },
      { headerName: 'Is Required', field: "is_required",sortable: true, filter: true },
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
