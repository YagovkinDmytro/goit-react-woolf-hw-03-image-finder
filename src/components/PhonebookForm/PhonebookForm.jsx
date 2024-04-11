import { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};
class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.handleSubmit(this.state);
    this.setInitialState();
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  setInitialState = () =>
    this.setState({
      ...INITIAL_STATE,
    });

  render() {
    const { name, number } = this.state;
    return (
      <>
        <div>
          <form className="form-container" onSubmit={this.handleFormSubmit}>
            <div className="form-container-name">
              <label htmlFor="name" className="form-lable">
                Name
              </label>
              <input
                value={name}
                onChange={evt => this.handleChange(evt)}
                className="form-imput"
                type="text"
                id="name"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </div>
            <div className="form-container-number">
              <label htmlFor="number" className="form-lable">
                Number
              </label>
              <input
                value={number}
                onChange={evt => this.handleChange(evt)}
                className="form-imput"
                type="tel"
                id="number"
                name="number"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </div>
            <button className="form-button submit" type="submit">
              Add contact
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default PhonebookForm;
