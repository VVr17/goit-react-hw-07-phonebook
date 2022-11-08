import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';
import { Button } from '../Button/Button';
import { ContactStyled } from './Contact.styled';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  function onDelete(id, name) {
    dispatch(deleteContact(id));
    toast.info(`${name.toUpperCase()} deleted from CONTACTS`);
  }

  return (
    <ContactStyled>
      <Box display={['block', 'block', 'flex']}>
        <p>{name}:</p>
        <p>{number}</p>
      </Box>
      <Button onClick={() => onDelete(id, name)}>Delete</Button>
    </ContactStyled>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
