import { useState } from 'react';
import shortid from 'shortid';
import styles from '../Styles/styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contacts';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleAddContact = e => {
    e.preventDefault();
    setContact({
      id: shortid.generate(),
      name,
      number,
    });
    setName('');
    setNumber('');
  };

  const setContact = value => {
    if (
      contacts.every(
        ({ name }) => name.toLowerCase() !== value.name.toLowerCase()
      )
    ) {
      dispatch(addContact(value));
    } else {
      alert(`${value.name} is already in contacts`);
    }
  };

  return (
    <form onSubmit={handleAddContact}>
      <label htmlFor={nameInputId} className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={nameInputId} className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id={nameInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contacts</button>
    </form>
  );
}
