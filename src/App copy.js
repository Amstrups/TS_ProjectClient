import React, { useState } from "react";
import CompanyList from "./components/Company/CompanyList";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: null,
    };

    /*const [companies, setCompanies] = useState([
      ,
    ]);
    */
  }

  /*async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch("https://api.npms.io/v2/search?q=react");
    const data = await response.json();
    this.setState({ companies: data.total });
  }*/

  componentDidMount() {
    this.setState({
      companies: [
        {
          id: 1,
          name: "Clearhaus",
          country: "Denmark",
          owners: [
            {
              id: 2,
              name: "Klaus",
              socialNumber: "1111118889",
            },
            {
              id: 1,
              name: "Gerth",
              socialNumber: "9999999999",
            },
          ],
        },
        {
          id: 2,
          name: "AU",
          country: "Denmark",
          owners: [
            {
              id: 3,
              name: "Gerth",
              socialNumber: "9999999999",
            },
          ],
        },
      ],
    });
  }

  render() {
    const { companies } = this.state;
    console.log("Companies:", companies);

    const createCompany = () => {
      console.log("CreateCompany");
    };
    return (
      <div className="container">
        <div>
          <Header />
          <CompanyList companies={companies} />
        </div>
        <button onClick={createCompany}>
          <h3>Create company</h3>
        </button>
      </div>
    );
  }
}

export default App;
