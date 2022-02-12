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
                  <li class="breadcrumb-item active">Add New Attribute</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="content" style="margin-bottom:20px;">
          <div class="container-fluid">
            <div class="row">
              <notifications>Show On pahe</notifications>
              <notifications
                  v-if="showMsg"
                  notification="A notification on page load"></notifications>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <router-link class="btn btn-success"
                  :to="{ name: 'admin.catalog.attribute'}"
                  >Attribute List</router-link
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
                    <h5 class="m-0">Add New Attribute</h5>
                  </div>
                  <div class="card-body">
                    <form
                      id="employeeForm"
                      role="form"
                      :action="attributeActionForm"
                      v-on:submit.prevent="submitForm"
                    >
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="first_name">Field Types</label>
                            <select name="field_type" 
                                  class="form-control" 
                                  v-model="attributes.type"
                                  id="field_type">
                                <option value="hidden">Select attribute type</option>
                                <option v-for="(fieldType, fieldTypeIndex) in formFieldTypes" 
                                    :value="fieldTypeIndex"
                                    :key="fieldTypeIndex">{{fieldType}}</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="last_name">Attribute Label Name</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Attribute Label Name"
                              v-model="attributes.label_name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="status">Status</label>
                            <select name="attribute_status" 
                                  class="form-control" 
                                   v-model="attributes.attribute_status"
                                  id="attribute_status">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="status">Is Required?</label>
                            <select name="attribute_status" 
                                  class="form-control" 
                                   v-model="attributes.is_required"
                                  id="is_required">
                                <option value="YES">Yes</option>
                                <option value="NO">No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <label for="description">Description</label>
                            <textarea
                              name="description"
                              class="form-control"
                              id="description"
                              placeholder="Description"
                              v-model="attributes.description"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <!-- /.card-body -->
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
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
  name: "Create",
  components: {

  },
  props: {},
  data() {
    return {
      attributeActionForm: `${this.$serverUrl}${this.$api.post.create_attribute}`,
      showMsg:true,
      attributes: {
        type: "hidden",
        label_name: "",
        attribute_status: "active",
        is_required:'YES',
        description: "",
      },
      formFieldTypes:null,
    };
  },
  methods: {
    submitForm: function() {
      //var FormDataRes =  new FormData(document.getElementById('employeeForm'))
      this.$axios
        .post(this.attributeActionForm, this.attributes,{
            headers: this.$helper.authHeader()
        }).then((response) => {
          if(response.status == 200){
            console.log(response.data.status);
            if(response.data.status){
              
              //console.log(response)
            }
          }
        })
        .catch((error) => {
          console.log(error);
        })
    },
  },
  mounted() {  
    //set title
    document.title = this.$appName + " | Create Attribute"; 
    //get Field type record.
    this.formFieldTypes = this.$store.getters['attribute/getAttributes'];
    //this.formFieldTypes = this.$store.attribute.getters.getFormFieldType;

  },  
};
</script>
