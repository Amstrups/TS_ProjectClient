import { useState } from "react";
import OwnerList from "./OwnerList";

export default function OwnerCollapsible({ owners, companyId }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };
  var count = 0;
  owners.forEach((element) => {
    count += 1;
  });

  return (
    <div className="innerCompanyContainer">
      <button
        onClick={onClick}
        type="button"
        title="Click to expand"
        className="ownerListCollapsible"
      >
        <h4>Owners ({count})</h4>
      </button>
      <div className="ownerListCollapsible">
        {isOpen && (
          <OwnerList key={owners._id} owners={owners} companyId={companyId} />
        )}
      </div>
    </div>
  );
}
