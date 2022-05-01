<template>
  <div>
     <button class="btn btn-primary">Edit</button>&nbsp;
     <!-- <router-link :to="{ name: 'admin.catalog.attribute-group.create' }" class="btn btn-primary">Edit</router-link> -->
  </div>
</template>

<script>


export default {
   
  name: "EditBtn",
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
