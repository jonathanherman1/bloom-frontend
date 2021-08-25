import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import * as activityService from '../../services/activityService.js'

import styles from "./ActivityDetail.module.css"


const ActivityDetail = (props) => {
    const [activityDetail, setActivityDetail] = useState('')
    console.log(props)
    useEffect(() => {
        (async () => {
            const newActivityDetail = await activityService.getActivityById(props.match.params.act_id)
            setActivityDetail(newActivityDetail)
        })()
    }, []);
    return ( 
    <div>
        <p>details details details</p>
        <p>{activityDetail.name}</p>
        <p>{activityDetail.date}</p>
        <p>{activityDetail.notes}</p>
    </div> 
    );
}
 
export default withRouter(ActivityDetail);