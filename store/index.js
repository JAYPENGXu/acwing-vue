import { createStore } from 'vuex'
import ModuleUser from './user';

export default createStore({
  state: {
    user:{
      id:"",
      username: "",
      firstname: "",
      lastname: "",
    },
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
      user:ModuleUser,
  }
});

