<template>
  <div>
     <button class="btn btn-danger">Delete</button>&nbsp;
     <!-- <router-link :to="{ name: 'admin.catalog.attribute-group.create' }" class="btn btn-primary">Edit</router-link> -->
  </div>
</template>

<script>


export default {
   

  name: "DeleteBtn",
  data() {
      return {
          msg:"Something went wrong, please try again",
      }
  },
  methods: {
        deleteAttributeGroup:function() {
            var selectedData = this.agGrid.api.getSelectedRows();
            console.log(selectedData)
            console.log("Delete Method Call")
           
        }
  },
};
</script>
