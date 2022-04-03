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
                  <li class="breadcrumb-item active">Attribute Group List</li>
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
                  :to="{ name: 'admin.catalog.attribute-group.create' }"
                
                  >Attribute Group List</router-link>
                  &nbsp;
                  <button class="btn btn-danger" @click="getSelectedRows()">Delete All</button>
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
                    <h5 class="m-0">Attribute Group List</h5>
                  </div>
                  <div class="card-body">
                    <ag-grid-vue
                      style="height: 500px; width:100%"
                      class="ag-theme-alpine"
                      :columnDefs="columnDefs"
                      :rowData="rowData"
                      :pagination='true'
                      rowSelection='multiple'
                      :paginationAutoPageSize ='true'
                      @grid-ready="onGridReady"
                     
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
import CatchMethods from '../../../../mixins/CatchMethods'

export default {
  name: "Dashboard",
  mixins: [CatchMethods],
  components: {
    AgGridVue,
  },
  props: {},
  data() {
    return {
      attributeGroupList: `${this.$serverUrl}api/catalog/attribute-group/list`,
      columnDefs: null,
      rowData: null,
      gridApi: null,
      columnApi: null
    };
  },
  methods: {
    onGridReady(params) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;
    },
     getSelectedRows() {
        const selectedNodes = this.gridApi.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data );
        //const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ');
        console.log(selectedData)
    },
    loadAttributeGroup: function() {
      this.$axios
        .post(this.attributeGroupList,{},{
            headers: this.$helper.authHeader()
        })
        .then((response) => {
          this.rowData = response.data.response;
        })
        .catch((error) => {
          //check the server header status code
          this.checkHeaderStatusCode(error.response.status)
        })
        .finally(() => {
            console.log("loading false");
        });
    },
    deleteAttributeGroup:function() {
      console.log("Delete Method ")
      // this.rowData.splice(params.rowData.index, 1);
      // console.log(this.rowData);
      // this.api.updateRowData({ remove: [params.rowData] });
      // this.api.forEachNode(node => {
      //   console.log(node.data);
      // });
      // return this.rowData;
    }
  },
  mounted() {
    this.loadAttributeGroup();
  },
  beforeMount() {
    this.columnDefs = [
      { field: "name",sortable: true, filter: true,checkboxSelection: true   },
      { field: "priority",sortable: true, filter: true },
      { field: "status",sortable: true, filter: true },
      { field: "Action",
        cellRenderer: 'DeleteBtn',
        cellRendererParams: {
          onClick: this.deleteAttributeGroup(this),
        },
      },
    ];
  },
};
</script>
