import { Component } from "react";
import { connect } from "react-redux";
import action from "../redux/phoneBook/phoneBook-action";
import contactUsersStyles from "./contactUsersStyles";

const { H2, Ul, Li, Name, Button } = contactUsersStyles;

class ContactUsers extends Component {
  filterContact = (content, filter) => {
    return content.filter(
      ({ name }) => !name.toLowerCase().indexOf(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter, onRemoveContact } = this.props;
    const filteredContacts = this.filterContact(contacts, filter);
    return (
      <>
        <H2>Contacts </H2>
        <Ul>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <Li key={id}>
                <Name>
                  {name} :{number}
                </Name>
                <Button onClick={() => onRemoveContact(id)}>Delete</Button>
              </Li>
            );
          })}
        </Ul>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.phoneBook.contacts,
    filter: state.phoneBook.filter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveContact: (id) => dispatch(action.removeContact(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactUsers);
