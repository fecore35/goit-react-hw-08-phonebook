import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleSharp } from "react-icons/io5";
import s from "./ContactList.module.css";
import {
  getVisibleContacts,
  getError,
} from "redux/contacts/contacts-selectors";
import {
  getContactsAsync,
  deleteContactAsync,
} from "redux/contacts/contacts-operation";

function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsAsync());
  }, [dispatch]);

  console.log(error && error.message);

  return (
    <ul className={s.list}>
      {error && (
        <li>
          <h2 style={{ color: "red", textTransform: "uppercase" }}>
            {error.message}
          </h2>
        </li>
      )}

      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => {
          const tel = `tel:` + number.replace(/^(\+)|\D/g, "$1");
          return (
            <li key={id} className={s.item}>
              <p>
                {name}: <a href={tel}>{number}</a>
              </p>
              <button
                className={s.button}
                type="button"
                data-id={id}
                onClick={(e) => {
                  dispatch(deleteContactAsync(e.currentTarget.dataset.id));
                }}
              >
                <IoCloseCircleSharp />
              </button>
            </li>
          );
        })}
    </ul>
  );
}

export default ContactList;
