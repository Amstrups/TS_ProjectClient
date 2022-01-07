import { useState } from "react";
import OwnerList from './OwnerList'


export default function OwnerCollapsible({open, owners, companyId}) {
    const [isOpen, setIsOpen] = useState(open);

    const onClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="innerCompanyContainer">
            <button onClick={onClick} type="button" title="Click to expand" className='ownerListCollapsible'>

              <h4 >Owners</h4>
            </button>
            <div className='ownerListCollapsible'>
            {isOpen && <OwnerList key={owners.id} owners={owners} companyId={companyId}/>} 
            </div>
            </div>
    )
}
