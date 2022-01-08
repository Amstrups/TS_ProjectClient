import React from "react";
import OwnerCollapsible from "../Owner/OwnerCollapsible";
import CompanyOptionList from "./CompanyOptionList";

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: props.company,
    };

    this.rerender = this.rerender.bind(this);
  }
  rerender() {
    this.forceUpdate();
  }

  render() {
    const { company } = this.state;

    return (
      <>
        <ul className="companyContainer">
          <li>
            <h3 className="companyName">{company.name}</h3>
          </li>
          <li>
            <p className="companyCountry">{company.country}</p>
          </li>
        </ul>
        <OwnerCollapsible owners={company.owners} companyId={company.id} />
        <CompanyOptionList company={company} rerender={this.rerender} />
      </>
    );
  }
}

export default Company;
