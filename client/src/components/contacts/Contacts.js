import React, { Fragment, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import Spinner from '../layout/Spinner';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Add a contact to get started!</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <div>
          {filtered !== null
            ? filtered.map((contact) => (
                <motion.div
                  key={contact._id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <ContactItem contact={contact} />
                </motion.div>
              ))
            : contacts.map((contact) => (
                <motion.div
                  key={contact._id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <ContactItem contact={contact} />
                </motion.div>
              ))}
        </div>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
