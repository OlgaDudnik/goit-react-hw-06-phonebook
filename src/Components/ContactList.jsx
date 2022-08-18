import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contacts';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);

  const filteredContacts = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  const dispatch = useDispatch();

  return (
    <ul>
      {filteredContacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            {name}: {number}{' '}
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
