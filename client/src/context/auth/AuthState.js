import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';

import {
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT, 
    CLEAR_ERRORS
} from '../types';


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null
    };
    const [state, dispatch] = useReducer(authReducer, initialState);

    //LOAD_USER
    const loadUser = async () => {
        //@todo - load token into global headers

        try {
            const res = await axios.get('/api/auth');
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: AUTH_ERROR
            });
        }
    }

    //REGISTER_USER
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users', formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            loadUser();
        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.msg
            });
        }
    }

    //LOGIN_USER
    const login = () => {
        console.log('user logged in');
    }

    //LOGOUT
    const logout = () => {
        console.log('user logged out');
    }

    //CLEAR_ERROR
    const clearErrors = () => {
        dispatch(
            {
                type: CLEAR_ERRORS
            }
        );
        console.log('Error cleared');
        
    }


    return  (
        <AuthContext.Provider
        value = {{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error,
            loadUser,
            register,
            login,
            logout,
            clearErrors

        }} >
            {props.children}
        </AuthContext.Provider>
            )
    
};

export default AuthState;


