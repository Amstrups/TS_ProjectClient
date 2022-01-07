import OwnerCollapsible from "../Owner/OwnerCollapsible";
import OwnerList from "../Owner/OwnerList";
import { useState } from "react";
import CompanyOptionList from "./CompanyOptionList";

export default function Company({ company }) {
    const [isOpen,setIsOpen] = useState()



    return (
        <>
        <ul className="companyContainer">
            <li>
                <h3 className="companyName">{company.name}</h3>
                
                </li>             
            <li><p className="companyCountry">{company.country}</p></li>
        </ul>
                <OwnerCollapsible open={false} owners={company.owners} companyId={company.id}/>
            <CompanyOptionList company={company}/>
        </>


    )
}

//<li><OwnerList owners = {company.owners}/></li>