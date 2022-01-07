import { useState } from "react";
import CompanyList from "./components/Company/CompanyList";
import Header from "./components/Header";

function App() {

  const createCompany = () => {
    console.log("CreateCompany")
  }

  const [companies, setCompanies] = useState([
  {
    id: 1, 
    name: "Clearhaus", 
    country: "Denmark", 
    owners: [{
      id:2,
      name:"Klaus",
      socialNumber: "1111118889"
    },{
      id:1,
      name:"Gerth",
      socialNumber: "9999999999"
    }]
  },{
    id: 2, 
    name: "AU", 
    country: "Denmark", 
    owners: [{
      id:3,
      name:"Gerth",
      socialNumber: "9999999999"
    }]
    }
  ])
  return (
  <div className="container">
  <div >
    <Header />
    <CompanyList companies={companies}/>
  </div>
    <button onClick={createCompany}><h3>Create company</h3></button>
  </div>
  )
}

export default App;
