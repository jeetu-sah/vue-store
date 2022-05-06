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
                  <li class="breadcrumb-item active">Create Attribute Group</li>
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
                  :to="{ name: 'admin.catalog.attribute-group.list'}"
                  >Attribute Group List</router-link
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
                    <form
                      id="employeeForm"
                      role="form"
                      v-on:submit.prevent="submitForm"
                    > 
                        <div class="card-header">
                            <button type="submit" class="btn btn-primary">
                                Save
                            </button>
                        </div>
                        <div class="card-body">
                            <FormValidation :validation="validation" />
                            
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="first_name">Attribute Group</label>
                                        <input
                                            type="text"
                                            name="attribute_group"
                                            class="form-control"
                                            placeholder="Attribute Group"
                                            v-model="attribute_group.name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                <div class="form-group">
                                    <label for="email">Status</label>
                                    <select  v-model="attribute_group.status" class="form-control" name="status">
                                    <option v-for="(status , index) in statusArr" :key="index" :value="status.key">{{status.value}}</option>
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
                                    v-model="attribute_group.priority"
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                    </form>
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
        attributeGroupUrl:`${this.$serverUrl}api/catalog/attribute-group/create`,
        validation:{
            status:false,
            msg:'',
        },
        attribute_group: {
            name: "Memory",
            status: "A",
            priority:1,
        },
      statusArr: this.$store.state.status,
    };
  },
  methods: {
    submitForm:function(){
        this.validation.status = false;
        this.$axios
        .post(this.attributeGroupUrl, this.attribute_group,{
            headers: this.$helper.authHeader()
        }).then((response) => {
            this.validation.status = response.data.status;
            if(response.data.status == 200){
                //show success msg
                this.validation.msg = response.data.msg;
            }else{
                this.validation.msg = response.data.response;
            }  
        })
        .catch(() => {
            this.validation.status = 501;
            this.validation.msg = `Something went wrong, please try again`;
        })
    }
  },
  mounted() {
      
  },
};
</script>
