import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import OpportunityDetailCard from './OpportunityDetailCard'
import * as opportunityService from '../../services/opportunityService.js'

const OpportunityDetail = (props) => {
    const [opportunityDetail, setOpportunityDetail] = useState('')

    useEffect(() => {
        (async () => {
            const newOpportunityDetail = await opportunityService.getOpportunityById(props.match.params.opp_id)
            setOpportunityDetail(newOpportunityDetail)
        })()
    }, []);
    return ( 
    <div>
        <OpportunityDetailCard 
            opportunityDetail={opportunityDetail}
        />
    </div> 
    );
}
 
export default withRouter(OpportunityDetail);