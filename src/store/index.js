import { createStore } from "vuex";
import { useRouter } from "vue-router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
const router = useRouter();
const store = createStore({
  state: {
    heroes: [],
    user: null,
    isAuthenticated: false,
  },
  getters: {
    GET_HERO: (state) => (id) => {
      return state.heroes.find((hero) => hero.id === id);
    },
    GET_MAIL: (state) => {
      console.log(state.user);
      if (state.user == null) {
        return "";
      }
      return state.user.email;
    },
  },
  mutations: {
    ADD_HERO: (state, obj) => {
      state.heroes = [...state.heroes, obj];
    },
    RESET_HEROES: (state) => {
      state.heroes = [];
    },

    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
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
    checkAuth({ commit }) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          commit("setUser", user);
        } else {
          commit("clearUser");
        }
      });
    },
    logout({ commit }) {
      auth.signOut().then(() => {
        commit("clearUser");
      });
    },
  },
});

export default store;
