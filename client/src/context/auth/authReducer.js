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

export default (state, action) => {
    switch (action.type) {
        case USER_LOADED: 
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGOUT: 
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                loading: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS: 
            return {
                ...state,
                error: null
            }
    
        default:
            return state;
    }
}

