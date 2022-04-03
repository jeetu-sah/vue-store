import Vue from "vue";
import Vuex from "vuex";
import category from './catalog/category';  
import attribute from "./catalog/attribute";  

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    category,
    attribute,
  },
  state: {
    formFieldType: {
      text: "Text",
      select: "Select",
      multiselect: "Multi Select",
      file: "File",
      number: "Number",
    },
    status: [
      {
        key: "A",
        value: "Active",
      },
      {
        key: "P",
        value: "Save In Draft",
      },
    ],
  },
  getters: {
    // put sychronous functions for changing state e.g. add, edit, delete
    getFormFieldType: (state) => {
      return state.formFieldType;
    },
  },
  mutations: {
    // put sychronous functions for changing state e.g. add, edit, delete
    changeFormFieldType(state, formFieldType) {
      state.formFieldType = formFieldType;
    },
  },
});
store.state.a // -> `moduleA`'s state
store.state.attribute; // -> `moduleB`'s state
export default store;
