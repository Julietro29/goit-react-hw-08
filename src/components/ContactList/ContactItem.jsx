import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import css from "./ContactItem.module.css";
import PropTypes from "prop-types";
import { apiDeleteUserContact } from "../../redux/contacts/operations";

const ContactItem = ({ contact, openModal }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(apiDeleteUserContact(contact.id));

  return (
    <li className={css.mainWrapper}>
      <div className={css.textWrapper}>
        <div className={css.textInfo}>
          <FaUser /> {contact.name}
        </div>
        <div>
          <FaPhone /> {contact.number}
        </div>
      </div>

      <div className={css.btnWrapper}>
        <button
          className={css.btn}
          type="button"
          onClick={() => {
            openModal(contact);
          }}
        >
          Edit
        </button>
        <button className={css.btn} type="button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ContactItem;