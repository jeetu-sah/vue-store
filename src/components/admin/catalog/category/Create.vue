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
                  <li class="breadcrumb-item active">Add New Category</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="content" style="margin-bottom:20px;">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <router-link class="btn btn-success"
                  :to="{ name: 'admin.catalog.category'}"
                  >Category List</router-link
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
                    <h5 class="m-0">Add New Category</h5>
                  </div>
                  <div class="card-body">
                    <form
                      id="employeeForm"
                      role="form"
                      :action="actionUrl.categoryCreateUrl"
                      v-on:submit.prevent="submitForm"
                    >
                       <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="email">Status</label>
                            <select  v-model="category.parent_category" 
                                  class="form-control" 
                                  id="parent_category"
                                  name="parent_category">

                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <label for="first_name">Category Name</label>
                            <input
                              type="text"
                              name="name"
                              class="form-control"
                              id="name"
                              placeholder="Category Name"
                              v-model="category.name"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <label for="last_name">Description</label>
                            <textarea
                              type="text"
                              name="description"
                              class="form-control"
                              id="description"
                              placeholder="Description"
                              v-model="category.description">
                            </textarea>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="email">Status</label>
                            <select  v-model="category.status" class="form-control" name="status">
                              <option value="A">Active</option>
                              <option value="P">Save in draft</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="form-group">
                            <label for="mobile">Priority</label>
                            <input
                              type="number"
                              name="priority"
                              id="priority"
                              class="form-control"
                              placeholder="Priority"
                              v-model="category.priority"
                            />
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
      actionUrl:{
        categoryCreateUrl: `${this.$serverUrl}api/categoty/create`,
        parentCategoryUrl: `${this.$serverUrl}api/categoty/parent-category`,
      },
      category: {
        parent_category:"",
        name: "",
        description: "",
        status: "A",
        priority:1,
      },
    };
  },
  methods: {
    submitForm: function() {
      //var FormDataRes =  new FormData(document.getElementById('employeeForm'))
      this.$axios
        .post(this.actionUrl.categoryCreateUrl, this.category, {
            headers: this.$helper.authHeader()
        })
        .then((response) => {
          if (response.status == 200) {
            this.getParentCategory();
           
          } else {
            // console.log(response);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("loading false");
        });
    },
    getParentCategory:function(){
      this.$axios
        .post(this.actionUrl.parentCategoryUrl,{}, {
            headers: this.$helper.authHeader()
        })
        .then((response) => {
          if (response.data.status == 200) {
            document.getElementById('parent_category').innerHTML = response.data.response;
          } else {
            // console.log(response);
            // console.log(response.data);
            // console.log(response.data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("loading false");
        });
    }
  },
  beforeMount() {
    // this.empployeeCreateFormAction = `${this.$appName}`;
  },
  beforeCreate: function() {
    //console.log(this.empployeeCreateFormAction); Note Working because this funation will be intialize after mounter
    // console.log();
    // console.log(this.$appName);
    // console.log(this.$serverUrl);
  },
  created() {
    this.getParentCategory();
  },
};
</script>
