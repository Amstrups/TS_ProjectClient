import React from "react";
import { ownerData } from "./CompanySampleData";

class CompanyOptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: props.company,
      owners: props.company.owners,
    };

    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickUpdate = this.onClickUpdate.bind(this);
    this.onClickAddOwner = this.onClickAddOwner.bind(this);
  }

  onClickDelete = () => {
    console.log("Delete");
  };

  onClickUpdate = () => {
    console.log("Update on ", this.state.company.name);
  };

  onClickAddOwner = () => {
    const newOwner = ownerData.pop();
    this.setState({
      owners: this.state.owners.push(newOwner),
    });
    this.props.rerender();
  };

  render() {
    return (
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
    );
  }
}

export default CompanyOptionList;
