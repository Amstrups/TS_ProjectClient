import React from "react";
import CompanyList from "./components/company/CompanyList";
import Header from "./components/Header";
import { companiesData } from "./components/company/CompanySampleData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: companiesData,
    };
  }

  //Unable to test due to localhosting (CORS)
  /*async componentDidMount() {
    const response = await fetch("http://localhost:4000/GetCompanies");
    console.log("Data:", response.json());
    const data = await response.json();
    this.setState({ companies: data.total });
  }*/

  render() {
    const createCompany = () => {
      console.log("CreateCompany");
    };

    const { companies } = this.state;

    return (
      <div className="container">
        <div>
          <Header />
          <CompanyList companies={companies} />
        </div>
        <div className="createContainer">
          <button onClick={createCompany}>
            <h3>Create company</h3>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
