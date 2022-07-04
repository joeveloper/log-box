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

const initialState = {
    contacts: [
        {id: 1,
        name: 'jill Johnson',
        email: 'jill@mail.com',
        phone: '11111111',
        type: 'personal'
        },

        {id: 1,
            name: 'mario faran',
            email: 'mario@mail.com',
            phone: '22222222',
            type: 'personal'
        },

<<<<<<< HEAD
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
        ]
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);
=======
        {id: 1,
            name: 'Lugi james',
            email: 'lugi@mail.com',
            phone: '33333333',
            type: 'personal'
        }
    ]
};


const ContactState = props => {
    const [state, dispatch] = useReducer(contactReduer, initialState);
>>>>>>> d09143b1300087800f46dcae2192f631f8af79f1

    // ADD_CONTACT
    const addContact = contact => {
        contact.id = uuid();
        dispatch(
            {type: ADD_CONTACT,
            payload: contact}
        )
    }

    // DELETE_CONTACT


    // SET_CURRENT CONTACT


    // CLEAR_CURRENT


    // UPDATE_CONTACT


    // FILTER_CONTACT


    // CLEAR_FILTER

<<<<<<< HEAD
    return  (
=======
    return (
>>>>>>> d09143b1300087800f46dcae2192f631f8af79f1
        <ContactContext.Provider
        value = {{
            contacts: state.contacts,
            addContact
        }} >
            {props.children}
        </ContactContext.Provider>
            )
    
};

export default ContactState;


