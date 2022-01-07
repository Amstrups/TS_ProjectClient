import Company from './Company'

export default function CompanyList({companies}) {
    return (
        companies.map(company => {
            return <Company key={company.id} company={company}/>
        })
    )
}