import React from "react";
import Modal from "react-modal/lib/components/Modal";
import { AddOwnerModal, UpdateModal } from "../ModalComponent";
import ReactModal from "react-modal";

Modal.setAppElement("#root");

class CompanyOptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: props.company,
      owners: props.company.owners,
      showAddOwnerModal: false,
      showUpdateModal: false,
    };

    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickUpdate = this.onClickUpdate.bind(this);
    this.onClickAddOwner = this.onClickAddOwner.bind(this);

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  onClickDelete = () => {
    if (!this.state.showUpdateModal) {
      this.setState({ showUpdateModal: true });
    }
    console.log("Delete");
  };

  onClickUpdate = () => {
    if (!this.state.showingModal) {
      this.setState({ showUpdateModal: true });
    }
  };

  onClickAddOwner = () => {
    if (!this.state.showingModal) {
      this.setState({ showAddOwnerModal: true });
    }
  };

  handleCloseModal = () => {
    this.setState({
      showAddOwnerModal: false,
      showUpdateModal: false,
    });
    this.props.rerender();
  };

  render() {
    return (
      <div id="optionListContainer">
        <ul className="optionsList">
          <li>
            <button onClick={this.onClickDelete}>Delete</button>
          </li>
          <li>
            <button onClick={this.onClickUpdate}>Update</button>
          </li>
          <li>
            <button onClick={this.onClickAddOwner}>Add Owner</button>
          </li>
        </ul>

        <ReactModal
          className="modalContainer"
          isOpen={this.state.showUpdateModal}
          handleCloseModal={this.handleCloseTest}
        >
          <UpdateModal
            handleCloseModal={this.handleCloseModal}
            company={this.state.company}
          />
        </ReactModal>
        <ReactModal
          isOpen={this.state.showAddOwnerModal}
          className="modalContainer"
        >
          <AddOwnerModal
            handleCloseModal={this.handleCloseModal}
            owners={this.state.owners}
          />
        </ReactModal>
      </div>
    );
  }
}

export default CompanyOptionList;
