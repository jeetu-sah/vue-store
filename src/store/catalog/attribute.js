// See: https://vuex.vuejs.org/en/modules.html#module-reuse
const state = () => ({
  // Pre-fill one row with an
  attributesType: {
        text: "Text",
        select: "Select",
        multiselect: "Multi Select",
        file: "File",
        number: "Number",
    },
});

const mutations = {};

const getters = {
  getAttributes: (state) => {
    return state.attributesType;
  },
};

export default {
  // We're using namespacing
  // in all of our modules.
  namespaced: true,
  mutations,
  getters,
  state,
};
