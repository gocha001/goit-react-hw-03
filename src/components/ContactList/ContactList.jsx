import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contacts, handleDeleteContact, inputValue }) => {
  return (
    <div className={css.container}>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact
                id={contact.id}
                name={contact.name}
                number={contact.number}
                handleDeleteContact={handleDeleteContact}
                inputValue={inputValue}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
