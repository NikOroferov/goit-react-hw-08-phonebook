import css from './Views.module.css';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

export default function ContactsView() {
  return (
    <div className={css.container}>
      <div className={css.form}>
        <Form />
      </div>

      <div className={css.contacts}>
        <Filter />
        <Contacts />
      </div>
    </div>
  );
}
