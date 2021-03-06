import React, { useReducer } from 'react';
// import uuid from 'uuid';
import {v4 as uuid} from "uuid";
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types';


const ContactState = props => {
    const initialState = {
        contacts: [
                {id: 1,
                name: 'jill Johnson',
                email: 'jill@mail.com',
                phone: '11111111',
                type: 'personal'
            },
    
            {   id: 2,
                name: 'mario faran',
                email: 'mario@mail.com',
                phone: '22222222',
                type: 'personal'
            },
    
            {   id: 3,
                name: 'Lugi james',
                email: 'lugi@mail.com',
                phone: '33333333',
                type: 'professional'
            }
        ],
        current: null,
        filtered: null
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);

    // ADD_CONTACT
    const addContact = contact => {
        contact.id = uuid();
        dispatch(
            {type: ADD_CONTACT,
            payload: contact}
        )
    }

    // DELETE_CONTACT
    const deleteContact = id => {
        dispatch(
            {type: DELETE_CONTACT,
            payload: id}
        )
    }

    // SET_CURRENT CONTACT
    const setCurrent = (contact) => {
        dispatch(
            {type: SET_CURRENT,
            payload: contact}
        )
    }


    // CLEAR_CURRENT
    const clearCurrent = () => {
        dispatch(
            {type: CLEAR_CURRENT}
        )
    }


    // UPDATE_CONTACT
    const updateContact = contact => {
        dispatch(
            {type: UPDATE_CONTACT,
            payload: contact}
        )
    }


    // FILTER_CONTACT
    const filterContact = text => {
        dispatch(
            {type: FILTER_CONTACT,
            payload: text}
        )
    }


    // CLEAR_FILTER
    const clearFilter = () => {
        dispatch(
            {type: CLEAR_FILTER,
            }
        )
    }

    return  (
        <ContactContext.Provider
        value = {{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContact,
            clearFilter
        }} >
            {props.children}
        </ContactContext.Provider>
            )
    
};

export default ContactState;


