import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Box } from 'components/Box/Box';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import { getContacts, getError, getFilter, getLoading } from 'redux/selectors';
import { getFilteredContacts } from 'helpers/getFilteredContacts';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import { Section } from 'components/Section/Section';
import { Text, Title } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as="main" bg="mainBackgroundColor">
      <Title>PhoneBook</Title>
      <Section title="Create new contact">
        <NewContactForm />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 && <Filter />}
        <Loader isLoading={isLoading} />
        {filteredContacts.length > 0 ? (
          <ContactList />
        ) : (
          <Text>There are no contacts</Text>
        )}
        {error && <p>{error}</p>}
      </Section>
      <ToastContainer autoClose={3000} theme="colored" />
    </Box>
  );
};