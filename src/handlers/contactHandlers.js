import * as contactService from '../services/contactService.js';

const handleDeleteContact = async (contacts, setContacts, id) => {
  try {
    const deletedContact = await contactService.deleteOne(id);
    let conArray = contacts.filter((con) => con.id !== id);
    setContacts(conArray);
    return deletedContact;
  } catch (error) {
    throw error;
  }
};

export { handleDeleteContact };
