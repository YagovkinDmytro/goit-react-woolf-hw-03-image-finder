const ContactsList = ({ contactsArr, handleDelete }) => {
  return (
    <ul>
      {contactsArr.map(({ id, name, number }) => (
        <li className="contact-list-item" key={id}>
          {name}: {number}
          <button
            className="contact-button delete"
            type="submit"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
