import React from 'react';
import { Contactelement, Button } from './ContactList.styled';
import { getFilter, getContacts, deleteContact } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterListContact = changeFilterContacts();

  const getDeletContact = id => {
    dispatch(deleteContact(id));
  };

  console.log(filterListContact);
  return (
    <ul>
      {filterListContact.map(contact => {
        return (
          <Contactelement
            key={contact.id}
            contact={contact}
            // handlerDelet={getDeletContact}
          >
            {contact.name}:{contact.number}
            <Button onClick={() => getDeletContact(contact.id)}>Delet</Button>
          </Contactelement>
        );
      })}
    </ul>
  );
};

export default ContactList;
