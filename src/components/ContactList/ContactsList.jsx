import ContactItem from "../ContactList/ContactItem";
import css from "./ContactsList.module.css";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import Modal from "../Modal/Modal";
import { useState } from "react";

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [contact, setContact] = useState({});

  const openModal = (contactData) => {
    setContact(contactData);
    setIsOpenModal(true);
  };
  return (
    <>
      <ul className={css.wrapper}>
        {visibleContacts &&
          visibleContacts.map((contact) => (
            <ContactItem openModal={openModal} key={contact.id} contact={contact} />
          ))}

        {visibleContacts && visibleContacts.length === 0 && (
          <p>List is empty</p>
        )}
      </ul>

      {isOpenModal && <Modal onClick={setIsOpenModal} contact={contact} />}
    </>
  );
};

export default ContactList;