import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';


 const ContactItem = ({contact}) => {
     const {_id, name, email, phone, type} = contact;
     const contactContext = useContext(ContactContext);
     const {deleteContact, setCurrent, clearCurrent} = contactContext;

     const onDelete = () => {
        deleteContact(_id);
        clearCurrent();
     }

  return (
    <div className='card bg-light'>
        <h3 className="text-primary text-left">
            {name}{' '} 
            <span style={{float: 'right'}} className={'badge ' + 
            (type=== 'professional' ? 'badge-success ': 'badge-primary' )}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
        </h3>
        <ul className="list">
          {email && (<li>
            <i className="fas fa-envelop-open"></i>{email}
          </li>)}
          {phone && (<li>
            <i className="fas fa-phone"></i>{phone}
          </li>)}
        </ul>
        <p className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</p>
        <p className="btn btn-danger btn-sm" onClick={onDelete}>Delete</p>


    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactItem;