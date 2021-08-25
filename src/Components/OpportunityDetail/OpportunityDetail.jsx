import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import * as opportunityService from '../../services/opportunityService.js'

const OpportunityDetail = (props) => {
    const [opportunityDetail, setOpportunityDetail] = useState('')
    console.log(props)
    useEffect(() => {
        (async () => {
            const newOpportunityDetail = await opportunityService.getOpportunityById(props.match.params.opp_id)
            setOpportunityDetail(newOpportunityDetail)
        })()
    }, []);
    return ( 
    <div>
        
        <p>details details details</p>
        <p>{opportunityDetail.name}</p>
        <p>{opportunityDetail.date}</p>
        <p>{opportunityDetail.notes}</p>
    </div> 
    );
}
 
export default withRouter(OpportunityDetail);