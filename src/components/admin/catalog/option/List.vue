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
                  <li class="breadcrumb-item active">Option List</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="content" style="margin-bottom: 20px">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <router-link
                  :to="{ name: 'admin.catalog.product-option.create' }"
                >
                  <v-btn color="white" flat value="profile">
                    <span>Create New Option</span>
                  </v-btn>
                </router-link>
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
                    <h5 class="m-0">Option List</h5>
                  </div>
                  <div class="card-body">
                    <v-data-table
                      :headers="headers"
                      :items="manufacturerList"
                      sort-by="calories"
                      class="elevation-1"
                    >
                      <template v-slot:item.priority="{ item }" name="priority">
                        <v-chip
                          color="orange"
                          text-color="white">
                          {{ item.priority }}
                        </v-chip>
                      </template>
                      <template v-slot:item.status="{ item }" name="status">
                        <v-chip
                          :color="getStatusColor(item.status)"
                          text-color="white">
                          {{ getStatusText(item.status) }}
                        </v-chip>
                      </template>
                      <template v-slot:item.image_path="{ item }" name="image">
                           <v-avatar
                              size="40px"
                              tile
                            >
                              <img
                                alt="Avatar"
                                :src="item.image_path"
                              >
                            </v-avatar>
                      </template>

                      <template v-slot:top>
                        <v-toolbar flat>
                          <v-toolbar-title>My CRUD</v-toolbar-title>
                          <v-divider class="mx-4" inset vertical></v-divider>
                          <v-spacer></v-spacer>
                          <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                color="primary"
                                dark
                                class="mb-2"
                                v-bind="attrs"
                                v-on="on"
                              >
                                New Item
                              </v-btn>
                            </template>
                            <v-card>
                              <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                              </v-card-title>

                              <v-card-text>
                                <v-container>
                                  <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-text-field
                                        v-model="editedItem.name"
                                        label="Dessert name"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-text-field
                                        v-model="editedItem.calories"
                                        label="Calories"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-text-field
                                        v-model="editedItem.fat"
                                        label="Fat (g)"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-text-field
                                        v-model="editedItem.carbs"
                                        label="Carbs (g)"
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                      <v-text-field
                                        v-model="editedItem.protein"
                                        label="Protein (g)"
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </v-card-text>

                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="blue darken-1"
                                  text
                                  @click="close"
                                >
                                  Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="save">
                                  Save
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                          <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                              <v-card-title class="text-h5"
                                >Are you sure you want to delete this
                                item?</v-card-title
                              >
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                  color="blue darken-1"
                                  text
                                  @click="closeDelete"
                                  >Cancel</v-btn
                                >
                                <v-btn
                                  color="blue darken-1"
                                  text
                                  @click="deleteItemConfirm"
                                  >OK</v-btn
                                >
                                <v-spacer></v-spacer>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </v-toolbar>
                      </template>
                      <template v-slot:item.actions="{ item }">
                        <v-icon small class="mr-2" @click="editItem(item)">
                          mdi-pencil
                        </v-icon>
                        <v-icon small @click="deleteItem(item)">
                          mdi-delete
                        </v-icon>
                      </template>
                      <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">
                          Reset
                        </v-btn>
                      </template>
                    </v-data-table>
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
  name: "List",
  props: {},
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  data() {
    return {
     dialog:null,
      dialogDelete:null,
      categoryListPath: `${this.$serverUrl}categoty/list`,
      columnDefs: null,
      rowData: null,
      responseData: "Jitendra sahu",
      headers: [
        { text: "Image", align: "start",sortable: false, value: "image_path"},
        { text: "Manufacturer Name", align: "start",sortable: false, value: "name"},
        { text: "Seo Keyword", value: "seo_keyword" },
        { text: "Priority", value: "priority" },
        { text: "Status", value: "status" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [],
      manufacturerList: [],
      editedIndex: -1,
      editedItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    };
  },
  methods: {
    getStatusText:function(status){
      if (status == 'A') return 'Active'
      else if (status == 'P') return 'Save in Draft'
    },
    getStatusColor:function(status){
      if (status == 'A') return 'green'
      else if (status == 'P') return 'red'
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    initialize: function () {
      let action = 'catalog/manufacturer/list';
      this.$root.appPostData(action)
                .then((result) => {
                  this.manufacturerList = result.data.response;
                }).catch((err) => {
                      console.log(err);
                });
    },
  },
  created() {
    console.log("create life cycle event")
  },
  mounted() {
    this.initialize();
  },
};
</script>
