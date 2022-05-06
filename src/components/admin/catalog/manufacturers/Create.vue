<template>
  <div id="createManufacturer">
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
                  <li class="breadcrumb-item active">Add New Manufacturers</li>
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
                  :to="{ name: 'admin.catalog.manufacturers'}"
                  >
                    <v-btn
                        color="white"
                        value="profile">
                        <span>Manufacturers List</span>
                    </v-btn>
                </router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <v-form @submit.prevent="saveManufacturers" enctype="multipart/form-data">
                    <div class="card card-primary card-outline">
                        <div class="card-header">
                            <v-btn
                                    depressed
                                    type="submit"
                                    color="primary">
                                    Save
                                </v-btn>
                        </div>
                        <div class="card-body">
                            <v-container>
                                <v-row>
                                <v-col cols="12" sm="12">
                                    <v-text-field
                                    label="Manufacturer Name"
                                    v-model="manufacturer.name"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="12">
                                    <v-textarea
                                    name="input-5-1"
                                    label="SEO Keywords"
                                    v-model="manufacturer.seo_keyword"
                                    ></v-textarea>
                                </v-col>
                                </v-row>
                                <v-row>
                                <v-col cols="12" sm="6">
                                    <!-- <input type="file" 
                                        name="picture" 
                                        class="form-control-file" 
                                        id="picture" 
                                        @change="onBrandFileChange" /> -->
                                    <v-file-input
                                      truncate-length="15"
                                      label="Manufacturer Image"
                                      chips
                                      show-size
                                      @change="onBrandFileChange"
                                    ></v-file-input>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                    label="Sort Order"
                                    v-model="manufacturer.priority"
                                    ></v-text-field>
                                </v-col>
                                </v-row>
                                <v-row>
                                <v-col cols="12" sm="12">
                                    <v-select
                                        v-model="selectStatus"
                                        :items="statusItems"
                                        item-text="text"
                                        item-value="textvalue"
                                        label="Select Status"
                                        persistent-hint
                                        single-line
                                        attach
                                        @change="setStatusValue"
                                        >
                                    </v-select>
                                </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </div>
                </v-form>
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
  name: "Create",
  components: {},
  props: {},
  data() {
    return {
        selectStatus: { text: 'Active', textvalue: 'A' },
        statusItems:[  
           { text: 'Active', textvalue: 'A' },
           { text: 'Save in draft', textvalue: 'P' },
        ],
        file:null,
        manufacturer: {
          "name": "Canon",
          "store": "Canon",
          "seo_keyword": "Canon",
          "status": 'A',
          "priority": 1,
        },
    };
  },
  methods: {
    setStatusValue:function(value){
        this.manufacturer.status = value;
    },
    onBrandFileChange:function(event){
      this.file = event;
    },
    saveManufacturers: function () {
      let formData = new FormData();
          formData.append('image',this.file);
          formData.append('form_data',JSON.stringify(this.manufacturer));
      let action = `${this.$serverUrl}catalog/manufacturer/create`;
      this.$axios
        .post(action, formData, {
          headers: this.$helper.authHeader(),
        })
        .then((response) => {
          if(response.data.status == 300){
            //manage form validation error 
            //console.log(response);
          }else if(response.data.status == 200){
            this.$root.successMsg(response.data.msg);
            console.log(response);
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
  beforeCreate: function () {
   
  },
  created() {
    
  },
};
</script>
