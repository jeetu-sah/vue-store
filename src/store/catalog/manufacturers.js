const state = () =>{
    
}


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