import { Component } from 'react';
import { nanoid } from 'nanoid';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import Section from './Section/Section';
import './Section/section.css';
import ContactsList from './ContactsList/ContactsList';
import FilterContacts from './FilterContacts/FilterContacts';
import './PhonebookForm/phonebookForm.css';
import './FilterContacts/filterContacts.css';
import './ContactsList/contactsList.css';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = contacts => {
    this.createNewContact(contacts);
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  createNewContact = ({ name, number }) => {
    const isExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const loginInputId = nanoid();
    this.setState(prev => ({
      contacts: [...prev.contacts, { id: loginInputId, name, number }],
    }));
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(this.state.filter.toLowerCase())
    );
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(elem => elem.id !== id),
    }));
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData && JSON.parse(localData).length > 0) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div className="container">
        <Section title="Phonebook">
          <PhonebookForm handleSubmit={this.handleSubmit} />
        </Section>
        <Section title="Contacts">
          <FilterContacts
            stateFilter={this.state.filter}
            handleChange={this.handleChange}
          />
          <ContactsList
            contactsArr={this.filterContacts()}
            handleDelete={this.handleDelete}
          />
        </Section>
      </div>
    );
  }
}
