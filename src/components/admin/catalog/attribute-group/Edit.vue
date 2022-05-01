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
                  <li class="breadcrumb-item active">Edit Attribute Group</li>
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
                      v-on:submit.prevent="submitEditForm"
                    > 
                        <div class="card-header">
                            <button type="submit" class="btn btn-primary">
                                Edit
                            </button>
                            &nbsp;&nbsp;
                            <router-link class="btn btn-warning"
                                :to="{ name: 'admin.catalog.attribute-group.list'}"
                                >Back</router-link
                            >
                        </div>
                        <div class="card-body">
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
        url_data:null,
        attribute_group: {
            name:null,
            status:null,
            priority:0,
        },
        statusArr: this.$store.state.status,
    };
  },
  methods: {
    submitEditForm:function(){
        let editUrl = `${this.$serverUrl}api/catalog/attribute-group/update/${this.$route.params.id}`;
        this.$axios
        .post(editUrl, this.attribute_group,{
            headers: this.$helper.authHeader()
        }).then((response) => {
          console.log(response)
            if(response.data.status == 200){
              this.$root.successMsg(response.data.msg);
            }else{
              this.$root.errorMsg();
            }
        })
        .catch(() => {
            this.$root.errorMsg();
        })
    },
    attributeData:function(id){
       this.$axios
        .post(`${this.$serverUrl}api/catalog/attribute-group/show/${id}`, this.attribute_group,{
            headers: this.$helper.authHeader()
        }).then((response) => {
          console.log(response);
          this.attribute_group.name = response.data.response.name;
          this.attribute_group.status = response.data.response.status;
          this.attribute_group.priority = response.data.response.priority;
        })
        .catch(() => {
          this.$root.errorMsg();
        })
    }
  },
  mounted() {
    //load mounted data.
    this.attributeData(this.$route.params.id)
  },
  created() {
    
  },
};
</script>
