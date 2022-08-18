import ContactForm from './Components/ContactForm';
import Contacts from './Components/ContactList';
import Filter from './Components/Filter';
import Section from './Components/Section';
// import shortid from 'shortid';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </div>
  );
}
