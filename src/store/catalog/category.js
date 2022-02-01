// See: https://vuex.vuejs.org/en/modules.html#module-reuse
const state = () => ({
  // Pre-fill one row with an
  categories:'categoried',

});


const mutations = {

};

const getters = {
  getCategories: (state) => {
    return state.categories;
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
