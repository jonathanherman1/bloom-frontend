import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import * as companyService from '../../services/companyService.js'

const CompanyDetail = (props) => {
    const [companyDetail, setCompanyDetail] = useState('')
    console.log(props)
    useEffect(() => {
        (async () => {
            const newCompanyDetail = await companyService.getCompanyById(props.match.params.id)
            setCompanyDetail(newCompanyDetail)
        })()
    }, []);
    return ( 
    <div>
        <p>details details details</p>
        <p>{companyDetail.name}</p>
        <p>{companyDetail.date}</p>
        <p>{companyDetail.notes}</p>
    </div> 
    );
}
 
export default withRouter(CompanyDetail);