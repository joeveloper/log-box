import React, {useContext, Fragment} from 'react'
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';



 const Contacts = () => {
     const contactContext = useContext(ContactContext);

     const {contacts} = contactContext;
  return (
    <Fragment>
      {contacts.map(contact => {
<<<<<<< HEAD
        return <ContactItem key={contact.id}  contact={contact}/>
=======
        return <ContactItem contact={contact} />
>>>>>>> d09143b1300087800f46dcae2192f631f8af79f1
      })}
    </Fragment>
    
  )
}

export default Contacts;