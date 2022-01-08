import React from "react";
import { ownerData } from "../components/company/CompanySampleData";

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: props.isOpen,
      company: props.company,
      owners: props.owners,
    };

    this.handleCloseModalOnClick = this.handleCloseModalOnClick.bind(this);
  }

  render() {
    return null;
  }
}

class UpdateModal extends ModalComponent {
  constructor(props) {
    super(props);
    this.subState = {
      name: this.state.company.name,
      country: this.state.company.country,
    };

    this.handleCloseModalOnClick = this.handleCloseModalOnClick.bind(this);
  }

  handleCloseModalOnClick() {
    this.props.handleCloseModal();
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <ul className="optionsList">
          <form>
            <li>
              <h3>Name</h3>
              <input type="text" name="name" value={this.state.company.name} />
              <h3>Country</h3>
              <input
                type="text"
                name="country"
                value={this.state.company.country}
              />
            </li>
            <li className="optionsList">
              <input type="submit" value="Update" />
              <button onClick={this.handleCloseModalOnClick}>Close</button>
            </li>
          </form>
        </ul>
      </>
    );
  }
}

class AddOwnerModal extends ModalComponent {
  handleCloseModalOnClick() {
    const newOwners = this.state.owners;
    this.setState({
      owners: newOwners.push(ownerData.pop()),
    });
    this.props.handleCloseModal();
  }

  render() {
    return (
      <>
        AddOwner modal
        <button onClick={this.handleCloseModalOnClick}>Close</button>
      </>
    );
  }
}
class CreateCompanyModal extends ModalComponent {
  render() {}
}

export { AddOwnerModal, UpdateModal, CreateCompanyModal };
