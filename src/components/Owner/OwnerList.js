import React from 'react'
import Owner from './Owner'

export default function OwnerList({owners,companyId}) {
    return ( 
        owners.map(owner => {
            return <Owner shown={false} key={owner.id} owner={owner} companyId={companyId}/>
        })
    )
}
