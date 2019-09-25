//
import axios from 'axios';
import { Base64 } from 'js-base64';

// comp -> dispatch -> actions -> commit-> mutations ->
// -> state change -> save store -> getters get
//------------------------------------ states -----------------------------------------
//states
const state = {
    username: '',
    lastname: '',
    token: localStorage.getItem('token') || '',
    NidUser: null,
}

//--------------------------------- mutations --------------------------------------
// mutate state and dispatch changes state changers
const mutations = {
    authUser(state, userData) {
        const {
            token,
            NidUser,
            firstname,
            lastname,
        } = userData;
        state.token = token;
        state.NidUser = NidUser;
        state.firstname = firstname;
        state.lastname = lastname;
    },
    storeUser(state, user) {
        state.user = user;
    },
    clearAuthData(state) {
        state.token = null;
        state.NidUser = null;
        state.firstname = null;
        state.lastname = null;
    }
}

//--------------------------------- actions ------------------------------------------
// actions contact real world apis pre process before sync changes to state
// context.commit or state
const actions = {
    fetchUser({ state }) {
        if (!state.token) {
            this.$router.push('/');
        }
    },
    login({ commit }, authData) {
        axios
            .post(`${process.env.authServer}/users/login`, authData)
            .then(res => {
                const { token } = res.data;
                const splitted = token.split('.');
                const {
                    NidUser,
                    firstname,
                    lastname
                } = JSON.parse(Base64.decode(splitted[1]));
                localStorage.setItem('token', token);
                commit('authUser', {
                    token,
                    NidUser,
                    firstname,
                    lastname
                });
                this.$router.push('/ci');
            })
            .catch(error => console.log(error));
    },
    logout({ commit }) {
        commit('clearAuthData');
        localStorage.removeItem('token')
        this.$router.push('/');
    },
}


//----------------------------- getters --------------------------------
// manipulate state for view ,
const getters = {
    userForHeader: (state) => {
        const { firstname, lastname } = state;
        return `${firstname} ${lastname}`;
    },
    isAuthenticated: (state) => state.token !== null
};



//---------------------------- export module -------------------------------
export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
};
