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
                      style="height:500px; width:100%"
                      class="ag-theme-alpine"
                      :columnDefs="columnDefs"
                      :rowData="rowData"
                      @cell-clicked="onCellClicked"
                      :pagination='true'
                      rowSelection='multiple'
                      :paginationAutoPageSize ='true'
                      @grid-ready="onGridReady"
                      :defaultColDef="defaultColDef"
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
import CatchMethods from '../../../../mixins/CatchMethods';

// var statusValue = function (params) {

//   console.log(params)
//   return params;
// };

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
      columnApi: null,
      statusArr: this.$store.state.status,
    };
  },
  methods: {
    onCellClicked(params) {
      if(params.column.colId === "Action"){
        let action = params.event.target.dataset.action;
        var id = params.node.data.id;
          console.log(id);
        if(action == "delete"){
            console.log(id);
          }else if(action == "edit"){
              this.$router.push({ name: 'admin.catalog.attribute-group.edit', params: { id:id}});            
          }
      }
      
      // Handle click event for action cells
      // if (
      //   params.column.colId === 'action' &&
      //   params.event.target.dataset.action
      // ) {
      //   let action = params.event.target.dataset.action;

      //   if (action === 'edit') {
      //     params.api.startEditingCell({
      //       rowIndex: params.node.rowIndex,
      //       // gets the first columnKey
      //       colKey: params.columnApi.getDisplayedCenterColumns()[0].colId,
      //     });
      //   }

      //   if (action === 'delete') {
      //     params.api.applyTransaction({
      //       remove: [params.node.data],
      //     });
      //   }

      //   if (action === 'update') {
      //     params.api.stopEditing(false);
      //   }

      //   if (action === 'cancel') {
      //     params.api.stopEditing(true);
      //   }
      // }
    },
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
      console.log("Delete Method")
      // this.rowData.splice(params.rowData.index, 1);
      // console.log(this.rowData);
      // this.api.updateRowData({ remove: [params.rowData] });
      // this.api.forEachNode(node => {
      //   console.log(node.data);
      // });
      // return this.rowData;
    },
    statusValue:function(params){
      const found = this.statusArr.find(element => (element.key == params.data.status));
      return found.value;
    }
  },
  mounted() {
    this.loadAttributeGroup();
  },
  beforeMount() {
    this.columnDefs = [
      { field: "name",sortable: true, filter: true,checkboxSelection: true   },
      { field: "priority",sortable: true, filter: true },
      { field: "status",sortable: true, filter: true,valueGetter: this.statusValue },
      { field: "Action",
        editable: false,
        colId: 'Action',
        cellRenderer: 'DeleteBtn',
        cellRendererParams: {
          onClick: this.deleteAttributeGroup(this),
        },
      },
    ];

    this.defaultColDef = {
      editable: true,
    };

  },
};
</script>
