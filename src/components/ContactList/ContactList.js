import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectAllContacts, selectFilter } from 'redux/contacts/selectors';
// import { selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts =>
    contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ul>
      {filteredContacts(contacts).map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
