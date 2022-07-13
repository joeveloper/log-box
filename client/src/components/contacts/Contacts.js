import React, {useContext, Fragment, useRef} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';



 const Contacts = () => {
     const contactContext = useContext(ContactContext);

     const nodeRef = useRef();


     const {contacts, filtered} = contactContext;
     if (contacts.length === 0) {
      return <h4>Please add a contact</h4>
     } 

  return (
    <Fragment>
      {/* <TransitionGroup> */}
      { filtered !== null 
        ? filtered.map(contact => 
            (
            // <CSSTransition key={contact.id} timeout={500} nodeRef={nodeRef}  classNames="item">
            <ContactItem key={contact.id}  contact={contact}/> ))
        : contacts.map(contact => (
          // <CSSTransition key={contact.id} timeout={500} nodeRef={nodeRef} classNames="item">
            <ContactItem key={contact.id}  contact={contact}/>
            
        ))}
      {/* </TransitionGroup> */}

    </Fragment>
    
  );
};

export default Contacts;