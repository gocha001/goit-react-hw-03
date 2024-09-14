import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";

import "./App.css";

import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import contactsData from "../../contacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(
      window.localStorage.getItem("saved-contacts")
    );
    if (savedContacts !== null) {
      return savedContacts;
    }
    return contactsData;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (values, options) => {
    values.id = nanoid();
    setContacts((prev) => [...prev, values]);
    options.resetForm();
  };

  const [inputValue, setInputValue] = useState("");

  const handleSearch = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />
        <SearchBox inputValue={inputValue} handleSearch={handleSearch} />
        <ContactList
          contacts={contacts}
          handleDeleteContact={handleDeleteContact}
          inputValue={inputValue}
        />
      </div>
    </>
  );
}

export default App;
