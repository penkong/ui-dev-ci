// comp -> dispatch -> actions -> commit-> mutations ->
// -> state change -> save store -> getters get

import axios from 'axios';
import VueJwtDecode from "vue-jwt-decode";


//states
const state = {
    username: '',
    lastname: '',
    token: localStorage.getItem('token') || '',
    NidUser: null,
}


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


// actions contact real world apis pre process before sync changes to state
// context .commit
const actions = {
    login({ commit }, authData) {
        axios
            .post(`${process.env.authServer}/users/login`, authData)
            .then(res => {
                console.log(res)
                const { token } = res.data;
                const { NidUser, firstname, lastname } = VueJwtDecode.decode(token);
                localStorage.setItem('token', token)
                commit('authUser', {
                    token,
                    NidUser,
                    firstname,
                    lastname
                });
                this.$router.push('/ci');
            })
            .catch(error => console.log(error))
    },
    logout({ commit }) {
        commit('clearAuthData');
        localStorage.removeItem('token')
        this.$router.push('/');
    },
}


//--------------------------------------------------------------------------
// manipulate state for view ,
const getters = {

};


export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
};