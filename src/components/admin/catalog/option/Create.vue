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
                  <li class="breadcrumb-item active">Add New Options</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="content" style="margin-bottom: 20px">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <router-link :to="{ name: 'admin.catalog.product-option' }">
                  <v-btn color="white" value="profile">
                    <span>Option List</span>
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
                <v-form
                  @submit.prevent="saveManufacturers"
                  enctype="multipart/form-data"
                >
                  <div class="card card-primary card-outline">
                    <div class="card-header">
                      <v-btn depressed type="submit" color="primary">
                        Save
                      </v-btn>
                    </div>
                    <div class="card-body">
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-text-field
                              label="Option Name"
                              v-model="manufacturer.name"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-autocomplete
                              v-model="friends"
                              :disabled="isUpdating"
                              :items="people"
                              filled
                              chips
                              color="blue-grey lighten-2"
                              label="Select"
                              item-text="name"
                              item-value="value" dense>
                              <template v-slot:selection="data">
                                <v-chip
                                  v-bind="data.attrs"
                                  :input-value="data.selected"
                                  close
                                  @click="data.select"
                                  @click:close="remove(data.item)"
                                >
                                  {{ data.item.name }}
                                </v-chip>
                              </template>
                              <template v-slot:item="data">
                                <template v-if="typeof data.item !== 'object'">
                                  <v-list-item-content
                                    v-text="data.item"
                                  ></v-list-item-content>
                                </template>
                                <template v-else>
                                  <v-list-item-content>
                                    <v-list-item-title
                                      v-html="data.item.name"
                                    ></v-list-item-title>
                                    <v-list-item-subtitle
                                      v-html="data.item.group"
                                    ></v-list-item-subtitle>
                                  </v-list-item-content>
                                </template>
                              </template>
                            </v-autocomplete>
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
                              @change="setStatusValue">
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
    watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
    },
    props: {},
    data() {
        return {
            isUpdating: false,
            autoUpdate: true,
            friends: { name: "Radio",   value:'radio', group: "Choose"},
            name: 'Midnight Crew',
            title: 'The summer breeze',
            selectStatus: { text: "Active", textvalue: "A" },
            statusItems: [
                { text: "Active", textvalue: "A" },
                { text: "Save in draft", textvalue: "P"},
            ],
            file: null,
            manufacturer: {
                name: "Canon",
                store: "Canon",
                seo_keyword: "Canon",
                status: "A",
                priority: 1,
            },

            people: [
                { header: "Choose" },
                { name: "Select",  value:'select', group: "Choose"},
                { name: "Radio",   value:'radio', group: "Choose"},
                { name: "Checkbox",value:'radio', group: "Choose"},
                { divider: true },
                { header: "Input" },
                { name: "Text", value:'text', group: "Input" },
                { name: "Text Area", value:'textarea', group: "Input"},
                { divider: true },
                { header: "File" },
                { name: "file", value:'file', group: "File" },
                { divider: true },
                { header: "Date" },
                { name: "Date", value:'date', group: "Date" },
                { name: "Time", value:'time', group: "Date" },
                { name: "Date & Time", value:'date_time', group: "Date" },
            ],
        };
    },
    methods: {
        remove (item) {
          console.log(item)
          this.friends = [];
          // /const index = this.friends.indexOf(item.name);
          //if (index >= 0) this.friends.splice(index, 1)
        },
        setStatusValue: function (value) {
            this.manufacturer.status = value;
        },
        onBrandFileChange: function (event) {
            this.file = event;
        },
        saveManufacturers: function () {
            let formData = new FormData();
            formData.append("image", this.file);
            formData.append("form_data", JSON.stringify(this.manufacturer));
            let action = `${this.$serverUrl}catalog/manufacturer/create`;
            this.$axios
                .post(action, formData, {
                headers: this.$helper.authHeader(),
                })
                .then((response) => {
                if (response.data.status == 300) {
                    //manage form validation error
                    //console.log(response);
                } else if (response.data.status == 200) {
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
    beforeCreate: function () {},
    created() {},
};
</script>
