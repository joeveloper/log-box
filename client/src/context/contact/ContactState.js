import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReduer from  './contactReducer';

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
    
            {id: 1,
                name: 'mario faran',
                email: 'mario@mail.com',
                phone: '22222222',
                type: 'personal'
            },
    
            {id: 1,
                name: 'Lugi james',
                email: 'lugi@mail.com',
                phone: '33333333',
                type: 'personal'
            }
        ]
    };
    const [state, dispatch] = useReducer(contactReduer, initialState);

    // ADD_CONTACT


    // DELETE_CONTACT


    // SET_CURRENT CONTACT


    // CLEAR_CURRENT


    // UPDATE_CONTACT


    // FILTER_CONTACT


    // CLEAR_FILTER

    return     
        (
        <ContactContext.Provider
        value = {{
            contacts: state.contacts,

        }} >
            {props.children}
        </ContactContext.Provider>
            )
    
};

export default ContactState;


