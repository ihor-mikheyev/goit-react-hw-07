import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectVisibleContacts } from "../../redux/selectors";

export default function ContactList() {
  const visibleContact = useSelector(selectVisibleContacts);

  return (
    <ul className={css.ul}>
      {visibleContact.map((item) => {
        return (
          <li key={item.id}>
            <Contact contact={item}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
