import css from './Views.module.css';
import phonebookImg from './icon-book.png';

export default function HomeView() {
  return (
    <div className={css.hello}>
      <img src={phonebookImg} alt="Phonebook" width="100" />
      <h2>Welcome to Contacts List</h2>
    </div>
  );
}
