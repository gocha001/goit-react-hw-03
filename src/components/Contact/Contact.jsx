import css from "./Contact.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { PiPhoneFill } from "react-icons/pi";

const Contact = ({ id, name, number, handleDeleteContact, inputValue }) => {
  return (
    <>
      {(!inputValue ||
        name.toLowerCase().includes(inputValue.toLowerCase())) && (
        <div className={css.container}>
          <div className={css.contact}>
            <div className={css.item}>
              <RiUser3Fill className={css.icon} size="24" />
              <p>{name}</p>
            </div>
            <div className={css.item}>
              <PiPhoneFill className={css.icon} size="24" />
              <p>{number}</p>
            </div>
          </div>
          <button onClick={() => handleDeleteContact(id)} className={css.btn}>
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
