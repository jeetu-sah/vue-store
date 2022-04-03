<template>
  <div>
    <div class="row">
        <div class="col-sm-12">
            <div class="alert alert-danger" role="alert" v-show="validation.status == 501">
                {{validation.msg}}
            </div>
            <div class="alert alert-success" role="alert" v-show="validation.status == 200">
                {{validation.msg}}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormValidation",
  props:['validation'],
  data() {
      return {
          formResponseArr:[],
          formValidateResponse:{},
          msg:"Something went wrong, please try again",
      }
  },
  mounted() {
      
  },

};
</script>
