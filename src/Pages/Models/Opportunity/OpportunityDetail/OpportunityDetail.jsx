import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Components
import OpportunityDetailCard from './OpportunityDetailCard'

// Services
import * as opportunityService from '../../../../services/opportunityService.js'

// Styles
import styles from './OpportunityDetailCard.module.css'

const OpportunityDetail = (props) => {
    const [opportunityDetail, setOpportunityDetail] = useState('')

    useEffect(() => {
        (async () => {
            const newOpportunityDetail = await opportunityService.getOpportunityById(props.match.params.id)
            setOpportunityDetail(newOpportunityDetail)
        })()
    }, [props.match.params.id]);
    
    return ( 
    <div className={styles.outsideContainer}>
        <OpportunityDetailCard 
            {...props}
            opportunityDetail={opportunityDetail}
        />
    </div> 
    );
}
 
export default withRouter(OpportunityDetail);