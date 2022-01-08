import Company from "./Company";
import React from "react";

export default function CompanyList({ companies }) {
  return companies.map((company) => {
    return <Company key={company._id} company={company} />;
  });
}
