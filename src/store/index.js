import { createStore } from "vuex";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const store = createStore({
  state: {
    heroes: [],
  },
  getters: {
    GET_HERO: (state) => (id) => {
      return state.heroes.find((hero) => hero.id === id);
    },
  },
  mutations: {
    ADD_HERO: (state, obj) => {
      state.heroes = [...state.heroes, obj];
    },
    RESET_HEROES: (state) => {
      state.heroes = [];
    },
  },
  actions: {
    fetchFire: async ({ commit }) => {
      commit("RESET_HEROES");
      try {
        const querySnapshot = await getDocs(collection(db, "heroesStorm"));
        for (let doc of querySnapshot.docs) {
          commit("ADD_HERO", { id: doc.id, ...doc.data() });
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
});

export default store;
