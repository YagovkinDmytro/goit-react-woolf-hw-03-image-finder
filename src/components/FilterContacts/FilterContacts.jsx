const FilterContacts = ({ stateFilter, handleChange }) => {
  return (
    <div className="search-container">
      <label htmlFor="filtrName" className="search-lable">
        Find contacts by name
      </label>
      <input
        value={stateFilter}
        onChange={evt => handleChange(evt)}
        className="form-imput"
        type="text"
        id="filter"
        name="filter"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </div>
  );
};

export default FilterContacts;
