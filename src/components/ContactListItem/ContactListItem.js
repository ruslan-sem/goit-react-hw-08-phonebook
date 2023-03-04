import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = event => {
    dispatch(deleteContact(event.target.id));
  };

  return (
    <li>
      {name}: {number}{' '}
      <button type="button" id={id} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
