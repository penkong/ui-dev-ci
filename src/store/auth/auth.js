// comp -> dispatch -> actions -> commit-> mutations ->
// -> state change -> save store -> getters get
import {
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_LOGOUT,
    USER_REQUEST
} from '../actions/auth'
import axios from 'axios';



//states
const state = {
    username: '',
    lastname: '',
    currentStatus: '',
    token: localStorage.getItem('token') || '',
    NidUser: null,
}




// manipulate state for view ,
const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.currentStatus,
};



// mutate state and dispatch changes state changers
const mutations = {
    [AUTH_REQUEST]: state => state.currentStatus = 'loading',
    [AUTH_SUCCESS]: (state, token) => {
        state.currentStatus = 'success'
        state.token = token
    },
    [AUTH_LOGOUT]: state => {
        state.token = ''
        state.currentStatus = ''
    },
    [AUTH_ERROR]: (state) => state.currentStatus = 'error',
}


// actions contact real world apis pre process before sync changes to state
// context .commit
const actions = {
    [AUTH_REQUEST]: ({
        commit,
        dispatch
    }, user) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST);

            axios.post(`${process.env.ciServer}/users/login`, user)
                .then(resp => {
                    console.log(resp);
                    const token = resp.data.token;
                    localStorage.setItem('token', token);
                    commit(AUTH_SUCCESS, resp);
                    // you have your token, now log in your user :)
                    dispatch(USER_REQUEST);
                    resolve(resp);
                })
                .catch(err => {
                    commit(AUTH_ERROR, err);
                    localStorage.removeItem('token');
                    reject(err);
                })
        })
    },
    [AUTH_LOGOUT]: ({
        commit
    }) => {
        return new Promise((resolve) => {
            commit(AUTH_LOGOUT);
            localStorage.removeItem('token');

            // remove the axios default header
            delete axios.defaults.headers.common['Authorization'];
            resolve();
        })

    }
}
export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
};